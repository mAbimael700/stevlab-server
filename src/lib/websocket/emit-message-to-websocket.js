const { getIO } = require("../../middlewares/servers/websocket-server");

const crypto = require("node:crypto");
const { getPendingMessages, addPendingMessage } = require("./pending-message");

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

  io.emit(event, JSON.stringify(message));
  // Agregar mensaje a la lista de pendientes
  addPendingMessage({ id: messageId, message, event });

  setTimeout(() => {
    const pendingMsg = getPendingMessages();
    if (pendingMsg.find((m) => m.id === messageId)) {
      console.log(`No se confirmó el mensaje ${messageId}, reintentando...`);
      io.emit(event, JSON.stringify(message));
    }
  }, 5000);
}

module.exports = {
  emitMessage,
};
