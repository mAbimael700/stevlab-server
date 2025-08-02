const net = require("node:net");

class TcpServer {
    /**
     *
     * @param {number} port
     * @param {TcpInBoundClientFactory} clientFactory
     * @param {ConnectionValidator} connectionValidator
     * @param {EquipmentConnectionManager} equipmentConnectionManager
     */
    constructor(port = 3000,
                clientFactory,
                connectionValidator,
                equipmentConnectionManager) {
        this.port = port;
        this.clientFactory = clientFactory;
        this.connectionValidator = connectionValidator;
        this.equipmentConnectionManager = equipmentConnectionManager;
        this.server = null;
        this.options = {
            allowHalfOpen: true,
            keepAlive: true,
            keepAliveInitialDelay: 1000,
        };
    }

    build() {
        this.server = net
            .createServer(this.options,
                async (socket) => {
                    try {
                        // El servidor se encarga de la validación
                        const equipmentResponse = await this.validateConnection(socket);

                        // El servidor configura el equipo en memoria
                        const equipment = await this.configureEquipment(equipmentResponse);

                        // Crear e inicializar el cliente con el equipo ya configurado
                        const client = await this.clientFactory.createAndInitialize(socket, equipmentResponse);

                        // El servidor establece la conexión en el equipo
                        equipment.setClientConnection(client);
                    } catch (error) {
                        console.error(`Error al crear cliente TCP: ${error.message}`, error);
                        if (!socket.destroyed) {
                            socket.destroy();
                        }
                    }
                });
    }

    listen() {
        try {
            this.build();
            this.server.listen(this.port, () => {
                console.log(`Servidor TPC/IP escuchando en el puerto ${this.port}`);
            });
        } catch (error) {
            throw new Error(`Error al inicializar el servidor ${error.message}`);
        }
    }

    reconnect() {
        if (!this.server.listening) {
            console.log("Intentando reconectar el servidor TCP/IP...");
            setTimeout(() => {
                this.listen();
            }, 5000); // Reintentar después de 5 segundos
        }
    }

    /**
     * Valida la conexión entrante
     * @param {net.Socket} socket
     * @returns {Promise<EquipmentDto>}
     */
    async validateConnection(socket) {
        try {
            return await this.connectionValidator.validate(socket.remoteAddress);
        } catch (error) {
            console.log(error)
            socket.destroy();
            throw new Error(`Falló la validación de conexión: ${error.message}`);
        }
    }

    /**
     * Configura el equipo en memoria del servidor
     * @param {EquipmentDto} equipmentResponse
     * @returns {Promise<EquipmentConnection>}
     */
    async configureEquipment(equipmentResponse) {
        let equipmentOnServerMemory = this.equipmentConnectionManager.getEquipmentById(
            equipmentResponse.id
        );

        if (!equipmentOnServerMemory) {
            equipmentOnServerMemory = await this.equipmentConnectionManager
                .addEquipmentConnection(equipmentResponse);
        }

        // Si ya tiene una conexión activa, la limpia
        if (equipmentOnServerMemory.connection) {
            equipmentOnServerMemory.setClientConnection(null);
        }

        return equipmentOnServerMemory;
    }
}

module.exports = TcpServer;
