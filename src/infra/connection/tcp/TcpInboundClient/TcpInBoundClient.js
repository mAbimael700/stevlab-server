const { Socket } = require("node:net");
const { TcpClient } = require("../TcpClient");
const EquipmentConnectionManager = require("@/infra/equipmentconnectionmanager/EquimentConnectionManager");
const { ConnectionValidator } = require("../ConnectionValidator");
const EquipmentDto = require("../../../../domain/equipment/EquipmentDto");
const TcpClientConnectionCoreFactory = require("../TcpClientConnectionCoreFactory");

class TcpInBoundClient extends TcpClient {
  /**
   *
   * @param {Socket} socket
   * @param {ConnectionValidator} connectionValidator
   * @param {EquipmentConnectionManager} equipmentConnectionManager
   * @param {TcpClientConnectionCoreFactory} connectionCoreFactory 
   */
  constructor(
    socket,
    connectionValidator,
    equipmentConnectionManager,
    connectionCoreFactory
  ) {
    super(socket, "TcpInBound");
    this.equipmentManager = equipmentConnectionManager;
    this.connectionValidator = connectionValidator;
    this.connectionCoreFactory = connectionCoreFactory;
    this.socketListener = null;
    this.dataHandler = null;
    this.eventsHandler = null;
  }

  async initializeSocket() {
    try {
      // Valida el socket entrante
      const response = await this.validateInboundSocket();
      await this.configureSocketEquipment(response);
    } catch (error) {
      console.error(error);
      throw new Error(
        `Ocurrió una excepción al inicializar el socket de conexión ${this.client.remoteAddress}:${this.client.remotePort}: ${error.message}`, error
      );
      
    }
  }

  /**
   * Valida el socket de conexión entrante
   */
  async validateInboundSocket() {
    try {
      return await this.connectionValidator.validate(this.client.remoteAddress);
    } catch (error) {
      this.client.destroy(); // Cierra el socket si hay un error
      throw new Error(`Falló la validación de conexión: ${error.message}`,error); // <-- Propagar el error
    }
  }

  /**
   *
   * @param {EquipmentDto} equipmentResponse
   */
  async configureSocketEquipment(equipmentResponse) {
    let equipmentOnServerMemory = this.equipmentManager.getEquipmentById(
      equipmentResponse.id
    );

    if (!equipmentOnServerMemory) {
      equipmentOnServerMemory =
        await this.equipmentManager.setEquipmentConnection(equipmentResponse);
    }

    if (equipmentOnServerMemory.connection) {
      equipmentOnServerMemory.setClientConnection(null);
    }

    this.dataHandler =
      this.connectionCoreFactory.createBufferDataHandler(equipmentResponse);
    this.eventsHandler = this.connectionCoreFactory.createEventsHandler(
      this.client,
      equipmentResponse,
      this.dataHandler
    );
    this.socketListener = this.connectionCoreFactory.createSocketListener(
      this.client,
      this.eventsHandler
    );

    equipmentOnServerMemory.setClientConnection(this);
  }

  /**
   * Limpia los recursos del cliente
   */
  cleanup() {
    if (this.socketListener) {
      this.socketListener.cleanup?.();
    }
    if (this.eventsHandler) {
      this.eventsHandler.cleanup?.();
    }
    if (this.client && !this.client.destroyed) {
      this.client.destroy();
    }
  }
}

module.exports = TcpInBoundClient;
