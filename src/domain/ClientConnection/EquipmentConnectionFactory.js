const ClientOutBoundConnection = require("../ClientConnection/ClientOutBoundConnection");
const FtpClient = require("../Connections/Ftp/FtpClient");
const SerialClient = require("../Connections/Serial/SerialClient");
const TcpOutBoundClient = require("../Connections/Tcp/TcpOutBoundClient");

class ClientConnectionFactory {
  constructor() {
    /**
     * @type {Map<string, ClientOutBoundConnection | null> }
     */
    this.clientConnections = new Map();
    this.registerClientConnections();
  }

  registerClientConnections() {
    this.register("TcpInbound", null);
    this.register("TcpOutbound", TcpOutBoundClient);
    this.register("Ftp", FtpClient);
    this.register("Serial", SerialClient);
  }

  register(type, ParserClass) {
    if (typeof ParserClass !== "function") {
      throw new Error("El parser debe ser una clase o función constructora");
    }
    this.clientConnections.set(type, ParserClass);
    return this; // Permite method chaining
  }

  get supportedParsers() {
    return Array.from(this.clientConnections.keys());
  }

  /**
   *
   * @param {string} type
   * @returns {ClientOutBoundConnection | null}
   */
  create(type) {

    if (!this.clientConnections.has(type)) {
      throw new Error(`Tipo de cliente de conexión no soportado: ${type}`);
    }

    const clientConnection = this.clientConnections.get(type);

    if (!clientConnection) {
      return null;
    }

    return (new clientConnection());
  }
}

const clientConnectionFactory = new ClientConnectionFactory();

module.exports = clientConnectionFactory;
