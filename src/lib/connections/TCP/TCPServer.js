const net = require("node:net");
const { ConnectionValidator } = require("./ConnectionValidator");
const {
  EquipmentManager,
} = require("../../../domain/EquipmentManager/EquimentManager");
const TcpEventHandler = require("./TcpEventHandler");

class TCPServer {
  constructor() {
    this.equipmentManager = new EquipmentManager();
    this.connectionValidator = new ConnectionValidator();
    this.server = null;
    this.options = {
      allowHalfOpen: true, // Permite conexiones a medias en caso de ser necesario
      keepAlive: true, // Envia paquetes keep-alive cada 30 segundos
      keepAliveInitialDelay: 3000,
    };
  }

  build() {
    this.server = net.createServer(this.options, this.listener(socket));
  }

  /**
   *
   * @param {net.Socket} socket
   */
  async listener(socket) {
    try {
      const result = await this.connectionValidator.validate(
        socket.remoteAddress
      );
      const equipment = this.equipmentManager.getEquipmentById(result.id);
      equipment.connection.setClient(socket);
      const eventHandler = new TcpEventHandler(socket, equipment);

      console.log(
        `Conexión TCP/IP entrante del equipo ${
          equipment.name
        } con la dirección IPv4: ${equipment.getIpAddress()}:${
          socket.remotePort
        }`
      );

      // Establece un timeout más largo para la conexión
      socket.setTimeout(60000); // 60 segundos

      socket.on("data", async (buffer) => {
        eventHandler.data(buffer);
      });

      socket.on("end", () => {
        console.log(
          `Conexión cerrada por el equipo ${
            equipment.name
          } con IPv4: ${equipment.getIpAddress()}:${socket.remotePort}`
        );

        emitStatusDevice(
          {
            last_connection: new Date(),
            connection_status: "disconnected",
          },
          result.data
        );

        socket.destroy();
      });

      socket.on("close", () => {
        console.log("Conexión cerrada");
        //Server.setStatus("inactivo");
        reconnect();
      });

      // Manejador de errores
      socket.on("error", (err) =>
        eventHandler.handleConnectionEvent("error", reconnect, err)
      );
    } catch (error) {
      socket.destroy();
    }
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
        this.server.listen(this.port, () => {
          console.log(`Servidor TCP/IP reiniciado en el puerto ${this.port}`);
        });
      }, 5000); // Reintentar después de 5 segundos
    }
  }
}

module.exports = {
  TCPServer,
};
