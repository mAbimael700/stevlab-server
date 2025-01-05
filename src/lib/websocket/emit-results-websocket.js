const { emitMessage } = require("./emit-message-to-websocket");

function emitResultsToWebSocket(parsedContent) {
    emitMessage({ data: parsedContent }, "lab_result", "message")
}

module.exports = {
    emitResultsToWebSocket
}