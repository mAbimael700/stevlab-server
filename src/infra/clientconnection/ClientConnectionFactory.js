const ClientOutBoundConnection = require("./ClientOutBoundConnection");
const FtpClient = require("@/infra/connection/ftp/FtpClient");
const SerialClient = require("@/infra/connection/serial/SerialClient");
const TcpOutBoundClient = require("@/infra/connection/tcp/TcpOutBoundClient");
const TcpClientConnectionCoreFactory = require("@/infra/connection/tcp/TcpClientConnectionCoreFactory");
const SerialClientCoreFactory = require("@/infra/connection/serial/SerialClientCoreFactory");

class FtpClientCoreFactory {
    constructor(bufferDataEmitter) {
        
    }

}

/**
 * Factory para crear diferentes tipos de clientes de conexión
 */
class ClientConnectionFactory {
    constructor(bufferDataEmitter) {
        this.bufferDataEmitter = bufferDataEmitter;
        this.clientConfigs = new Map();
        this.coreFactories = new Map();

        this._initializeCoreFactories();
        this._registerClientTypes();
    }

    /**
     * Inicializa los core factories disponibles
     * @private
     */
    _initializeCoreFactories() {
        this.coreFactories.set('tcp', new TcpClientConnectionCoreFactory(this.bufferDataEmitter));
        this.coreFactories.set('serial', new SerialClientCoreFactory(this.bufferDataEmitter));
        this.coreFactories.set('ftp', new FtpClientCoreFactory(this.bufferDataEmitter));
    }

    /**
     * Registra todos los tipos de cliente soportados
     * @private
     */
    _registerClientTypes() {
        // Tipos especiales que no requieren instanciación
        this.register("TcpInbound", {
            special: true,
            reason: "Manejado por TcpServer"
        });

        // Clientes regulares - todos requieren equipo
        this.register("TcpOutbound", {
            clientClass: TcpOutBoundClient,
            coreFactoryKey: 'tcp'
        });

        this.register("Serial", {
            clientClass: SerialClient,
            coreFactoryKey: 'serial'
        });

        this.register("Ftp", {
            clientClass: FtpClient,
            coreFactoryKey: 'ftp'
        });
    }

    /**
     * Registra un tipo de cliente
     * @param {string} type - Tipo de cliente
     * @param {Object} config - Configuración del cliente
     * @returns {ClientConnectionFactory}
     */
    register(type, config) {
        if (!type || typeof type !== 'string') {
            throw new Error('El tipo de cliente debe ser un string válido');
        }

        // Validar configuraciones especiales
        if (config.special) {
            this.clientConfigs.set(type, config);
            return this;
        }

        // Validar configuraciones regulares
        if (!config.clientClass || typeof config.clientClass !== 'function') {
            throw new Error(`La configuración para ${type} debe tener una clientClass válida`);
        }

        if (config.coreFactoryKey && !this.coreFactories.has(config.coreFactoryKey)) {
            throw new Error(`Core factory '${config.coreFactoryKey}' no encontrado para ${type}`);
        }

        this.clientConfigs.set(type, config);

        return this;
    }

    /**
     * Crea una instancia de cliente
     * @param {string} type - Tipo de conexión
     * @param {Object} equipment - Datos del equipo
     * @returns {ClientOutBoundConnection | null}
     */
    create(type, equipment = null) {
        const config = this._validateAndGetConfig(type, equipment);

        if (config.special) {
            return null;
        }

        try {
            const coreFactory = config.coreFactoryKey ?
                this.coreFactories.get(config.coreFactoryKey) : null;

            return coreFactory ?
                new config.clientClass(equipment, coreFactory) :
                new config.clientClass(equipment);

        } catch (error) {
            throw new ClientCreationError(type, error);
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

        if (typeof client.connect === 'function') {
            try {
                await client.connect();
            } catch (error) {
                throw new ClientConnectionError(type, error);
            }
        }

        return client;
    }

    /**
     * Valida parámetros y obtiene configuración
     * @private
     * @param {string} type
     * @param {Object} equipment
     * @returns {Object}
     */
    _validateAndGetConfig(type, equipment) {
        if (!this.isSupported(type)) {
            throw new UnsupportedClientTypeError(type, this.supportedTypes);
        }

        const config = this.clientConfigs.get(type);

        // Todos los clientes regulares requieren equipo
        if (!config.special && !equipment) {
            throw new MissingEquipmentError(type);
        }

        return config;
    }

    /**
     * Obtiene tipos soportados
     * @returns {string[]}
     */
    get supportedTypes() {
        return Array.from(this.clientConfigs.keys());
    }

    /**
     * Verifica si un tipo está soportado
     * @param {string} type
     * @returns {boolean}
     */
    isSupported(type) {
        return this.clientConfigs.has(type);
    }

    /**
     * Obtiene información sobre un tipo de cliente
     * @param {string} type
     * @returns {Object|null}
     */
    getClientInfo(type) {
        if (!this.isSupported(type)) {
            return null;
        }

        const config = this.clientConfigs.get(type);
        return {
            type,
            supported: true,
            isSpecial: !!config.special,
            requiresEquipment: !config.special, // Todos los clientes regulares requieren equipo
            hasCoreFactory: !!config.coreFactoryKey,
            reason: config.reason || null
        };
    }

    /**
     * Lista todos los clientes con su información
     * @returns {Object[]}
     */
    listAllClients() {
        return this.supportedTypes.map(type => this.getClientInfo(type));
    }
}

// Errores específicos para mejor debugging
class ClientFactoryError extends Error {
    constructor(message, type = null) {
        super(message);
        this.name = this.constructor.name;
        this.clientType = type;
    }
}

class UnsupportedClientTypeError extends ClientFactoryError {
    constructor(type, supportedTypes) {
        super(`Tipo de cliente no soportado: ${type}. Tipos disponibles: ${supportedTypes.join(', ')}`);
        this.supportedTypes = supportedTypes;
    }
}

class MissingEquipmentError extends ClientFactoryError {
    constructor(type) {
        super(`El cliente ${type} requiere datos del equipo`);
    }
}

class ClientCreationError extends ClientFactoryError {
    constructor(type, originalError) {
        super(`Error al crear cliente ${type}: ${originalError.message}`);
        this.originalError = originalError;
    }
}

class ClientConnectionError extends ClientFactoryError {
    constructor(type, originalError) {
        super(`Error al conectar cliente ${type}: ${originalError.message}`);
        this.originalError = originalError;
    }
}

module.exports = ClientConnectionFactory;