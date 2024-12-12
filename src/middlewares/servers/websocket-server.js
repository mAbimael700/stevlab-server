// src/middlewares/websocket-server.js
const { Server } = require("socket.io");
const { getPendingResults, deleteResultById } = require("../../lib/websocket/pending-results-helpers");

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


    const pendingResults = getPendingResults()
    // Enviar resultados pendientes al nuevo cliente
    pendingResults.forEach(result => {
      socket.emit("message", JSON.stringify(result));
    });


    // Escuchar confirmaciones de mensajes
    socket.on("message_confirmation", (messageId) => {
      console.log(`Mensaje confirmado: ${messageId}`);
      deleteResultById(messageId) // Eliminar el mensaje del stack
    });


    // Cuando recibe el evento WebSocket del servidor tcp, envía a los clientes el dato parseado
    /* socket.on("labResultsMessage", (data) => {
      console.log("Mensaje recibido del cliente:", data);
      socket.emit("labResultsMessage", data); // Enviar datos de vuelta al cliente
    }); */

    socket.on("disconnect", () => {
      console.log("Cliente desconectado:", socket.id);
    });
  });

  return io;
}

// Exportamos tanto la función para inicializar como la instancia io
module.exports = { initializeWebSocket, getIO: () => io };
