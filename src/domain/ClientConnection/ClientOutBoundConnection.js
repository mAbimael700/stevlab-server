const { ClientConnection } = require("./ClientConnection");

class ClientOutBoundConnection extends ClientConnection {
    /**
     * 
    @param {'TcpOutBound' | 'Ftp' ! 'Serial'} type 
     */
    constructor(type) {
        super(type)
        this.maxReconnectAttempts = 3;
        this.reconnectAttempts = 0;
        this.reconnectDelay = 5000; // 5 segundos iniciales
    }

    connect() { }
    reconnect() { }
}

module.exports = { ClientOutBoundConnection }