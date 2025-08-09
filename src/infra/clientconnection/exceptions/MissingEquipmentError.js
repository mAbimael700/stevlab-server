const ClientFactoryError = require("@/infra/clientconnection/exceptions/ClientFactoryError");

class MissingEquipmentError extends ClientFactoryError {
    constructor(type) {
        super(`El cliente ${type} requiere datos del equipo`);
    }
}

module.exports = MissingEquipmentError;