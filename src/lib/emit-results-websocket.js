const { getIO } = require("../middlewares/servers/websocket-server");


function emitResultsToWebSocket(parsedContent) {
    const io = getIO();
    if (io) {
        io.emit("message", JSON.stringify({ data: parsedContent, channel: "lab_result" }));
    }
}

module.exports = {
    emitResultsToWebSocket
}