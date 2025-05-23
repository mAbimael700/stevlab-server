const { Socket } = require("node:net");
const { TcpClient } = require("./TcpClient");
const {
  EquipmentConnectionManager,
} = require("../../EquipmentConnectionManager/EquimentConnectionManager");
const TcpEventsHandler = require("./TcpEventHandler");
const { TcpSocketListener } = require("./TcpSocketListener");
const {
  BufferDataHandler,
} = require("../../BufferDataHandler/BufferDataHandler");

class TcpInBoundClient extends TcpClient {
  /**
   *
   * @param {Socket} socket
   */
  constructor(socket) {
    super(socket, "TcpInBound");
    this.equipmentManager = EquipmentConnectionManager.getInstance();
    this.socketListener = null;
    // Valida el socket entrante
    this.validateInboundSocket();
  }

  /**
   * Valida el socket de conexión entrante
   */
  async validateInboundSocket() {
    try {
      const equipmentResponse = await this.connectionValidator.validate(
        this.client.remoteAddress
      );

      const equipmentOnServerMemory = this.equipmentManager.getEquipmentById(
        equipmentResponse.id
      );

      if (!equipmentOnServerMemory)
        throw new Error(`Equipo con ID ${equipmentResponse.id} no encontrado.`);

      if (equipmentOnServerMemory.connection) {
        equipmentOnServerMemory.setConnection(null);
      }

      this.dataHandler = new BufferDataHandler(equipmentResponse);
      this.eventsHandler = new TcpEventsHandler(
        this.client,
        equipmentResponse,
        dataHandler
      );
      this.socketListener = new TcpSocketListener(
        this.client,
        this.eventsHandler
      );

      equipmentOnServerMemory.setConnection(this);
      this.socketListener.setup();
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
