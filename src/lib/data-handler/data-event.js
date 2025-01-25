const { Socket } = require("node:net");
const { SerialPort } = require("serialport");
const { emitStatusDevice } = require("../websocket/emit-device-status");
const { handleBuffer, clearProcessedBuffer } = require("./buffer-handler");
const {
  handleResults,
  finalizeResultsOnTimeout,
} = require("./results-handler");
const { setupTimeout } = require("./timeout-handler");

const MAX_DATA_SIZE = 1e6; // 1MB máximo por paquete
let lastMessageTime = null;

/**
 *
 * @param {*} data
 * @param {*} device
 * @param {*} bufferList
 * @param {*} parsingData
 * @param {Socket | SerialPort} socket
 * @returns
 */
async function dataEvent(data, device, bufferList, parsingData, socket) {
  const filteredData = data.toString().replace(/\x02/g, "");

  // Verificar si el chunk filtrado tiene datos útiles antes de imprimir
  if (filteredData.trim()) {
    console.log(
      `Mensaje entrante del equipo ${device.name}  ${
        device.ip_address && `con IPv4: ${device.ip_address}`
      } en el puerto ${device.port}`
    );
    emitStatusDevice(
      {
        last_connection: new Date(),
      },
      device,
      `Mensaje entrante del equipo ${device.name}  ${
        device.ip_address && `con IPv4: ${device.ip_address}`
      } en el puerto ${device.port}`
    );
  }

  // Verifica el tamaño del paquete
  if (data.length > MAX_DATA_SIZE) {
    console.warn(`Paquete demasiado grande recibido: ${data.length} bytes`);
    return;
  }

  lastMessageTime = Date.now(); // Actualiza el tiempo del último mensaje
  bufferList.append(data); // Acumula los datos recibidos

  const { sendsBySingleParameter, ackMessageFunction } = parsingData;

  try {
    while (true) {
      const accumulatedData = bufferList.toString("utf-8");
      const bufferResults = handleBuffer(accumulatedData, parsingData);

      if (bufferResults) {
        const folio = await handleResults(
          bufferResults.results,
          sendsBySingleParameter
        ); // Manejo ajustado

        if (ackMessageFunction) {
          socket.write(ackMessageFunction(folio));
          console.log("ACK enviado: ", folio);
          
        }

        clearProcessedBuffer(bufferList, bufferResults.consumedBytes);
      } else {
        // Si no hay más mensajes completos, salir del loop
        break;
      }
    }

    if (sendsBySingleParameter) {
      // Configura el timeout para procesar inactividad
      setupTimeout(lastMessageTime, () => {
        finalizeResultsOnTimeout();
      });
    }
  } catch (error) {
    console.error("Error al procesar datos:", error);
  }
}

module.exports = { dataEvent };
