class EquipmentConnectionCreator {
    constructor(clientConnectionFactory) {
        this.clientConnectionFactory = clientConnectionFactory;
    }

    /**
     * Crea una conexión de equipo
     * @param {EquipmentDto} equipment
     * @returns {Promise<EquipmentConnection>}
     */
    async create(equipment) {
        try {
            const clientConnection = await this.clientConnectionFactory.create(
                equipment.equipmentProfile.communicationType,
                equipment
            );

            return new EquipmentConnection(
                equipment,
                clientConnection
            );
        } catch (error) {
            throw new Error(`Error creating connection for equipment ${equipment.id}: ${error.message}`);
        }
    }

    /**
     * Crea y conecta una conexión de equipo
     * @param {EquipmentDto} equipment
     * @returns {Promise<EquipmentConnection>}
     */
    async createAndConnect(equipment) {
        const connection = await this.create(equipment);

        if (connection.clientConnection && typeof connection.clientConnection.connect === 'function') {
            await connection.clientConnection.connect();
        }

        return connection;
    }
}

module.exports = EquipmentConnectionCreator;