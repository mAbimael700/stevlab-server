const FujifilmNX600BufferParser = require("../../Infra/BufferParser/FujifilmNX600BufferParser/FujifilmNX600BufferParser");
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
    const rawResults = parser.getAllResults();
    
    return rawResults.map(result => this.transformSingleResult(result));
  }

  /**
   * Transforma un resultado individual al modelo de datos
   * @param {Object} rawResult - Resultado crudo del parser
   * @returns {Object} Objeto transformado al modelo de datos
   */
  static transformSingleResult(rawResult) {
    return {
      folio: rawResult.folio,
      sample_id: rawResult.id,
      created_at: rawResult.date,
      status: rawResult.status,
      tipo: rawResult.type,
      hora: rawResult.hora,
      parameters: rawResult.parametros_raw.map(param => 
        this.transformParameter(param)
      )
    };
  }

  /**
   * Transforma un parámetro individual al modelo de datos
   * @param {Object} rawParam - Parámetro crudo
   * @returns {Object} Parámetro transformado
   */
  static transformParameter(rawParam) {
    const nombre = rawParam.nombre_raw;
    const claveElemento = nombre.split("-")[0];
    
    return {
      description: nombre,
      value: rawParam.valor_raw,
      unit: rawParam.unidad_medida_raw,
      unit_code: rawParam.unidad_raw,
      min_range: this.parseNumericValue(rawParam.rango_min_raw),
      max_range: this.parseNumericValue(rawParam.rango_max_raw),
      indicator: rawParam.indicador_raw,
      original_name: nombre
    };
  }

  /**
   * Convierte un valor string a numérico de forma segura
   * @param {string} value - Valor a convertir
   * @returns {number|null} Valor numérico o null si no es válido
   */
  static parseNumericValue(value) {
    if (!value || value.trim() === "") return null;
    const parsed = parseFloat(value.trim());
    return isNaN(parsed) ? null : parsed;
  }
}

module.exports = FujifilmClinicalDataModel;
