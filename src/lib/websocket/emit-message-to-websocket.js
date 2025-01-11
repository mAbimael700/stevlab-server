const { getIO } = require("../../middlewares/servers/websocket-server");

const crypto = require("node:crypto");
const { getPendingMessages } = require("./pending-message");

// Generar un ID único usando crypto
function generateUniqueId() {
    return crypto.randomUUID(); // Genera un UUID seguro 
}

function emitMessage(body, channel, event) {
    const io = getIO();

    if (!io) {
        console.error("El servidor WebSocket no está inicializado.");
        return;
        
    }
    const messageId = generateUniqueId();
    const message = { id: messageId, channel, ...body };
    console.log("Emitiendo evento:", event);
    
    io.emit(event, JSON.stringify(message));

    const pendingMsg = getPendingMessages();
    setTimeout(() => {
        if (!pendingMsg.find(m => m.id === messageId)) {
            console.log(`No se confirmó el mensaje ${messageId}, se agrega al stack de mensajes no enviados`);
            pendingMsg.push({message, event});
        }
    }, 5000);
}


module.exports = {
    emitMessage
}