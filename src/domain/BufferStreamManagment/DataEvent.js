const { Socket } = require("node:net");
const { SerialPort } = require("serialport");
const BufferList = require("bl");
const { setupTimeout } = require("../data-handler/timeout-handler");
const { EquipmentParsingConfiguration } = require("../../domain/Equipment/EquipmentParsingConfiguration");
const { BufferStreamHandler } = require("./BufferStreamHandler");
const { ResultHandler } = require("./ResultHandler");
const { BufferParser } = require("./BufferParser");


class DataEvent {

  /**
    @param {EquipmentParsingConfiguration} configuration 
   */
  constructor(configuration) {
    /**
     * @type {number | null}
     */
    this.lastMessageTime = null;
    /**
     * @type {number}
     */
    this.maxDataSize = 1e6; // 1MB máximo por paquete
    this.bufferList = new BufferList()
    this.configuration = configuration
    this.bufferHandler = new BufferStreamHandler(configuration)
    this.bufferParser = new BufferParser(configuration)
    this.resultHandler = new ResultHandler(configuration)
  }


  /**
  *
  * @param {Socket | SerialPort} socket
  * @param {Buffer} data
  */
  async process(socket, data) {
    // Verifica el tamaño del paquete
    if (data.length > this.maxDataSize) {
      console.warn(`Paquete demasiado grande recibido: ${data.length} bytes`);
      throw new Error(`Paquete demasiado grande recibido: ${data.length} bytes`);
    }

    this.lastMessageTime = Date.now(); // Actualiza el tiempo del último mensaje
    this.bufferList.append(data); // Acumula los datos recibidos

    const { ackMessageFunction } = this.configuration;

    try {
      while (true) {
        const accumulatedData = this.bufferList.toString("utf-8");
        const bufferResults = this.bufferHandler.handle(accumulatedData);

        if (bufferResults) {
          const parsedResults = this.bufferParser
            .parse(bufferResults.completeMessage);

          await this.resultHandler.handle(parsedResults); // Manejo ajustado

          if (ackMessageFunction) {
            socket.write(ackMessageFunction(bufferResults.messageId));
          }

          this.bufferHandler
            .clearProcessedBuffer(this.bufferList, bufferResults.consumedBytes);
        } else {
          // Si no hay más mensajes completos, salir del loop
          break;
        }
      }

      if (this.configuration.sendsBySingleParameter) {
        // Configura el timeout para procesar inactividad
        setupTimeout(this.lastMessageTime, () => {
          this.resultHandler.finalize();
        });
      }

    } catch (error) {

      console.warn('Datos a eliminar después del consumo: ', this.bufferList.toString("utf-8"))
      this.bufferList.consume(bufferList.length);
      throw new Error(`Error al procesar datos: ${error.message}`, error)
    }
  }
}

module.exports = { DataEvent };
