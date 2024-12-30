const { emitMessage } = require("./websocket/emit-message-to-websocket");

function emitResultsToWebSocket(parsedContent) {
    emitMessage({ data: parsedContent }, "lab_result")
}

module.exports = {
    emitResultsToWebSocket
}