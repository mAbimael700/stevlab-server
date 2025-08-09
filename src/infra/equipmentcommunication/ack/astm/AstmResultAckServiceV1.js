const IResultAckService = require("@/infra/equipmentcommunication/ack/interface/IResultAckService");

class AstmResultAckServiceV1 extends IResultAckService {
    generateAck(message, config) {
        // ACK para ASTM - 0x06
        return Buffer.from([0x06]);
    }
}


module.exports = AstmResultAckServiceV1;