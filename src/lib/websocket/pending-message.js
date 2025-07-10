let pendingMessages = []; // Stack de resultados pendientes

/**
 * Retorna los mensajes Websocket no confirmados por el cliente
 * @returns {{id:string, event: string, body: object}[]}
 */
function getPendingMessages() {
    return pendingMessages;
}

/**
 * Agrega un mensaje al stack de mensajes pendientes por enviar al Websocket
 * @param {{id:string, event: string, body: object}} message 
 */
function addPendingMessage(message) {
    pendingMessages.push(message);
}

/**
 * Elimina un mensaje del stack de mensajes pendientes por enviar al Websocket
 * @param {string} id 
 */
function deleteMessageById(id) {
    pendingMessages = pendingMessages.filter(m => m.id !== id);
}

module.exports = { getPendingMessages, addPendingMessage, deleteMessageById };
