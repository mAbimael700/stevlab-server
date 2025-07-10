const http = require("node:http");
const { Server } = require("socket.io");
const {
  getPendingMessages,
  deleteMessageById,
} = require("../../lib/websocket/pending-message.js");
const {
  startPendingMessageManager,
  resetMessagesToSend,
} = require("../../lib/websocket/manage-pending-messages.js");
const { setIO } = require("./Websocket.js");

/**
 *
 * @param {http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>} server
 * @param {Server} io
 */
function initializeWebSocket(server, io) {
  // Inicializa el servidor WebSocket con Socket.IO
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  // Inyectar la instancia de `io` en el servicio
  setIO(io);

  // Configuración de eventos de Socket.IO
  io.on("connection", (socket) => {
    console.log("Nuevo cliente Web Socket conectado:", socket.id);

    // Enviar solo los mensajes pendientes específicos para este cliente si se identifica
    const pendingMessages = getPendingMessages();
    if (pendingMessages.length > 0) {
      pendingMessages.forEach((pm) => {
        // Emitir cada mensaje pendiente al cliente recién conectado
        socket.emit(pm.event, JSON.stringify(pm.message));
      });
    }
    // Escuchar confirmaciones
    socket.on("message_confirmation", (messageId) => {
      //console.log(`Mensaje confirmado: ${messageId}`);
      deleteMessageById(messageId);
      resetMessagesToSend(pendingMessages.length - 1);
    });

    socket.on("disconnect", () => {
      console.log("Cliente desconectado:", socket.id);
    });
  });

  startPendingMessageManager(io);
  return io;
}

// Exportamos tanto la función para inicializar como la instancia io
module.exports = { initializeWebSocket };
