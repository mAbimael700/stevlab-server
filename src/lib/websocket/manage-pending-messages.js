const { Server } = require("socket.io");
const { getPendingMessages } = require("./pending-message");

let messagesToSend = 0;

function resetMessagesToSend(n) {
  messagesToSend = n;
}
/**
 * Inicializa el manejador de envio de mensajes pendientes por enviar al WebSocket
 * @param {Server} io
 */
function startPendingMessageManager(io) {
  setInterval(() => {
    const pendingMessages = getPendingMessages();

    if (!io) {
      console.error("El servidor WebSocket no está inicializado.");
      return;
    }

    if (pendingMessages.length > 0) {
      if (pendingMessages.length > messagesToSend) {
        console.info(
          `Hay ${pendingMessages.length} mensajes pendientes por enviar`
        );
        messagesToSend = pendingMessages.length;
      }
      pendingMessages.forEach((pendingMsg) => {
        // Reintentar el envío del mensaje si no ha sido confirmado
        io.emit(pendingMsg.event, JSON.stringify(pendingMsg));
     
      });
    }
  }, 5000); // Revisar cada 5 segundos
}

module.exports = {
  startPendingMessageManager,
  resetMessagesToSend
};
