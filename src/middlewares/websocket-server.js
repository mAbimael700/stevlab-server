// src/middlewares/websocket-server.js
const { Server } = require("socket.io");

function initializeWebSocket(expressServer) {
  // Inicializa el servidor WebSocket con Socket.IO
  const io = new Server(expressServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  // Configuración de eventos de Socket.IO
  io.on("connection", (socket) => {
    console.log("Nuevo cliente conectado:", socket.id);

    socket.on("labResultsMessage", (data) => {
      console.log("Mensaje recibido del cliente:", data);
      socket.emit("labResultsMessage", data);  // Enviar datos de vuelta al cliente
    });

    socket.on("disconnect", () => {
      console.log("Cliente desconectado:", socket.id);
    });
  });

  return io;
}

module.exports = { initializeWebSocket };
