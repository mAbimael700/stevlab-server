// src/middlewares/websocket-server.js
const { Server } = require("socket.io");
const { getPendingMessages, deleteMessageById } = require("../../lib/websocket/pending-message.js");

let io;

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
    console.log("Nuevo cliente conectado:", socket.id);


    const pendingMessages = getPendingMessages()
    // Enviar resultados pendientes al nuevo cliente
    pendingMessages.forEach(m => {
      socket.emit("message", JSON.stringify(m));
    });


    // Escuchar confirmaciones de mensajes
    socket.on("message_confirmation", (messageId) => {
      console.log(`Mensaje confirmado: ${messageId}`);
      deleteMessageById(messageId) // Eliminar el mensaje del stack
    });

    socket.on("disconnect", () => {
      console.log("Cliente desconectado:", socket.id);
    });
  });

  return io;
}

// Exportamos tanto la función para inicializar como la instancia io
module.exports = { initializeWebSocket, getIO: () => io };
