const {Socket} = require("node:net");
const {
    BufferDataHandler,
} = require("@/infra/bufferdatahandler/handler/BufferDataHandler");
const CommunicationCoordinator = require("@/infra/equipmentcommunication/coordinator/EquipmentCommunicationCoordinator");

class TcpEventsHandler {
    /**
     *
     * @param {Socket} socket
     * @param {EquipmentDto} equipment
     * @param {BufferDataHandler} dataHandler
     */
    constructor(socket, equipment, dataHandler) {
        this.socket = socket;
        this.equipment = equipment;
        this.dataHandler = dataHandler;
        this.ipAddress = socket.remoteAddress ?? equipment.equipmentConfiguration.ipAddress;
        this.port = socket.remotePort ?? equipment.equipmentConfiguration.port;

        this.communicationCoordinator = new CommunicationCoordinator(socket, equipment);
    }

    async connect() {
        console.log(
            `Conexión TCP/IP entrante del equipo ${this.equipment.name} con la dirección IPv4: ${this.equipment.equipmentConfiguration.ipAddress}`
        );

        // Iniciar handshake si es requerido
        await this.communicationCoordinator.initiateHandshake();
    }

    /**
     * Maneja los datos entrantes del socket con soporte para handshakes y ACK.
     * @param {Buffer} data
     */
    data(data) {
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
            }
        } catch (error) {
            console.log(error);
            throw new Error(
                `Hubo un error al procesar la información recibida del equipo con dirección IPv4 ${this.ipAddress}:${this.port}: ${error.message}`,
                error
            );
        }
    }

    /**
     *
     * @param {Error} err
     */
    error(err) {
        const errorMessage = this.generateErrorMessage(err);
        console.error(errorMessage);

        // Reset del coordinador en caso de error
        this.communicationCoordinator.reset();

    }

    close() {
        console.log(`Conexión cerrada para equipo ${this.equipment.name}`);

        // Reset del coordinador al cerrar conexión
        this.communicationCoordinator.reset();
    }

    end() {
        console.log(
            `Conexión cerrada por el equipo con IPv4: ${this.ipAddress}:${this.port}`
        );

        this.communicationCoordinator.reset();

        if (!this.socket.destroyed) {
            this.socket.destroy();
        }
    }

    timeout() {
        console.log(`Timeout para equipo ${this.equipment.name}`);

        // Reset del coordinador en timeout
        this.communicationCoordinator.reset();

        this.socket.end();
    }

    /**
     *
     * @param {Error} error
     * @returns
     */
    generateErrorMessage(error) {
        let msg;
        switch (error.code) {
            case "ECONNREFUSED":
                msg = `Conexión rechazada a ${this.ipAddress}:${this.port}.`;
                break;
            case "ETIMEDOUT":
                msg = `Tiempo de espera agotado para ${this.ipAddress}:${this.port}.`;
                break;
            case "EHOSTUNREACH":
                msg = `No se puede alcanzar el host ${this.ipAddress} en el puerto ${this.port}.`;
                break;
            default:
                msg = `Hubo un error en de conexión: ${error.message}`;
        }

        return msg;
    }
}

module.exports = TcpEventsHandler;
