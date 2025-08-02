const TcpClientConnectionCoreFactory = require("../../factory/TcpClientConnectionCoreFactory");
const TcpInBoundClient = require("../client/TcpInBoundClient");

class TcpInBoundClientFactory {
  /**
   * @param {TcpClientConnectionCoreFactory} connectionCoreFactory
   */
  constructor(
    connectionCoreFactory = null
  ) {
    this.connectionCoreFactory =
      connectionCoreFactory || new TcpClientConnectionCoreFactory();
  }

  /**
   * Crea una nueva instancia de TcpInBoundClient completamente configurada
   * @param {Socket} socket
   * @param {EquipmentDto} equipment
   * @returns {TcpInBoundClient}
   */
  create(socket, equipment) {
    // El factory crea todos los handlers necesarios
    const dataHandler = this.connectionCoreFactory.createBufferDataHandler(equipment);
    const eventsHandler = this.connectionCoreFactory.createEventsHandler(
        socket,
        equipment,
        dataHandler
    );
    const socketListener = this.connectionCoreFactory.createSocketListener(
        socket,
        eventsHandler
    );

    const handlers = {
      dataHandler,
      eventsHandler,
      socketListener
    };

    return new TcpInBoundClient(socket, equipment, handlers);
  }

  /**
   * Crea una nueva instancia de TcpInBoundClient (sin inicialización adicional)
   * @param {Socket} socket
   * @param {EquipmentDto} equipment
   * @returns {Promise<TcpInBoundClient>}
   */
  async createAndInitialize(socket, equipment) {
    try {
      return this.create(socket, equipment);
    } catch (error) {
      console.log(error);
      throw new Error(
          `Error al crear e inicializar TcpInBoundClient: ${error.message}`
      );
    }
  }
}

module.exports = TcpInBoundClientFactory;
