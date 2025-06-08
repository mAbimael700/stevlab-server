const { Socket } = require("node:net");
const { TcpClient } = require("./TcpClient");
const TcpClientConnectionCoreFactory = require("./TcpClientConnectionCoreFactory");
const EquipmentDto = require("../../Equipment/EquipmentDto");

class TcpOutBoundClient extends TcpClient {
  /**
   * @param {EquipmentDto} equipment
   * @param {TcpClientConnectionCoreFactory} connectionCoreFactory
   */
  constructor(equipment, connectionCoreFactory) {
    const socket = new Socket();
    super(socket);
    this.equipment = equipment;
    this.connectionCoreFactory =
      connectionCoreFactory || new TcpClientConnectionCoreFactory();

    // Crear dependencias usando el factory
    this.dataHandler = this.connectionCoreFactory.createBufferDataHandler(
      this.equipment
    );
    this.eventsHandler = this.connectionCoreFactory.createEventsHandler(
      socket,
      this.equipment,
      this.dataHandler
    );
    this.socketListener = this.connectionCoreFactory.createSocketListener(
      socket,
      this.eventsHandler
    );
    this.connect();
  }

  async connect() {
    try {
      const { port, ipAddress: host } = this.equipment.equipmentConfiguration;

      // Construye los listeners correspondientes del cliente

      await new Promise((resolve, reject) => {
        const onConnect = () => {
          cleanUp();
          resolve();
        };

        const onError = (err) => {
          cleanUp();
          reject(err);
        };

        const cleanUp = () => {
          this.client.connecting = false;
          this.client.off("connect", onConnect);
          this.client.off("error", onError);
        };

        // Now attach the listeners
        this.client.once("connect", onConnect);
        this.client.once("error", onError);

        this.client.connect({ host, port });
      });
    } catch (error) {
      console.log(error);

      throw new Error(
        "Hubo un error al conectarse con el equipo",
        error.message
      );
    }
  }
}

module.exports = TcpOutBoundClient;
