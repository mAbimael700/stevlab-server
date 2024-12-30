// pending-messages.js
let pendingMessages = []; // Stack de resultados pendientes

function getPendingMessages() {
    return pendingMessages;
}

function setPendingMessages(message) {
    pendingMessages = message;
}

function deleteMessageById(id) {
    pendingMessages = pendingMessages.filter(m => m.id !== id);
}

module.exports = { getPendingMessages, setPendingMessages, deleteMessageById };
