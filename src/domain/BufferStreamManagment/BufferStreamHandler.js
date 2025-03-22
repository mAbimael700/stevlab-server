const { BufferList } = require("bl/BufferList");
const { saveFile } = require("../save-file");
const { EquipmentParsingConfiguration } = require("../Equipment/EquipmentParsingConfiguration");

class BufferStreamHandler {
  /**
   * 
   * @param {EquipmentParsingConfiguration} configuration 
   */
  constructor(configuration) {

    if (!configuration.checksumRegex) {
      throw new Error("El RegExp checksum no están definidos para el equipo");
    }
    this.delimiterRegex = new RegExp(configuration.checksumRegex, "g");
  }

  /**
   * 
   * @param {string} data 
   */
  handle(data) {
    // Buscar el índice del delimitador
    const delimiterIndex = data.search(delimiterRegex);

    if (delimiterIndex !== -1) {
      const match = data.match(this.delimiterRegex);
      const matchLength = match ? match[0].length : 0;

      const completeMessage = data.slice(0, delimiterIndex + matchLength);
      const consumedBytes = Buffer.byteLength(completeMessage, "utf-8");

      // Extraer el ID del mensaje (MSH-10)
      const messageId = parser.getMessageId()

      const filePath = saveFile(completeMessage);

      console.log(
        "¡Mensaje completo recibido!. Mensaje guardado en la ruta:\n",
        filePath
      );

      return { completeMessage, consumedBytes, messageId };
    }

    return null;
  }

  /**
  *
  * @param {BufferList} bufferList
  * @param {number} consumedBytes
  */
  clearProcessedBuffer(bufferList, consumedBytes) {
    if (consumedBytes > 0 && consumedBytes <= bufferList.length) {
      bufferList.consume(consumedBytes);
    } else {
      console.error("Error: consumedBytes no válido:", consumedBytes); // Depuración
      console.warn('Datos a eliminar después del consumo: ', bufferList.toString("utf-8"))
      bufferList.consume(bufferList.length);
    }
  }
}

module.exports = {
  BufferStreamHandler
};
