const { validateResponse } = require("../../schemas/response-schema");
const { saveResultsToLocalData } = require("../save-results-data");
const {
  emitResultsToWebSocket,
} = require("../websocket/emit-results-websocket");


let lastFolio = null;
let isFinalizing = false; // Bandera para evitar llamadas redundantes
let resultsToSave = { parametros: [] };

/**
 * Maneja los resultados procesados por el parser.
 * @param {Object[]} results - Resultados procesados.
 * @param {boolean} sendsBySingleParameter - Indica si el equipo envía un solo parámetro a la vez.
 */
function handleResults(results, sendsBySingleParameter = false) {
  try {
    const response = validateResponse(results);

    if (!response.success) {
      throw new Error("La validación de los resultados no fue satisfactoria", {cause: response.error.errors});
    }

    if (!results[0]?.folio) {
      throw new Error("Resultados ignorados porque no tienen un folio válido");
    }

    if (sendsBySingleParameter) {
      handleSingleParameterResponse(response.data[0]);
    } else {
      handleCompleteResponse(response.data);
    }
  } catch (e) {
    console.error(
      "Error al manejar el resultado parseado:",
      e.message,
      e.cause || ""
    );
  }
}

/**
 * Maneja los resultados cuando el equipo envía un solo parámetro a la vez.
 * @param {object} result - Resultado validado.
 */
function handleSingleParameterResponse(result) {
  if (result.folio !== lastFolio) {
    finalizeResults(); // Finaliza y guarda los resultados acumulados
    lastFolio = result.folio;
    resultsToSave = {
      ...result,
      parametros: filterDuplicateParams(result.parametros),
    };
  } else {
    resultsToSave.parametros.push(
      ...filterDuplicateParams(result.parametros, resultsToSave.parametros)
    );
  }
}

/**
 * Maneja los resultados cuando el equipo envía mensajes completos.
 * @param {object[]} results - Resultados validados.
 */
function handleCompleteResponse(results) {
  saveResultsToLocalData(results);
  emitResultsToWebSocket(results);
}

/**
 * Filtra los parámetros duplicados.
 * @param {Array} newParams - Parámetros nuevos a agregar.
 * @param {Array} [existingParams=[]] - Parámetros existentes ya guardados.
 * @returns {Array} Parámetros únicos.
 */
function filterDuplicateParams(newParams, existingParams = []) {
  const existingSet = new Set(existingParams.map((p) => JSON.stringify(p)));
  return newParams.filter((param) => {
    const paramKey = JSON.stringify(param);
    return !existingSet.has(paramKey) && existingSet.add(paramKey);
  });
}

/**
 * Finaliza y guarda los resultados acumulados.
 */
function finalizeResults() {
  if (isFinalizing) return; // Si ya se está finalizando, no hacer nada
  isFinalizing = true; // Marcar que se está finalizando

  try {
    if (resultsToSave.folio && resultsToSave.parametros.length > 0) {
      saveResultsToLocalData([resultsToSave]);
      emitResultsToWebSocket([resultsToSave]);
      //console.log("Resultados procesados y guardados:", resultsToSave);
      resultsToSave = { parametros: [] }; // Limpia la acumulación
      lastFolio = null;
    } else {
      console.warn(
        "No se guardaron resultados porque no tienen un folio o están vacíos."
      );
    }
  } finally {
    isFinalizing = false; // Restablecer la bandera
  }
}

/**
 * Finaliza resultados acumulados en caso de inactividad.
 */
function finalizeResultsOnTimeout() {
  finalizeResults();
}

module.exports = {
  handleResults,
  finalizeResultsOnTimeout,
};
