import ClientFactoryError from "@/infra/clientconnection/exceptions/ClientFactoryError";

class ClientConnectionError extends ClientFactoryError {
    constructor(type, originalError) {
        super(`Error al conectar cliente ${type}: ${originalError.message}`);
        this.originalError = originalError;
    }
}

module.exports = ClientConnectionError;