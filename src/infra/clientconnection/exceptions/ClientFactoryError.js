class ClientFactoryError extends Error {
    constructor(message, type = null) {
        super(message);
        this.name = this.constructor.name;
        this.clientType = type;
    }
}

module .exports = ClientFactoryError;