const {Socket} = require("node:net");
const TcpClient = require("../../client/TcpClient");


class TcpInBoundClient extends TcpClient {
    /**
     *
     * @param {Socket} socket
     * @param {EquipmentDto} equipment
     * @param {Object} handlers - Handlers ya creados e inicializados
     * @param {BufferDataHandler} handlers.dataHandler
     * @param {TcpEventsHandler} handlers.eventsHandler
     * @param {TcpSocketListener} handlers.socketListener
     */
    constructor(socket, equipment, handlers) {
        super(socket, "TcpInBound");
        this.equipment = equipment;
        this.dataHandler = handlers.dataHandler;
        this.eventsHandler = handlers.eventsHandler;
        this.socketListener = handlers.socketListener;
    }

    /**
     * Limpia los recursos del cliente
     */
    cleanup() {
        if (this.socketListener) {
            this.socketListener.cleanup?.();
        }
        if (this.eventsHandler) {
            this.eventsHandler.cleanup?.();
        }
        if (this.client && !this.client.destroyed) {
            this.client.destroy();
        }
    }
}

module.exports = TcpInBoundClient;
