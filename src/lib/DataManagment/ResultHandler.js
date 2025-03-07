const { validateResponse } = require("../../schemas/response-schema");
const {
  emitResultsToWebSocket,
} = require("../websocket/emit-results-websocket");

class ResultHandler {
  constructor(configuration) {
    this.lastFolio = null;
    this.isFinalizing = false; // Bandera para evitar llamadas redundantes
    this.resultsToSave = { parametros: [] };
    this.configuration = configuration;
    this.resultRepository = new ResultRespository()
  }

  async handle(result) {
    const response = await validateResponse(result);
    try {
      if (!response.success) {
        throw new Error(
          "La validación de los resultados no fue satisfactoria",
          {
            cause: response.errors,
          }
        );
      }

      if (this.configuration.sendsBySingleParameter) {
        this._handleSingleParameterResponse(response.data);
      } else {
        this._handleCompleteResponse(response.data);
      }
    } catch (error) {
      console.error(error.message, error.cause || "");
    }
  }

  /**
   * Maneja los resultados cuando el equipo envía un solo parámetro a la vez.
   * @param {Object} result - Resultado validado.
   */
  _handleSingleParameterResponse(result) {
    if (result.folio !== this.lastFolio) {
      finalizeResults(); // Finaliza y guarda los resultados acumulados
      this.lastFolio = result.folio;
      this.resultsToSave = {
        ...result,
        parametros: this._filterDuplicateParams(result.parametros),
      };
    } else {
      this.resultsToSave.parametros.push(
        ...this._filterDuplicateParams(
          result.parametros,
          this.resultsToSave.parametros
        )
      );
    }
  }

  /**
   * Maneja los resultados cuando el equipo envía mensajes completos.
   * @param {Object[]} result - Resultados validados.
   */
  _handleCompleteResponse(result) {
    this.resultRepository.save(result)
    emitResultsToWebSocket(result);
  }

  /**
   * Filtra los parámetros duplicados.
   * @param {Array} newParams - Parámetros nuevos a agregar.
   * @param {Array} [existingParams=[]] - Parámetros existentes ya guardados.
   * @returns {Array} Parámetros únicos.
   */
  _filterDuplicateParams(newParams, existingParams = []) {
    const existingSet = new Set(existingParams.map((p) => JSON.stringify(p)));
    return newParams.filter((param) => {
      const paramKey = JSON.stringify(param);
      return !existingSet.has(paramKey) && existingSet.add(paramKey);
    });
  }

  /**
 * Finaliza y guarda los resultados acumulados.
 */
  finalize() {
    if (this.isFinalizing) return; // Si ya se está finalizando, no hacer nada
    this.isFinalizing = true; // Marcar que se está finalizando

    try {
      if (this.resultsToSave.folio && this.resultsToSave.parametros.length > 0) {
        this.resultRepository.save(this.resultsToSave);
        emitResultsToWebSocket(this.resultsToSave);
        this.resultsToSave = { parametros: [] }; // Limpia la acumulación
        this.lastFolio = null;
      } else {
        console.warn(
          "No se guardaron resultados porque no tienen un folio o están vacíos."
        );
      }
    } finally {
      this.isFinalizing = false; // Restablecer la bandera
    }
  }
}

module.exports = {
  ResultHandler
};
