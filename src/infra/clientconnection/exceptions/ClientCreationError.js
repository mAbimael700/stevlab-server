const ClientFactoryError = require("@/infra/clientconnection/exceptions/ClientFactoryError");

class ClientCreationError extends ClientFactoryError {
    constructor(type, originalError) {
        super(`Error al crear cliente ${type}: ${originalError.message}`);
        this.originalError = originalError;
    }
}

module.exports = ClientCreationError;