const {
    BufferDataHandler,
} = require("@/infra/bufferdatahandler/handler/BufferDataHandler");
const CommunicationCoordinator = require("@/infra/equipmentcommunication/coordinator/EquipmentCommunicationCoordinator");

class EquipmentCommunicationService {
    /**
     * @param {Socket} client
     * @param {EquipmentDto} equipment
     * @param {BufferDataHandler} dataHandler
     */
    constructor(client, equipment, dataHandler) {
        this.client = client;
        this.equipment = equipment;
        this.dataHandler = dataHandler;
        this.communicationCoordinator = new CommunicationCoordinator(client, equipment);
    }

    /**
     * Procesa los datos recibidos del equipo
     * @param {Buffer} data
     * @throws {Error} Si hay un error en el procesamiento
     */
    async processIncomingData(data) {
        try {
            // Procesar comunicación (handshake)
            const communicationResult = this.communicationCoordinator
                .processReceivedData(data);

            // Log de estado de comunicación
            if (communicationResult.handshakeInProgress) {
                console.log(`Procesando handshake para equipo ${this.equipment.name}`);
                return; // No procesar datos durante el handshake
            }

            // Solo procesar los datos si no es parte del handshake
            if (communicationResult.shouldProcessData) {
                // Procesar los datos y obtener los resultados
                const processedResults = this.dataHandler.processBufferData(data);

                // Manejar ACK basándose en los resultados procesados
                this.communicationCoordinator.handleProcessedResults(processedResults, data);

                return processedResults;
            }
            
        } catch (error) {
            const ipAddress = this.client.remoteAddress ?? this.equipment.equipmentConfiguration.ipAddress;
            const port = this.client.remotePort ?? this.equipment.equipmentConfiguration.port;
            
            throw new Error(
                `Error al procesar datos del equipo ${this.equipment.name} (${ipAddress}:${port}): ${error.message}`,
                { cause: error }
            );
        }
    }

    /**
     * Inicia el handshake con el equipo
     */
    async initiateHandshake() {
        await this.communicationCoordinator.initiateHandshake();
    }

    /**
     * Resetea el estado de la comunicación
     */
    reset() {
        this.communicationCoordinator.reset();
    }

    /**
     * Obtiene información del equipo
     */
    getEquipmentInfo() {
        return {
            name: this.equipment.name,
            ipAddress: this.client.remoteAddress ?? this.equipment.equipmentConfiguration.ipAddress,
            port: this.client.remotePort ?? this.equipment.equipmentConfiguration.port
        };
    }
}

module.exports = EquipmentCommunicationService;