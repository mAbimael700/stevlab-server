const TcpOutBoundClient = require("../client/TcpOutBoundClient");
const TcpClientFactory = require("@/infra/connection/tcp/factory/TcpClientFactory");

class TcpOutBoundClientFactory extends TcpClientFactory {
    /**
     * @param {*} bufferDataEmitter
     */
    constructor(bufferDataEmitter = null) {
        super(bufferDataEmitter);
    }

    /**
     * Crea una nueva instancia de TcpOutBoundClient completamente configurada
     * @param socket
     * @param {EquipmentDto} equipment
     * @returns {TcpOutBoundClient}
     */
    create(socket, equipment) {
        return new TcpOutBoundClient(equipment, this);
    }

    /**
     * Crea una nueva instancia de TcpOutBoundClient con manejo de errores
     * @param {EquipmentDto} equipment
     * @returns {Promise<TcpOutBoundClient>}
     */
    async createAndInitialize(equipment) {
        try {
            return this.create(equipment);
        } catch (error) {
            console.log(error);
            throw new Error(
                `Error al crear e inicializar TcpOutBoundClient: ${error.message}`
            );
        }
    }
}

module.exports = TcpOutBoundClientFactory;