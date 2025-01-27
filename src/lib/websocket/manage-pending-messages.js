const { getPendingMessages } = require("./pending-message");

/**
 *
 * @param {Server} io
 */
function startPendingMessageManager(io) {
  setInterval(() => {
    const pendingMessages = getPendingMessages();
    
    if (!io) {
      console.error("El servidor WebSocket no está inicializado c.");
      return;
    }

    if (pendingMessages.length > 0) {
      pendingMessages.forEach((pendingMsg) => {
        // Reintentar el envío del mensaje si no ha sido confirmado
        io.emit(pendingMsg.event, JSON.stringify(pendingMsg.message));
        console.log(`Reintentando mensaje ${pendingMsg.id}...`);
      });
    }

  }, 5000); // Revisar cada 5 segundos
}

module.exports = {
  startPendingMessageManager,
};
