const IHandshakeService = require("@/infra/equipmentcommunication/handshake/interface/IHandshakeService");

class AstmHandshakeServiceV1 extends IHandshakeService {
    generateHandshakeRequest(config) {
        // ENQ (Enquiry) - 0x05
        return Buffer.from([0x05]);
    }

    processHandshakeResponse(response, config) {
        // ACK (Acknowledge) - 0x06
        const ack = Buffer.from([0x06]);
        return Buffer.compare(response, ack) === 0;
    }

    generateHandshakeConfirmation(config) {
        // STX (Start of Text) - 0x02 para confirmar que podemos recibir datos
        return Buffer.from([0x02]);
    }
}

module.exports = AstmHandshakeServiceV1;