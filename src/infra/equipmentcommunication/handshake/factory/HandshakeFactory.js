const AstmHandshakeServiceV1 = require("@/infra/equipmentcommunication/handshake/astm/service/AstmHandshakeServiceV1");

class HandshakeFactory {
    constructor() {
        /**
         * @type {Map<string, typeof IHandshakeService>}
         */
        this.handshakeServices = new Map();
        this.registerHandshakeServices();
    }

    registerHandshakeServices() {
        this.register("ASTM-1", AstmHandshakeServiceV1);
        // Agregar más tipos según sea necesario
        // this.register("CUSTOM-1", CustomHandshakeServiceV1);
    }

    register(type, ServiceClass) {
        if (typeof ServiceClass !== "function") {
            throw new Error("El service debe ser una clase o función constructora");
        }
        this.handshakeServices.set(type, ServiceClass);
        return this;
    }

    get supportedServices() {
        return Array.from(this.handshakeServices.keys());
    }

    /**
     * Crea una instancia del servicio de handshake correspondiente
     * @param {string} serviceKey - La clave del servicio
     * @returns {IHandshakeService} - Instancia del servicio
     */
    createService(serviceKey) {
        const ServiceClass = this.handshakeServices.get(serviceKey);

        if (!ServiceClass) {
            const availableKeys = Array.from(this.handshakeServices.keys()).join(', ');
            throw new Error(`Handshake service with key "${serviceKey}" not found. Available services: ${availableKeys}`);
        }

        return new ServiceClass();
    }
}

module.exports =HandshakeFactory;