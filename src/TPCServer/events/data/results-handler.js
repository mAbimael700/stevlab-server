const { validateResponse } = require("../../../schemas/response-schema");
const { saveResultsToLocalData } = require("../../../lib/save-results-data");
const { emitResultsToWebSocket } = require("../../../lib/emit-results-websocket");

let lastFolio = null;
let resultsToSave = { parametros: [] };

/**
 * Maneja los resultados procesados por el parser.
 * @param {Object[]} results - Resultados procesados.
 * @param {boolean} sendsBySingleParameter - Indica si el equipo envía un solo parámetro a la vez.
 */
async function handleResults(results, sendsBySingleParameter = false) {

  const response = await validateResponse(results)
  
  const isValidated = response.success;
  if (!isValidated) {
    console.warn("Resultados no válidos");
    return;
  }


  if (!results[0]?.folio || results[0]?.folio === "") {
    console.warn("Resultados ignorados porque no tienen un folio válido");
    return;
  }


  if (sendsBySingleParameter) {
    // Manejo para equipos que envían un parámetro a la vez
    if (response.data[0]?.folio !== lastFolio) {
      finalizeResults(); // Finaliza y guarda los resultados acumulados
      lastFolio = response.data[0]?.folio;
      resultsToSave = { ...response.data[0], parametros: [...filterDuplicateParams(response.data[0]?.parametros)] };
    } else {
      const newParams = filterDuplicateParams(response.data[0]?.parametros, resultsToSave.parametros);
      resultsToSave.parametros.push(...newParams);
    }
  } else {
    // Manejo para mensajes completos
    saveResultsToLocalData(response.data);
    emitResultsToWebSocket(response.data);
  }
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
    if (!existingSet.has(paramKey)) {
      existingSet.add(paramKey);
      return true;
    }
    return false;
  });
}

/**
 * Finaliza y guarda los resultados acumulados.
 */
function finalizeResults() {
  if (resultsToSave.folio && resultsToSave.parametros.length > 0) {
    saveResultsToLocalData([resultsToSave]);
    emitResultsToWebSocket([resultsToSave]);
    console.log("Resultados procesados y guardados:", resultsToSave);
    resultsToSave = { parametros: [] }; // Limpia la acumulación
  } else {
    console.warn("No se guardaron resultados porque no tienen un folio o están vacíos.");
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
