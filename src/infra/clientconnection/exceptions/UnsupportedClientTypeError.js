const ClientFactoryError = require("@/infra/clientconnection/exceptions/ClientFactoryError");

class UnsupportedClientTypeError extends ClientFactoryError {
    constructor(type, supportedTypes) {
        super(`Tipo de cliente no soportado: ${type}. Tipos disponibles: ${supportedTypes.join(', ')}`);
        this.supportedTypes = supportedTypes;
    }
}

module.exports = UnsupportedClientTypeError;