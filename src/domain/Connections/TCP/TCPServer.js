const net = require("node:net");
const { ConnectionValidator } = require("./ConnectionValidator");
const { TcpInBoundClient } = require("./TcpInBoundClient");

class TcpServer {
  constructor(port = 3000) {
    this.port = port;
    this.connectionValidator = new ConnectionValidator();
    this.server = null;
    this.options = {
      allowHalfOpen: true, // Permite conexiones a medias en caso de ser necesario
      keepAlive: true, // Envia paquetes keep-alive cada 30 segundos
      keepAliveInitialDelay: 3000,
    };
  }

  build() {
    this.server = net.createServer(this.options, (socket) => {
      new TcpInBoundClient(socket);
    });
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`Servidor TPC/IP escuchando en el puerto ${this.port}`);
    });
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

module.exports = {
  TcpServer,
};
