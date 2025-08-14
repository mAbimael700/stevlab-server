const TcpInBoundClient = require("../client/TcpInBoundClient");
const TcpClientFactory = require("@/infra/connection/tcp/factory/TcpClientFactory");

class TcpInBoundClientFactory extends TcpClientFactory {
    /**
     * @param {BufferDataEmitter} bufferDataEmitter
     */
    constructor({bufferDataEmitter = null}) {
        super(bufferDataEmitter);
    }

    /**
     * Crea una nueva instancia de TcpInBoundClient completamente configurada
     * @param {Socket} socket
     * @param {EquipmentDto} equipment
     * @returns {TcpInBoundClient}
     */
    create(socket, equipment) {
        const handlers = super.create(socket, equipment);
        return new TcpInBoundClient(socket, equipment, handlers);
    }

    /**
     * Crea una nueva instancia de TcpInBoundClient (sin inicialización adicional)
     * @param {Socket} socket
     * @param {EquipmentDto} equipment
     * @returns {Promise<TcpInBoundClient>}
     */
    async createAndInitialize(socket, equipment) {
        try {
            return this.create(socket, equipment);
        } catch (error) {
            console.log(error);
            throw new Error(
                `Error al crear e inicializar TcpInBoundClient: ${error.message}`
            );
        }
    }
}

module.exports = TcpInBoundClientFactory;
