const net = require("node:net");
const { ConnectionValidator } = require("./ConnectionValidator");
const { ReconnectionManager } = require("../ReconnectionManager");
const { TcpSocketListener } = require("./TcpSocketListener");
const { ClientConnection } = require("../../ClientConnection/ClientConnection");

class TcpClient extends ClientConnection {
  /**
   *
   * @param {Equipment} equipment
   * @param {EquipmentRepository} equipmentRepository
   */
  constructor(equipment, equipmentRepository) {
    super(equipment.connectionType);
    this.equipment = equipment;
    this.client = new net.Socket();
    this.clientListener = new TcpSocketListener(this.client, this.equipment);
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
    this.clientListener.build();
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
