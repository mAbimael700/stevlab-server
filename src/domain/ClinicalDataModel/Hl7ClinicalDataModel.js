const IClinicalDataModel = require("./IClinicalDataModel");

class Hl7ClinicalDataModel extends IClinicalDataModel {
  constructor() {
    super();
  }

  /**
   *
   * @param {string} data
   */
  transform(data) {}
}

module.exports = Hl7ClinicalDataModel;
