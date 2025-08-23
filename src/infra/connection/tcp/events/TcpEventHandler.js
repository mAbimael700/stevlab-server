const { Socket } = require("node:net");
const {
  BufferDataHandler,
} = require("@/infra/bufferdatahandler/handler/BufferDataHandler");
const EquipmentCommunicationService = require("@/infra/equipmentcommunication/service/EquipmentCommunicationService");

class TcpEventsHandler {
  /**
   *
   * @param {Socket} socket
   * @param {EquipmentDto} equipment
   * @param {BufferDataHandler} dataHandler
   */
  constructor(socket, equipment, dataHandler) {
    this.socket = socket;
    this.equipment = equipment;
    this.dataHandler = dataHandler;
    this.ipAddress =
      socket.remoteAddress ?? equipment.equipmentConfiguration.ipAddress;
    this.port = socket.remotePort ?? equipment.equipmentConfiguration.port;

    // Crear el servicio de comunicación
    this.communicationService = new EquipmentCommunicationService(
      socket,
      equipment,
      dataHandler
    );
  }

  async connect() {
    console.log(
      `Conexión TCP/IP entrante del equipo ${this.equipment.name} con la dirección IPv4: ${this.equipment.equipmentConfiguration.ipAddress}`
    );

    // Iniciar handshake si es requerido
    await this.communicationService.initiateHandshake();
  }

  /**
   * Maneja los datos entrantes del socket
   * @param {Buffer} data
   */
  async data(data) {
    try {
      const results = await this.communicationService.processIncomingData(data);

      // Aquí puedes agregar lógica adicional si necesitas hacer algo con los resultados
      if (results) {
        // Por ejemplo: logging, métricas, callbacks, etc.
        console.log(
          `Datos procesados exitosamente para equipo ${this.equipment.name}`
        );
      }
    } catch (error) {
      console.error(error.message);
      // Relanzar el error si es necesario para el manejo upstream
      throw error;
    }
  }

  /**
   *
   * @param {Error} err
   */
  error(err) {
    const errorMessage = this.generateErrorMessage(err);
    console.error(errorMessage);

    // Reset del coordinador en caso de error
    this.communicationService.reset();
  }

  close() {
    console.warn(`Conexión cerrada para equipo ${this.equipment.name}`);

    // Reset del coordinador al cerrar conexión
    this.communicationService.reset();
  }

  end() {
    console.log(
      `Conexión cerrada por el equipo con IPv4: ${this.ipAddress}:${this.port}`
    );

    this.communicationService.reset();

    if (!this.socket.destroyed) {
      this.socket.destroy();
    }
  }

  timeout() {
    console.log(`Timeout para equipo ${this.equipment.name}`);

    // Reset del coordinador en timeout
    this.communicationService.reset();

    this.socket.end();
  }

  /**
   *
   * @param {Error} error
   * @returns
   */
  generateErrorMessage(error) {
    let msg;
    switch (error.code) {
      case "ECONNREFUSED":
        msg = `Conexión rechazada a ${this.ipAddress}:${this.port}.`;
        break;
      case "ETIMEDOUT":
        msg = `Tiempo de espera agotado para ${this.ipAddress}:${this.port}.`;
        break;
      case "EHOSTUNREACH":
        msg = `No se puede alcanzar el host ${this.ipAddress} en el puerto ${this.port}.`;
        break;
      default:
        msg = `Hubo un error en de conexión: ${error.message}`;
    }

    return msg;
  }
}

module.exports = TcpEventsHandler;
