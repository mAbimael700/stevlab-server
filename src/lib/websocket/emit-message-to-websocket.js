const crypto = require("node:crypto");
const { addPendingMessage } = require("./pending-message");
const {
  getIO,
  emitMessageToSocket,
} = require("../../middlewares/servers/Websocket");

// Generar un ID único usando crypto
function generateUniqueId() {
  return crypto.randomUUID(); // Genera un UUID seguro
}

function emitMessage(body, channel, event) {
  const messageId = generateUniqueId();
  const message = { id: messageId, channel, ...body };

  try {
    // Emitir el mensaje a través del servicio
    emitMessageToSocket(event, message);
    // Agregar mensaje a la lista de pendientes
    addPendingMessage({ ...message, event });
  } catch (error) {
    console.error("Error al emitir el mensaje:", error.message);
  }
}

module.exports = {
  emitMessage,
};
