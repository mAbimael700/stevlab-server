const net = require("node:net");
const { TcpSocketListener } = require("./TcpSocketListener");
const { ClientConnection } = require("../../ClientConnection/ClientConnection");

class TcpClient extends ClientConnection {
  /**
   *
   * @param {Equipment} equipment
   * @param {EquipmentRepository} equipmentRepository
   */
  constructor(equipment) {
    super(equipment.configuration.connectionType);
    this.equipment = equipment;
    this.client = new net.Socket();
    this.socketListener = new TcpSocketListener(this.client, this.equipment);

    this.connecting = this.client.connecting;
    this.closed = this.client.closed;
    this.destroyed = this.client.destroyed;
  }

  async build() {
    try {
      //Realiza la conexión del cliente TCP
      this.connect();
    } catch (error) {
      console.error(error.message);
    }
  }

  /**
   * @param {net.Socket} client
   */
  connect() {
    const port = this.equipment.configuration.port;
    const host = this.equipment.configuration.ipAddress;

    // Construye los listeners correspondientes del cliente
    this.socketListener.setup();
    //
    this.client.connect(port, host, async () => {
      this.client.connecting = false;
    });
  }

  /**
   *
   */
  reconnect() {
    this.client.connecting = true;
  }
}

module.exports = { TcpClient };
