const { validateResponse } = require("../../../schemas/response-schema");
const { saveResultsToLocalData } = require("../../../lib/save-results-data");
const {
  emitResultsToWebSocket,
} = require("../../../lib/emit-results-websocket");

let lastFolio = null;
let resultsToSave = { parametros: [] };
/**
 * Maneja los resultados procesados por el parser.
 * @param {Object[]} results - Resultados procesados.
 * @param {boolean} sendsBySingleParameter - Indica si el equipo envía un solo parámetro a la vez.
 */
function handleResults(results, sendsBySingleParameter = false) {
  const isValidated = validateResponse(results);
  if (!isValidated) {
    console.warn("Resultados no válidos");
    return;
  }

  const { folio, parametros } = results[0];

  if (sendsBySingleParameter) {
    // Manejo para equipos que envían un parámetro a la vez
    if (folio !== lastFolio) {
      finalizeResults(); // Finaliza y guarda los resultados acumulados
      lastFolio = folio;
      resultsToSave = { ...results[0], parametros: [...parametros] };
    } else {
      resultsToSave.parametros.push(...parametros);
    }
  } else {
    // Manejo para mensajes completos
    saveResultsToLocalData(results);
    emitResultsToWebSocket(results);
    console.log("Resultados procesados directamente:", results);
  }
}

/**
 * Finaliza y guarda los resultados acumulados.
 */
function finalizeResults() {
  if (resultsToSave.parametros.length > 0) {
    saveResultsToLocalData([resultsToSave]);
    emitResultsToWebSocket([resultsToSave]);
    console.log("Resultados procesados y guardados:", resultsToSave);
    resultsToSave = { parametros: [] }; // Limpia la acumulación
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
