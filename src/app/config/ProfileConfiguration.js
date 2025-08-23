class ProfileConfiguration {
    constructor(config) {
        this.database = config.database ?? false;
        this.httpServer = config.httpServer ?? false;
        this.tcpServer = config.tcpServer ?? false;
        this.equipmentManager = config.equipmentManager ?? false;
        this.websocketServer = config.websocketServer ?? false;
        this.repositories = config.repositories ?? 'local';
        this.services = config.services ?? 'local';
        this.centralServerUrl = config.centralServerUrl ?? process.env.CENTRAL_SERVER_URL;
    }
}

module.exports = ProfileConfiguration