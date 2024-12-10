const {
  emitStatusDevice,
} = require("../../../lib/websocket/emit-device-status");
const { handleBuffer, clearProcessedBuffer } = require("./buffer-handler");
const {
  handleResults,
  finalizeResultsOnTimeout,
} = require("./results-handler");
const { setupTimeout } = require("./timeout-handler");

const MAX_DATA_SIZE = 1e6; // 1MB máximo por paquete
let lastMessageTime = null;

async function dataEvent(data, device, bufferList, parsingData) {
  console.log(
    `Mensaje entrante del equipo con ${device.name} con IPv4: ${device.ip_address}:${device.port}`
  );
  emitStatusDevice(
    {
      last_connection: new Date(),
    },
    device
  );

  // Verifica el tamaño del paquete
  if (data.length > MAX_DATA_SIZE) {
    console.warn(`Paquete demasiado grande recibido: ${data.length} bytes`);
    return;
  }

  lastMessageTime = Date.now(); // Actualiza el tiempo del último mensaje
  bufferList.append(data); // Acumula los datos recibidos

  const { sendsBySingleParameter } = parsingData;

  try {
    while (true) {
      const accumulatedData = bufferList.toString("utf-8");
      const bufferResults = handleBuffer(accumulatedData, parsingData);

      if (bufferResults) {
        handleResults(bufferResults.results, sendsBySingleParameter); // Manejo ajustado
        clearProcessedBuffer(bufferList, bufferResults.consumedBytes);
      } else {
        // Si no hay más mensajes completos, salir del loop
        break;
      }
    }

    // Configura el timeout para procesar inactividad
    setupTimeout(lastMessageTime, () => {
      finalizeResultsOnTimeout();
    });
  } catch (error) {
    console.error("Error al procesar datos:", error);
  }
}

module.exports = { dataEvent };
