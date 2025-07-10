
const { Server } = require("socket.io");
const { getPendingMessages } = require("./pending-message");


/**
 *  Función para revisar y reintentar mensajes pendientes
 * @param {Server} io 
 */
function processPendingMessages(io) {
  
  if (!io) return;

  const pendingMessages = getPendingMessages();

  pendingMessages.forEach((msg) => {
    console.log(`Reintentando envío del mensaje ${msg.id}`);
    io.emit(msg.event, JSON.stringify(msg.message));
  });
}

module.exports = { processPendingMessages };
