let pendingMessages = []; // Stack de resultados pendientes

/**
 * 
 * @returns {{id:string, event: string, body: object}[]}
 */
function getPendingMessages() {
    return pendingMessages;
}

/**
 * 
 * @param {{id:string, event: string, body: object}} message 
 */
function addPendingMessage(message) {
    pendingMessages.push(message);
}

/**
 * 
 * @param {string} id 
 */
function deleteMessageById(id) {
    pendingMessages = pendingMessages.filter(m => m.id !== id);
}

module.exports = { getPendingMessages, addPendingMessage, deleteMessageById };
