const TcpEventsHandler = require("@/infra/connection/tcp/events/TcpEventHandler");
const { TcpSocketListener } = require("@/infra/connection/tcp/listener/TcpSocketListener");
const {
    BufferDataHandler,
} = require("@/infra/bufferdatahandler/handler/BufferDataHandler");

class TcpClientFactory {
    constructor(bufferDataEmitter = null) {
        this.bufferDataEmitter = bufferDataEmitter;
    }

    /**
     * Crea una instancia de BufferDataHandler
     * @param {EquipmentDto} equipment
     * @returns {BufferDataHandler}
     */
    createBufferDataHandler(equipment) {
        return new BufferDataHandler(equipment, this.bufferDataEmitter);
    }

    /**
     * Crea una instancia de TcpEventsHandler
     * @param {Socket} client
     * @param {EquipmentDto} equipment
     * @param {BufferDataHandler} dataHandler
     * @returns {TcpEventsHandler}
     */
    createEventsHandler(client, equipment, dataHandler) {
        return new TcpEventsHandler(client, equipment, dataHandler);
    }

    /**
     * Crea una instancia de TcpSocketListener
     * @param {Socket} client
     * @param {TcpEventsHandler} eventsHandler
     * @returns {TcpSocketListener}
     */
    createSocketListener(client, eventsHandler) {
        return new TcpSocketListener(client, eventsHandler);
    }

    /**
     * Crea una nueva instancia de cliente TCP completamente configurada
     * @param {Socket} socket
     * @param {EquipmentDto} equipment
     * @returns {Object} Objeto con dataHandler, eventsHandler y socketListener
     */
    create(socket, equipment) {
        const dataHandler = this.createBufferDataHandler(equipment);
        const eventsHandler = this.createEventsHandler(socket, equipment, dataHandler);
        const socketListener = this.createSocketListener(socket, eventsHandler);

        return {
            dataHandler,
            eventsHandler,
            socketListener
        };
    }
}

module.exports = TcpClientFactory;