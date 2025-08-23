const Hl7ResultAckStrategyServiceV1 = require("@/infra/equipmentcommunication/ack/hl7v2/service/Hl7ResultAckStrategyServiceV1");
const AstmResultAckServiceV1 = require("@/infra/equipmentcommunication/ack/astm/AstmResultAckServiceV1");

class ResultAckFactory {
    constructor() {
        /**
         * @type {Map<string, typeof IResultAckService> }
         */
        this.ackServices = new Map();
        this.registerAckServices();
    }

    registerAckServices() {
        this.register("HL7-1", Hl7ResultAckStrategyServiceV1);
        this.register("ASTM-1", AstmResultAckServiceV1);
    }

    register(type, ParserClass) {
        if (typeof ParserClass !== "function") {
            throw new Error("El service debe ser una clase o función constructora");
        }
        this.ackServices.set(type, ParserClass);
        return this; // Permite method chaining
    }

    get supportedServices() {
        return Array.from(this.ackServices.keys());
    }

    /**
     * Crea una instancia del servicio correspondiente
     * @param {string} serviceKey - La clave del servicio (HL7-1, ASTM-1)
     * @returns {IResultAckService} - Instancia del servicio
     * @throws {Error} - Si la clave del servicio no existe
     */
    createService(serviceKey) {
        const ServiceClass = this.ackServices.get(serviceKey);

        if (!ServiceClass) {
            const availableKeys = Array.from(this.ackServices.keys()).join(', ');
            throw new Error(`Service with key "${serviceKey}" not found. Available services: ${availableKeys}`);
        }

        return new ServiceClass();
    }
}

module.exports = ResultAckFactory;
