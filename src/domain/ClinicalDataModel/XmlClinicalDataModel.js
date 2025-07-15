const XMLBufferParser = require("@/infra/bufferparser/XML/XMLBufferParser");
const IClinicalDataModel = require("./IClinicalDataModel");

class XmlClinicalDataModel extends IClinicalDataModel {
  constructor() {
    super();
  }

  /**
   *
   * @param {string} data
   */
  static transform(data) {
    const xmlParsed = new XMLBufferParser(data);
    const sampleResume = xmlParsed.getSampleResume();

    return {
      folio: sampleResume.information.sampleId,
      sample_id: sampleResume.information.sampleId,
      created_at: sampleResume.information.date,
      parameters: sampleResume.results.map((r) => ({
        description: r.name,
        value: r.value,
        min_range: r.low,
        max_range: r.high,
      })),
    };
  }
}

module.exports = XmlClinicalDataModel;
