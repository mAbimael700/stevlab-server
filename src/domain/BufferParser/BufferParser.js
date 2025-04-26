class BufferParser {
  constructor(parser) {

    if (typeof parser.parse !== 'function'){
      throw new Error("El método parse debe ser definido");
    }
    
      this.parser = parser;
  }

  /**
   * @param {string} data
   * @returns {object}
   */
  parse(data) {
    try {
      const results = this.parser.parse(data);

      if (!results) {
        throw new Error("El parser devolvió resultados inválidos");
      }

      return results;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  getMessageId(data) {
    try {

      if (!this.parser.getMessageId || typeof this.parser.getMessageId !== 'function'){
        throw new Error("El método para obtener el ID del mensaje no está definido");
      } 

      const messageId = this.parser.getMessageId(data);

      if (!messageId) {
        throw new Error("El parser no encontró el Id del mensaje");
      }

      return messageId;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  generateAckFunction(messageId, status = "AA") {}
}

module.exports = { BufferParser };
