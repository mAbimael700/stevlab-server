const { getIO } = require("../middlewares/servers/websocket-server");


function emitResultsToWebSocket(parsedContent) {
    const io = getIO();
    if (io) {
        io.emit("labResultsMessage", { data: JSON.stringify(parsedContent) });
    }
}

module.exports = {
    emitResultsToWebSocket
}