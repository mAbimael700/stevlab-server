const BufferList = require("bl");
const EquipmentProfileDto = require("../../domain/EquipmentProfile/EquipmentProfileDto");
const { BufferStreamHandler } = require("./BufferStreamHandler");

class BufferStreamProcessor {
  /**
    @param {EquipmentProfileDto} configuration 
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
      this.validateDataSize(data);
      this.bufferList.append(data);

      const extractedResults = [];

      while (true) {
        const bufferListData = this.getBufferedData();
        const bufferMessageResult = this.bufferHandler.handle(bufferListData);

        if (bufferMessageResult) {
          extractedResults.push(bufferMessageResult.completeMessage);
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

  /**
   * Valida el tamaño de los datos recibidos
   * @param {Buffer} data
   */
  validateDataSize(data) {
    if (data.length > this.maxDataSize) {
      throw new Error(
        `Packet size exceeded limit: ${data.length} bytes (max: ${this.maxDataSize})`
      );
    }
  }

  /**
   * Obtiene los datos actuales del buffer
   * @returns {string}
   */
  getBufferedData() {
    return this.bufferList.toString("utf-8");
  }
}

module.exports = { BufferStreamProcessor };
