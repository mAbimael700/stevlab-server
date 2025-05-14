const BufferList = require("bl");
const {
  EquipmentParsingConfiguration,
} = require("../EquipmentParsingProfile/EquipmentParsingProfileConfiguration");
const { BufferStreamHandler } = require("./BufferStreamHandler");

class BufferStreamProcessor {
  /**
    @param {EquipmentParsingConfiguration} configuration 
   */
  constructor(configuration, maxDataSize = 1e6) {
    this.maxDataSize = maxDataSize; // 1MB máximo por paquete
    this.bufferList = new BufferList();
    this.bufferHandler = new BufferStreamHandler(configuration);
  }

  /**
   *
   * @param {Buffer} data
   */
  process(data) {
    // Verifica el tamaño del paquete
    if (data.length > this.maxDataSize) {
      throw new Error(
        `Paquete demasiado grande recibido: ${data.length} bytes`
      );
    }
    this.bufferList.append(data); // Acumula los datos recibidos
    const extractedResults = [];

    try {
      while (true) {
        const accumulatedData = this.bufferList.toString("utf-8");
        const bufferHandlerResults = this.bufferHandler.handle(accumulatedData);

        if (bufferHandlerResults) {
          extractedResults.push(bufferHandlerResults.completeMessage);

          BufferStreamHandler.clearProcessedBuffer(
            this.bufferList,
            bufferHandlerResults.consumedBytes
          );
        } else {
          // Si no hay más mensajes completos, salir del loop
          break;
        }
      }

      return extractedResults;
    } catch (error) {
      console.warn(
        "Datos a eliminar después del consumo: ",
        this.bufferList.toString("utf-8")
      );
      BufferStreamHandler.clearProcessedBuffer(
        this.bufferList,
        bufferList.length
      );
      throw new Error(`Error al procesar datos: ${error.message}`, error);
    }
  }
}

module.exports = { BufferStreamProcessor };
