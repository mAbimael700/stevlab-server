const { BufferList } = require("bl/BufferList");
const EquipmentProfile = require("../EquipmentProfile/EquipmentProfile");
const { IBufferParser } = require("../BufferParser/IBufferParser");

class BufferStreamHandler {
  /**
   *
   * @param {EquipmentProfile} configuration
   * @param {IBufferParser} parser
   */
  constructor(configuration) {
    if (!configuration.checksumRegex) {
      throw new Error("El RegExp checksum no están definidos para el equipo");
    }
    this.delimiterChecksumRegex = new RegExp(configuration.checksumRegex, "g");
  }

  /**
   *
   * @param {string} data
   */
  handle(data) {
    const delimiterMatch = this.delimiterChecksumRegex.exec(data);
    this.delimiterChecksumRegex.lastIndex = 0; // Reset regex state

    if (!delimiterMatch) return null;

    const delimiterIndex = delimiterMatch.index;
    const matchLength = delimiterMatch[0].length;
    const completeMessage = data.slice(0, delimiterIndex + matchLength);
    const consumedBytes = Buffer.byteLength(completeMessage, this.bufferEncoding);

    return {
      completeMessage: completeMessage.trim(),
      consumedBytes
    };
  }

  /**
   *
   * @param {BufferList} bufferList
   * @param {number} consumedBytes
   */
  static clearProcessedBuffer(bufferList, consumedBytes) {
    try {
      if (!(consumedBytes > 0 && consumedBytes <= bufferList.length)) {
        throw new Error(`ConsumedBytes no válido: ${consumedBytes}`);
      }
      bufferList.consume(consumedBytes);
    } catch (error) {
      throw new Error(`Error al limpiar el buffer: ${error}`);
    }
  }
}

module.exports = {
  BufferStreamHandler,
};
