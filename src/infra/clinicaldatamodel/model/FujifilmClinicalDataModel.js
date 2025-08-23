const FujifilmNX600BufferParser = require("@/infra/bufferresultparser/fujifilmnx600/FujifilmNX600BufferParser");
const IClinicalDataModel = require("./IClinicalDataModel");

class FujifilmClinicalDataModel extends IClinicalDataModel {
  constructor() {
    super();
  }

  /**
   * Transforma el buffer crudo en el modelo de datos de la aplicación
   * @param {string} buffer - Buffer crudo de datos
   * @returns {Array} Array de objetos con el modelo de datos transformado
   */
  static transform(buffer) {
    const parser = new FujifilmNX600BufferParser(buffer);
    const sampleResumes = parser.getSampleResume();

    return sampleResumes.map((sample) => this.transformSample(sample));
  }

  /**
   * Transforma una muestra individual al modelo de datos
   * @param {Object} sample - Muestra cruda del parser
   * @returns {Object} Objeto transformado al modelo de datos
   */
  static transformSample(sample) {
    return {
      folio: sample.sample_id,
      sample_id: sample.sample_id,
      created_at: sample.dateTime,
      parameters: sample.results.map((result) =>
        this.transformParameter(result)
      ),
    };
  }

  /**
   * Transforma un parámetro individual al modelo de datos
   * @param {Object} result - Resultado crudo del parser
   * @returns {Object} Parámetro transformado
   */
  static transformParameter(result) {
    return {
      description: result.testName,
      value: result.value,
      unit_measurement: result.units,
      min_range: result.min_range,
      max_range: result.max_range,
      indicator: result.indicator,
    };
  }

  /**
   * Convierte un valor string a numérico de forma segura
   * @param {string} value - Valor a convertir
   * @returns {number|null} Valor numérico o null si no es válido
   */
  static parseNumericValue(value) {
    if (!value || value.trim() === "" || value === "0.0") return null;
    const parsed = parseFloat(value.trim());
    return isNaN(parsed) ? null : parsed;
  }
}

module.exports = FujifilmClinicalDataModel;
