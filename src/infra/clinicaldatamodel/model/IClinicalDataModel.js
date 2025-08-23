class IClinicalDataModel {
  constructor() {
    this.options = {};
    return this;
  }

  setOptions(options) {
    this.options = options;
  }

  /**
   * @param {string} data
   * @returns {object}
   */
  transform(data) {
    throw new Error("No se ha configurado este método");
  }

  /**
   *
   * @param {string} data
   * @returns {string}
   */
  getMessageId(data) {
    throw new Error("No se ha configurado este método");
  }

  /**
   *
   * @param {string} messageId
   * @param {string} status
   */
  generateAckFunction(messageId, status = "AA") {
    throw new Error("No se ha configurado este método");
  }

  getParameters() {
    throw new Error("No se ha configurado este método");
  }

  getDate() {
    throw new Error("No se ha configurado este método");
  }

  getId() {
    throw new Error("No se ha configurado este método");
  }

  getFolio() {
    throw new Error("No se ha configurado este método");
  }
}

module.exports = IClinicalDataModel;
