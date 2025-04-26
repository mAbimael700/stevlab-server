const net = require("node:net");
const { TcpEventsHandler } = require('./TcpEventHandler')
const { ClientConnection } = require("../../ClientConnection/ClientConnection");
const { Equipment } = require("../../Equipment/Equipment");
const { TcpSocketListener } = require("./TcpSocketListener");

class TcpClient extends ClientConnection {
  /**
   *
   * @param {Equipment | null} equipment
   * @param {net.Socket} socket
   * @param {TcpEventsHandler} [eventsHandler] 
   * @param {"remoteClient" | 'remoteServerClient'} role
   */
  constructor(
    equipment = null,
    socket = new net.Socket(),
    {
      eventsHandler = new TcpEventsHandler(socket, equipment),
      socketListener = new TcpSocketListener(socket, equipment)
    } = {},
    role = "remoteClient"
  ) {

    this.role = role;
    this.equipment = equipment;
    this.client = socket;
    this.closed = this.client.closed;
    this.destroyed = this.client.destroyed;
    this.connecting = this.client.connecting;
    this.eventsHandler = eventsHandler;
    this.socketListener = socketListener;
    
    // Configurar listeners
    this.socketListener.setHandler(this.eventsHandler);
  }

  async build() {
    try {
      if (this.role === "remoteClient") {
        throw new Error(
          "No se puede construir a una conexión de servidor a un dispositivo como cliente remoto."
        );
      }

      const { port, ipAddress: host } = this.equipment.configuration;

      // Construye los listeners correspondientes del cliente
      this.eventHandler.setup();

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

  /**
   *
   */
  reconnect() {
    this.client.connecting = true;
  }
}

module.exports = { TcpClient };
