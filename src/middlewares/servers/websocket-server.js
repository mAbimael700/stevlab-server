// src/middlewares/websocket-server.js
const { Server } = require("socket.io");

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

    // Cuando recibe el evento WebSocket del servidor tcp, envía a los clientes el dato parseado
    socket.on("labResultsMessage", (data) => {
      console.log("Mensaje recibido del cliente:", data);
      socket.emit("labResultsMessage", data); // Enviar datos de vuelta al cliente
    });

    socket.on("disconnect", () => {
      console.log("Cliente desconectado:", socket.id);
    });
  });

  return io;
}

// Exportamos tanto la función para inicializar como la instancia io
module.exports = { initializeWebSocket, getIO: () => io };
