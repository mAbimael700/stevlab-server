const BufferList = require("bl");
const {
  EquipmentParsingConfiguration,
} = require("../EquipmentCommunicationProfileConfiguration/EquipmentCommunicationProfileConfiguration");
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
    try {
      // Verifica el tamaño del paquete
      if (data.length > this.maxDataSize) {
        throw new Error(
          `Paquete demasiado grande recibido: ${data.length} bytes`
        );
      }
      // Acumula los datos recibidos
      this.bufferList.append(data);
      const extractedResults = [];

      while (true) {
        const bufferListData = this.bufferList.toString("utf-8");
        const bufferMessageResult = this.bufferHandler.handle(bufferListData);

        if (bufferMessageResult) {
          extractedResults.push(bufferMessageResult.completeMessage.trim());
          BufferStreamHandler.clearProcessedBuffer(
            this.bufferList,
            bufferMessageResult.consumedBytes
          );
        } else {
          // Si no hay más mensajes completos, salir del loop
          break;
        }
      }

      if (extractedResults.length > 0) {
        return extractedResults;
      } else {
        return null;
      }
      
    } catch (error) {
      console.warn(
        "Datos a eliminar después del consumo: ",
        this.bufferList.toString("utf-8")
      );
      BufferStreamHandler.clearProcessedBuffer(
        this.bufferList,
        this.bufferList.length
      );
      throw new Error(`Error al procesar datos: ${error.message}`);
    }
  }
}

module.exports = { BufferStreamProcessor };
