const net = require("node:net");
const {
  ConnectionValidator,
} = require("../Connections/Tcp/ConnectionValidator");
const  TcpInBoundClient  = require("../Connections/Tcp/TcpInBoundClient");

class TcpServer {
  /**
   * 
   * @param {*} port 
   * @param {*} equipmentService 
   * @param {*} equipmentConnectionManager 
   */
  constructor(port = 3000, equipmentService, equipmentConnectionManager) {
    this.port = port;
    this.connectionValidator = new ConnectionValidator(equipmentService);
    this.equipmentConnectionManager = equipmentConnectionManager
    this.server = null;
    this.options = {
      allowHalfOpen: true, // Permite conexiones a medias en caso de ser necesario
      keepAlive: true, // Envia paquetes keep-alive cada 30 segundos
      keepAliveInitialDelay: 1000,
    };
  }

  build() {
    this.server = net.createServer(this.options, (socket) => {
      new TcpInBoundClient(socket, this.connectionValidator, this.equipmentConnectionManager);
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

module.exports = {
  TcpServer,
};
