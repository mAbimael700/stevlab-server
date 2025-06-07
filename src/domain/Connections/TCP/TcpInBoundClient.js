const { Socket } = require("node:net");
const { TcpClient } = require("./TcpClient");
const TcpEventsHandler = require("./TcpEventHandler");
const { TcpSocketListener } = require("./TcpSocketListener");
const {
  BufferDataHandler,
} = require("../../BufferDataHandler/BufferDataHandler");

class TcpInBoundClient extends TcpClient {
  /**
   *
   * @param {Socket} socket
   * @param {*} connectionValidator 
   * @param {*} equipmentConnectionManager 
   */
  constructor(socket, connectionValidator, equipmentConnectionManager) {
    super(socket, "TcpInBound");
    this.equipmentManager = equipmentConnectionManager;
    this.connectionValidator = connectionValidator;
    this.socketListener = null;
    this.initializeSocket();
  }

  /**
   * Valida el socket de conexión entrante
   */
  async validateInboundSocket() {
    try {
      return await this.connectionValidator.validate(this.client.remoteAddress);
    } catch (error) {
      this.client.destroy(); // Cierra el socket si hay un error
      throw new Error(`Falló la validación de conexión: ${error.message}`); // <-- Propagar el error
    }
  }

  async configureSocketEquipment(equipmentResponse) {
    let equipmentOnServerMemory = this.equipmentManager.getEquipmentById(
      equipmentResponse.id
    );

    if (!equipmentOnServerMemory) {
      equipmentOnServerMemory =
        await this.equipmentManager.setEquipmentConnection(equipmentResponse);
    }

    if (equipmentOnServerMemory.connection) {
      equipmentOnServerMemory.setConnection(null);
    }

    this.dataHandler = new BufferDataHandler(equipmentResponse);
    this.eventsHandler = new TcpEventsHandler(
      this.client,
      equipmentResponse,
      this.dataHandler
    );
    this.socketListener = new TcpSocketListener(
      this.client,
      this.eventsHandler
    );
    equipmentOnServerMemory.setConnection(this);
    this.socketListener.setup();
  }

  async initializeSocket() {
    try {
      // Valida el socket entrante
      const response = await this.validateInboundSocket();

      await this.configureSocketEquipment(response);
    } catch (error) {
      throw new Error(
        `Ocurrió una excepción al inicializar el socket de conexión ${this.client.remoteAddress}:${this.client.remotePort}: ${error.message}`
      );
    }
  }
}

module.exports = TcpInBoundClient;
