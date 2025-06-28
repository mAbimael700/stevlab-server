const net = require("node:net");
const {
  ConnectionValidator,
} = require("../Connections/Tcp/ConnectionValidator");
const TcpInBoundClient = require("../Connections/Tcp/TcpInboundClient/TcpInBoundClient");
const TcpInBoundClientFactory = require("../Connections/Tcp/TcpInboundClient/TcpInBoundClientFactory");

class TcpServer {
  /**
   *
   * @param {*} port
   * @param {TcpInBoundClientFactory} clientFactory
   */
  constructor(port = 3000, clientFactory) {
    this.port = port;
    this.clientFactory = clientFactory;
    this.server = null;
    this.options = {
      allowHalfOpen: true,
      keepAlive: true,
      keepAliveInitialDelay: 1000,
    };
  }

  build() {
    this.server = net.createServer(this.options, async (socket) => {
      try {
        await this.clientFactory.createAndInitialize(socket);
      } catch (error) {
        console.error(`Error al crear cliente TCP: ${error.message}`, error);
        if (!socket.destroyed) {
          socket.destroy();
        }
      }
    });
  }

  listen() {
    try {
      this.build();
      this.server.listen(this.port, () => {
        console.log(`Servidor TPC/IP escuchando en el puerto ${this.port}`);
      });
    } catch (error) {
      throw new Error(`Error al inicializar el servidor ${error.message}`);
    }
  }

  reconnect() {
    if (!this.server.listening) {
      console.log("Intentando reconectar el servidor TCP/IP...");
      setTimeout(() => {
        this.listen();
      }, 5000); // Reintentar después de 5 segundos
    }
  }
}

module.exports = TcpServer;
