const { Socket } = require("node:net");
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
const { EquipmentParsingConfiguration } = require("../../domain/EquipmentParsingConfiguration");


class DataEvent {
  constructor() {
    /**
     * @type {number | null}
     */
    this.lastMessageTime = null;
    this.MAX_DATA_SIZE = 1e6; // 1MB máximo por paquete
  }


  /**
  *
  * @param {Socket | SerialPort} socket
  * @param {Buffer} data
  * @param {EquipmentParsingConfiguration} parsingConfiguration
  * @param {BufferList} bufferList
  *
  */
  async process(socket, data, parsingConfiguration, bufferList) {
    // Verifica el tamaño del paquete
    if (data.length > this.MAX_DATA_SIZE) {
      console.warn(`Paquete demasiado grande recibido: ${data.length} bytes`);
      throw new Error(`Paquete demasiado grande recibido: ${data.length} bytes`);
    }

    this.lastMessageTime = Date.now(); // Actualiza el tiempo del último mensaje
    bufferList.append(data); // Acumula los datos recibidos

    const { sendsBySingleParameter, ackMessageFunction } = parsingConfiguration;

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
        setupTimeout(this.lastMessageTime, () => {
          finalizeResultsOnTimeout();
        });
      }
    } catch (error) {
      console.error("Error al procesar datos:", error.message);
      console.warn('Datos a eliminar después del consumo: ', bufferList.toString("utf-8"))
      bufferList.consume(bufferList.length);
      throw new Error(`Error al procesar datos: ${error.message}`, error)
    }
  }
}

module.exports = { DataEvent };
