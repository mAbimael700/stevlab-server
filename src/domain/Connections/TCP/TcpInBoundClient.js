const { Socket } = require("node:net");
const { TcpClient } = require("./TcpClient");
const { EquipmentManager } = require("../../EquipmentConnectionManager/EquimentManager");
const TcpEventsHandler = require("./TcpEventHandler");
const { TcpSocketListener } = require("./TcpSocketListener");

class TcpInBoundClient extends TcpClient {
  /**
   *
   * @param {Socket} socket
   */
  constructor(socket) {
    super(socket, 'TcpInBound');
    this.equipmentManager = EquipmentManager.getInstance();
    // Valida el socket entrante
    this.validateInboundSocket();
  }

  /**
   * Valida el socket de conexión entrante
   */
  async validateInboundSocket() {
    try {
      const response = await this.connectionValidator.validate(
        this.client.remoteAddress
      );

      const equipmentOnServerMemory = this.equipmentManager.getEquipmentById(
        response.id
      );

      if (!equipmentOnServerMemory)
        throw new Error(`Equipo con ID ${response.id} no encontrado.`);

      if (!equipmentOnServerMemory.connection) {
        this.eventsHandler = new TcpEventsHandler(this.client, response);
        this.socketListener = new TcpSocketListener(
          this.client,
          this.eventsHandler
        );
        equipmentOnServerMemory.setConnection(this);

        this.socketListener.setup();
      }
    } catch (error) {
      this.client.destroy(); // Cierra el socket si hay un error
      throw new Error(
        `Error durante la validación de conexión con ${this.client.remoteAddress}:${this.client.remotePort}`,
        error.message
      ); // <-- Propagar el error
    }
  }
}

module.exports = { TcpInBoundClient };
