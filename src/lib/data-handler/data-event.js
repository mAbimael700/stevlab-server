const { Socket } = require("node:net");
const { Device } = require("../../domain/Device")
const { SerialPort } = require("serialport");
const { emitStatusDevice } = require("../websocket/emit-device-status");
const { handleBuffer, clearProcessedBuffer } = require("./buffer-handler");
const BufferList = require("bl")
const {
  handleResults,
  finalizeResultsOnTimeout,
} = require("./results-handler");
const { setupTimeout } = require("./timeout-handler");

const MAX_DATA_SIZE = 1e6; // 1MB máximo por paquete

/**
 * @type {number | null}
 */
let lastMessageTime = null;

/**
 *
 * @param {Buffer} data
 * @param {Device} device
 * @param {BufferList} bufferList
 * @param {object} parsingData
 * @param {Socket | SerialPort} socket
 * 
 */
async function dataEvent(data, bufferList, parsingData, socket) {
  
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
        await handleResults(bufferResults.results, sendsBySingleParameter); // Manejo ajustado

        if (ackMessageFunction) {
          socket.write(ackMessageFunction(bufferResults.messageId));
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
    bufferList.consume(bufferList.length)
  }
}

module.exports = { dataEvent };
