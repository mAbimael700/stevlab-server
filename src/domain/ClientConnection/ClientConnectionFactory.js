const ClientOutBoundConnection = require("./ClientOutBoundConnection");
const FtpClient = require("../Connections/Ftp/FtpClient");
const SerialClient = require("../Connections/Serial/SerialClient");
const TcpOutBoundClient = require("../Connections/Tcp/TcpOutBoundClient");
const TcpClientConnectionCoreFactory = require("../Connections/Tcp/TcpClientConnectionCoreFactory");
const SerialClientCoreFactory = require("../Connections/Serial/SerialClientCoreFactory");

class ClientConnectionFactory {
  constructor() {
    /**
     * @type {Map<string, {clientClass: ClientOutBoundConnection, clientCoreFactory: Function} | null>}
     */
    this.clientConnections = new Map();

    // Inicializar dependency factories
    this.clientCoreFactories = {
      tcp: new TcpClientConnectionCoreFactory(),
      serial: new SerialClientCoreFactory(),
      //ftp: new FtpClientCoreFactory(), // Asumiendo que existe
    };

    this.registerClientConnections();
  }

  registerClientConnections() {
    // TcpInbound se maneja por TcpServer, por eso es null
    this.register("TcpInbound", null);

    // Registro con clase y dependency factory
    this.register("TcpOutbound", {
      clientClass: TcpOutBoundClient,
      clientCoreFactory: () => this.clientCoreFactories.tcp,
    });

    this.register("Serial", {
      clientClass: SerialClient,
      clientCoreFactory: () => this.clientCoreFactories.serial,
    });

    this.register("Ftp", {
      clientClass: FtpClient,
      clientCoreFactory: () => this.clientCoreFactories.ftp,
    });
  }

  /**
   * Registra un tipo de cliente con su dependency factory
   * @param {string} type
   * @param {Object|null} config - {clientClass: Function, dependencyFactory: Function} o null
   * @returns {ClientConnectionFactory}
   */
  register(type, config) {
    if (
      config !== null &&
      (!config.clientClass || typeof config.clientClass !== "function")
    ) {
      throw new Error(
        `La configuración para ${type} debe tener una clientClass válida`
      );
    }

    this.clientConnections.set(type, config);
    return this; // Method chaining
  }

  get supportedTypes() {
    return Array.from(this.clientConnections.keys());
  }

  /**
   * Crea una instancia de cliente basada en el tipo
   * @param {string} type - Tipo de conexión
   * @param {Object} equipment - Datos del equipo (opcional para algunos tipos)
   * @returns {ClientOutBoundConnection | null}
   */
  create(type, equipment = null) {
    if (!this.clientConnections.has(type)) {
      throw new Error(
        `Tipo de cliente de conexión no soportado: ${type}. Tipos soportados: ${this.supportedTypes.join(
          ", "
        )}`
      );
    }

    const config = this.clientConnections.get(type);

    // Casos especiales que retornan null (como TcpInbound)
    if (!config) {
      return null;
    }

    const { clientClass, clientCoreFactory } = config;

    try {
      // Si el cliente requiere equipment, verificar que se proporcione
      if (this._requiresEquipment(type) && !equipment) {
        throw new Error(`El tipo de cliente ${type} requiere datos del equipo`);
      }

      // Crear instancia con o sin dependency factory
      if (clientCoreFactory) {
        const factory = clientCoreFactory();
        return equipment
          ? new clientClass(equipment, factory)
          : new clientClass(factory);
      } else {
        return equipment ? new clientClass(equipment) : new clientClass();
      }
    } catch (error) {
      throw new Error(`Error al crear cliente ${type}: ${error.message}`);
    }
  }

  /**
   * Crea y conecta una instancia de cliente
   * @param {string} type
   * @param {Object} equipment
   * @returns {Promise<ClientOutBoundConnection | null>}
   */
  async createAndConnect(type, equipment = null) {
    const client = this.create(type, equipment);

    if (!client) {
      return null;
    }

    // Si el cliente tiene método connect, llamarlo
    if (typeof client.connect === "function") {
      await client.connect();
    }

    return client;
  }

  /**
   * Verifica si un tipo de cliente requiere datos del equipo
   * @private
   * @param {string} type
   * @returns {boolean}
   */
  _requiresEquipment(type) {
    const typesRequiringEquipment = ["TcpOutbound", "Serial", "Ftp"];
    return typesRequiringEquipment.includes(type);
  }

  /**
   * Verifica si un tipo de cliente está soportado
   * @param {string} type
   * @returns {boolean}
   */
  isSupported(type) {
    return this.clientConnections.has(type);
  }

  /**
   * Obtiene información sobre un tipo de cliente
   * @param {string} type
   * @returns {Object}
   */
  getClientInfo(type) {
    if (!this.isSupported(type)) {
      return null;
    }

    const config = this.clientConnections.get(type);
    return {
      type,
      supported: true,
      hasConfig: config !== null,
      requiresEquipment: this._requiresEquipment(type),
    };
  }
}

const clientConnectionFactory = new ClientConnectionFactory();

module.exports = clientConnectionFactory;
