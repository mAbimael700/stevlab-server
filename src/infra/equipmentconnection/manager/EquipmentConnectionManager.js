const EquipmentConnectionCreator = require("../utils/EquipmentConnectionCreator");
const EquipmentConnectionLoader = require("../utils/EquipmentConnectionLoader");
const EquipmentConnectionRepository = require("../repository/EquipmentConnectionRepository");


class EquipmentConnectionManager {

    constructor(dependencies) {
        const { equipmentService, clientConnectionFactory } = dependencies || {};

        this.connectionRepository = new EquipmentConnectionRepository();
        this.equipmentLoader = new EquipmentConnectionLoader(equipmentService);
        this.connectionCreator = new EquipmentConnectionCreator(clientConnectionFactory);
    }

    /**
     * Inicializa todas las conexiones de equipos
     * @returns {Promise<{successful: string[], failed: {id: string, error: string}[]}>}
     */
    async initialize() {
        try {
            const equipments = await this.equipmentLoader.loadAll();
            return await this.createConnections(equipments);
        } catch (error) {
            throw new Error(`Error during initialization: ${error.message}`);
        }
    }

    /**
     * Crea conexiones para múltiples equipos
     * @param {EquipmentDto[]} equipments
     * @returns {Promise<{successful: string[], failed: {id: string, error: string}[]}>}
     */
    async createConnections(equipments) {
        const results = {
            successful: [],
            failed: []
        };

        // Procesar equipos en paralelo con control de errores
        const promises = equipments.map(async (equipment) => {
            try {
                const connection = await this.connectionCreator
                    .create(equipment);
                this.connectionRepository.store(equipment.id, connection);
                results.successful.push(equipment.id);
            } catch (error) {
                results.failed.push({
                    id: equipment.id,
                    error: error.message
                });
            }
        });

        await Promise.allSettled(promises);
        return results;
    }

    /**
     * Añade una nueva conexión de equipo
     * @param {EquipmentDto} equipment
     * @returns {Promise<EquipmentConnection>}
     */
    async addEquipmentConnection(equipment) {
        const connection = await this.connectionCreator.create(equipment);
        this.connectionRepository.store(equipment.id, connection);
        return connection;
    }

    /**
     * Conecta un equipo outbound
     * @param {string} id
     * @returns {Promise<void>}
     */
    async connectEquipment(id) {
        const connection = this.connectionRepository.get(id);
        if (!connection) {
            throw new Error(`Equipment connection not found: ${id}`);
        }

        if (connection.clientConnection && typeof connection.clientConnection.connect === 'function') {
            await connection.clientConnection.connect();
        }
    }

    /**
     * Desconecta un equipo
     * @param {string} id
     * @returns {Promise<void>}
     */
    async disconnectEquipment(id) {
        const connection = this.connectionRepository.get(id);
        if (!connection) {
            throw new Error(`Equipment connection not found: ${id}`);
        }

        if (connection.clientConnection && typeof connection.clientConnection.disconnect === 'function') {
            await connection.clientConnection.disconnect();
        }
    }

    /**
     * Elimina una conexión de equipo
     * @param {string} id
     * @returns {Promise<void>}
     */
    async removeEquipmentConnection(id) {
        await this.disconnectEquipment(id);
        this.connectionRepository.remove(id);
    }

    /**
     * Obtiene una conexión de equipo por ID
     * @param {string} id
     * @returns {EquipmentConnection | undefined}
     */
    getEquipmentById(id) {
        return this.connectionRepository.get(id);
    }

    /**
     * Obtiene todas las conexiones
     * @returns {EquipmentConnection[]}
     */
    getAllEquipments() {
        return this.connectionRepository.getAll();
    }

    /**
     * Obtiene el estado de todas las conexiones
     * @returns {Object}
     */
    getConnectionsStatus() {
        const connections = this.connectionRepository.getAll();
        return {
            total: connections.length,
            connected: connections.filter(c => c.clientConnection?.isConnected).length,
            disconnected: connections.filter(c => !c.clientConnection?.isConnected).length
        };
    }
}

module.exports = EquipmentConnectionManager;