const http = require("node:http");
const { Server } = require("socket.io");
const {
  getPendingMessages,
  deleteMessageById,
} = require("../../lib/websocket/pending-message.js");
const { processPendingMessages } = require("../../lib/websocket/handle-unconfirmed-massages.js");

let io;

/**
 * 
 * @param {http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>} server 
 * @returns {Server}
 */
function initializeWebSocket(server) {
  // Si ya existe una instancia de io, devuelve esa instancia
  if (io) {
    return io;
  }

  // Inicializa el servidor WebSocket con Socket.IO
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  // Configuración de eventos de Socket.IO
  io.on("connection", (socket) => {
    console.log("Nuevo cliente Web Socket conectado:", socket.id);

    // Enviar solo los mensajes pendientes específicos para este cliente si se identifica
    const pendingMessages = getPendingMessages();
    pendingMessages.forEach((m) => {
      socket.emit(m.event, JSON.stringify(m.message));
    });

    // Escuchar confirmaciones
    socket.on("message_confirmation", (messageId) => {
      console.log(`Mensaje confirmado: ${messageId}`);
      deleteMessageById(messageId);
    });

    socket.on("disconnect", () => {
      console.log("Cliente desconectado:", socket.id);
    });
  });


}


/**
 * 
 * @returns {Server}
 */
function getIO(){
  return io
}

// Exportamos tanto la función para inicializar como la instancia io
module.exports = { initializeWebSocket, getIO };
