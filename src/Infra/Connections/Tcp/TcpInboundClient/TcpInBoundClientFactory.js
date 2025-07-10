const TcpClientConnectionCoreFactory = require("../TcpClientConnectionCoreFactory");
const TcpInBoundClient = require("./TcpInBoundClient");

class TcpInBoundClientFactory {
  /**
   * @param {*} connectionValidator
   * @param {*} equipmentConnectionManager
   * @param {TcpClientDependencyFactory} connectionCoreFactory
   */
  constructor(
    connectionValidator,
    equipmentConnectionManager,
    connectionCoreFactory = null
  ) {
    this.connectionValidator = connectionValidator;
    this.equipmentConnectionManager = equipmentConnectionManager;
    this.connectionCoreFactory =
      connectionCoreFactory || new TcpClientConnectionCoreFactory();
  }

  /**
   * Crea una nueva instancia de TcpInBoundClient
   * @param {Socket} socket
   * @returns {TcpInBoundClient}
   */
  create(socket) {
    return new TcpInBoundClient(
      socket,
      this.connectionValidator,
      this.equipmentConnectionManager,
      this.connectionCoreFactory
    );
  }

  /**
   * Crea e inicializa una nueva instancia de TcpInBoundClient
   * @param {Socket} socket
   * @returns {Promise<TcpInBoundClient>}
   */
  async createAndInitialize(socket) {
    const client = this.create(socket);
    await client.initializeSocket();
    return client;
  }
}

module.exports = TcpInBoundClientFactory;
