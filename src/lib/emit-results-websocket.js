const { getIO } = require("../middlewares/servers/websocket-server");
const { generateUniqueId, getPendingResults } = require("./websocket/pending-results-helpers");


function emitResultsToWebSocket(parsedContent) {
    const io = getIO();
    if (io) {
        const messageId = generateUniqueId(); // Generar un ID único para el mensaje
        const result = { id: messageId, data: parsedContent, channel: "lab_result" };

        // Emitir el mensaje al cliente
        io.emit("message", JSON.stringify(result));

        const pendingResults = getPendingResults()
        // Agregar el resultado al stack si no se confirma en 5 segundos
        setTimeout(() => {
            if (!pendingResults.find(r => r.id === messageId)) {
                console.log(`No se confirmó el mensaje ${messageId}, se agrega al stack de mensajes no enviados`);
                pendingResults.push(result);
            }
        }, 5000); // Timeout de 5 segundos
    }
}



module.exports = {
    emitResultsToWebSocket
}