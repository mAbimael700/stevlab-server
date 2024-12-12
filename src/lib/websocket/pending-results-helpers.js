const crypto = require("node:crypto");

let pendingResults = []; // Stack de resultados pendientes

function getPendingResults() {
    return pendingResults
}

function setPendingResults(results) {
    pendingResults = results
}

function deleteResultById(id) {
    pendingResults = pendingResults.filter(r => r.id !== id)
}

// Generar un ID único usando crypto
function generateUniqueId() {
    return crypto.randomUUID(); // Genera un UUID seguro (disponible en Node.js 14.17.0 o superior)
}

module.exports = { getPendingResults, setPendingResults, generateUniqueId, deleteResultById }