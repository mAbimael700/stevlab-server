const { emitMessage } = require("./emit-message-to-websocket");

/**
 * Emite un resultado procesado al cliente Websocket 
 * 
 * @param {*} parsedContent 
 */
function emitResultsToWebSocket(parsedContent) {
    emitMessage({ data: parsedContent }, "lab_result", "message")
}

module.exports = {
    emitResultsToWebSocket
}