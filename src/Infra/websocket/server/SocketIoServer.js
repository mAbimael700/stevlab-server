const { Server } = require("socket.io");

class WebSocketServer {
  constructor(options = {}) {
    this.io = null;
    this.server = null;
    this.options = {
      cors: {
        origin: "127.0.0.1",
        methods: ["GET", "POST"],
      },
      ...options
    };
  }

  /**
   * Inicializa el servidor WebSocket
   * @param {http.Server} httpServer - Servidor HTTP existente
   * @returns {Server} Instancia de Socket.IO
   */
  initialize(httpServer) {
    this.server = httpServer;
    this.io = new Server(httpServer, this.options);

    console.log("WebSocket server initialized");
    return this.io;
  }

  /**
   * Obtiene la instancia de Socket.IO
   * @returns {Server|null} Instancia de Socket.IO
   */
  getIO() {
    return this.io;
  }

  /**
   * Cierra el servidor WebSocket
   */
  close() {
    if (this.io) {
      this.io.close();
      console.log("WebSocket server closed");
    }
  }
}

module.exports = WebSocketServer