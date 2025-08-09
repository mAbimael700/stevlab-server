const HandshakeFactory = require("@/infra/equipmentcommunication/handshake/factory/HandshakeFactory");
const ResultAckFactory = require("@/infra/equipmentcommunication/ack/factory/ResultAckFactory");

class CommunicationCoordinator {
    /**
     *
     * @param client
     * @param {EquipmentDto} equipment
     */
    constructor(client, equipment) {
        this.client = client;
        this.equipment = equipment;

        this.handshakeFactory = new HandshakeFactory();
        this.ackFactory = new ResultAckFactory();

        // Estados de comunicación
        this.handshakeCompleted = !equipment.equipmentProfile.requiresHandshake;

        // Servicios activos
        this.handshakeService = this._createHandshakeService();
        this.ackService = this._createAckService();
    }

    _createHandshakeService() {
        if (!this.equipment.equipmentProfile.requiresHandshake) {
            return null;
        }
        return this.handshakeFactory
            .createService(this.equipment.equipmentProfile.handshakeType);
    }

    _createAckService() {
        if (!this.equipment.equipmentProfile.requiresAck) {
            return null;
        }
        return this.ackFactory
            .createService(this.equipment.equipmentProfile.ackType);
    }

    /**
     * Inicia el handshake si es requerido
     */
    async initiateHandshake() {
        if (!this.equipment.equipmentProfile
            .requiresHandshake || this.handshakeCompleted) {
            return true;
        }

        try {
            const handshakeRequest = this.handshakeService
                .generateHandshakeRequest(this.equipment.equipmentConfiguration);

            this.client.write(handshakeRequest);
            console.log(`Handshake iniciado para equipo ${this.equipment.name}`);
            return true;
        } catch (error) {
            console.error(`Error al iniciar handshake para equipo ${this.equipment.name}:`, error);
            return false;
        }
    }

    /**
     * Procesa la respuesta del handshake
     * @param {Buffer|string} data - Datos recibidos
     * @returns {boolean} - True si se completó el handshake, false si aún está en proceso
     */
    processHandshakeResponse(data) {
        if (!this.equipment.equipmentProfile.requiresHandshake || this.handshakeCompleted) {
            return true;
        }

        try {
            const success = this.handshakeService.processHandshakeResponse(
                data,
                this.equipment.equipmentConfiguration
            );

            if (success) {
                this.handshakeCompleted = true;

                // Enviar confirmación si es necesaria
                const confirmation = this.handshakeService
                    .generateHandshakeConfirmation(
                        this.equipment.equipmentConfiguration
                    );

                if (confirmation) {
                    this.client.write(confirmation);
                }

                console.log(`Handshake completado para equipo ${this.equipment.name}`);
                return true;
            }

            return false;
        } catch (error) {
            console.error(`Error procesando handshake para equipo ${this.equipment.name}:`, error);
            return false;
        }
    }

    /**
     * Procesa datos recibidos y determina si deben ser procesados
     * @param {Buffer|string} data - Datos recibidos
     * @returns {Object} - Resultado del procesamiento
     */
    processReceivedData(data) {
        const result = {
            shouldProcessData: false,
            handshakeInProgress: false
        };

        // Si el handshake no está completo, procesar como respuesta de handshake
        if (!this.handshakeCompleted) {
            result.handshakeInProgress = true;
            const handshakeComplete = this.processHandshakeResponse(data);

            if (!handshakeComplete) {
                return result; // Aun esperando más datos del handshake
            }
        }

        result.shouldProcessData = true;
        return result;
    }

    /**
     * Procesa los resultados del BufferDataHandler y envía ACK si es necesario
     * @param {Array} processedResults - Array de resultados procesados por BufferDataHandler
     * @param {Buffer|string} originalData - Datos originales recibidos
     */
    handleProcessedResults(processedResults, originalData) {
        if (!this.equipment.equipmentProfile.requiresAck) {
            return;
        }

        // Solo enviar ACK si hay resultados procesados
        if (processedResults && processedResults.length > 0) {
            const trigger = this.equipment.equipmentProfile.ackTrigger;

            if (trigger === 'ON_MESSAGE') {
                // Enviar un ACK por cada chunk de datos que produjo resultados
                this._sendAck(originalData);
            } else if (trigger === 'ON_COMPLETE_RESULT') {
                // Enviar un ACK por cada resultado completo procesado
                processedResults.forEach(result => {
                    this._sendAck(result);
                });
            }
        }
    }

    _sendAck(messageOrData) {
        try {
            const ack = this.ackService.generateAck(
                messageOrData,
                this.equipment.equipmentConfiguration
            );

            this.client.write(ack);
            console.log(`ACK enviado para equipo ${this.equipment.name}`);
        } catch (error) {
            console.error(`Error enviando ACK para equipo ${this.equipment.name}:`, error);
        }
    }

    /**
     * Resetea el estado de comunicación
     */
    reset() {
        this.handshakeCompleted = !this.equipment.equipmentProfile.requiresHandshake;
    }
}

module.exports = CommunicationCoordinator