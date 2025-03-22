class BufferParser {
  constructor(configuration) {
    this.parser = configuration.parser;
  }

  /**
   * @param {string} data
   * @returns {Object[]}
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
}

module.exports = { BufferParser };
