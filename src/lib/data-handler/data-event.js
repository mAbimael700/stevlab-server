const { Socket } = require("node:net");
const { Equipment } = require("../../domain/Equipment/Equipment");
const { SerialPort } = require("serialport");
const {
  handleBuffer,
  parseMessage,
  clearProcessedBuffer,
} = require("./buffer-handler");
const BufferList = require("bl");
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
 * @param {Equipment} device
 * @param {BufferList} bufferList
 * @param {object} parsingData
 * @param {Socket | SerialPort} socket
 *
 */
async function dataEvent(socket, data, parsingData, bufferList) {
  // Verifica el tamaño del paquete
  if (data.length > MAX_DATA_SIZE) {
    console.warn(`Paquete demasiado grande recibido: ${data.length} bytes`);
    throw new Error(`Paquete demasiado grande recibido: ${data.length} bytes`);
  }

  lastMessageTime = Date.now(); // Actualiza el tiempo del último mensaje
  bufferList.append(data); // Acumula los datos recibidos

  const { sendsBySingleParameter, ackMessageFunction } = parsingData;

  try {
    while (true) {
      const accumulatedData = bufferList.toString("utf-8");
      const bufferResults = handleBuffer(accumulatedData, parsingData);

      if (bufferResults) {
        const parsedResults = parseMessage(
          bufferResults.completeMessage,
          parsingData
        );
        await handleResults(parsedResults, sendsBySingleParameter); // Manejo ajustado

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
    console.error("Error al procesar datos:", error.message);
    console.warn('Datos a eliminar después del consumo: ', bufferList.toString("utf-8"))
    bufferList.consume(bufferList.length);
    throw new Error("Error al procesar datos:", error)
  }
}

module.exports = { dataEvent };
