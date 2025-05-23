const { Socket } = require("node:net");
const { TcpClient } = require("./TcpClient");
const TcpEventsHandler = require("./TcpEventHandler");
const { TcpSocketListener } = require("./TcpSocketListener");
const { BufferDataHandler } = require("../../BufferDataHandler/BufferDataHandler");

class TcpOutBoundClient extends TcpClient {
  constructor(equipment) {
    const socket = new Socket();
    super(socket);
    this.equipment = equipment;
    this.dataHandler = new BufferDataHandler(this.equipment)
    this.eventsHandler = new TcpEventsHandler(this.socket, equipment);
    this.socketListener = new TcpSocketListener(
      this.socket,
      this.eventsHandler
    );
    this.connect();
  }

  async connect() {
    try {
      const { port, ipAddress: host } = this.equipment.configuration;

      // Construye los listeners correspondientes del cliente

      await new Promise((resolve, reject) => {
        const onConnect = this.client.once("connect", () => {
          cleanUp();
          resolve();
        });

        const onError = this.client.once("error", (err) => {
          cleanUp();
          reject(err);
        });

        const cleanUp = () => {
          this.client.connecting = false;
          this.client.off("connect", onConnect);
          this.client.off("error", onError);
        };
        
        this.client.connect({ port, host });
      });
    } catch (error) {
      throw new Error(
        "Hubo un error al conectarse con el equipo",
        error.message
      );
    }
  }
}

module.exports = { TcpOutBoundClient };
