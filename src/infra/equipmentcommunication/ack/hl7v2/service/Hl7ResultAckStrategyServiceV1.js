const IResultAckService = require("@/infra/equipmentcommunication/ack/interface/IResultAckService");
const Hl7ParserFactory = require("@/infra/bufferresultparser/hl7v2/Hl7ParserFactory");

class Hl7ResultAckStrategyServiceV1 extends IResultAckService {

    constructor() {
        super();
    }

    generateAck(message, config) {
        return Hl7ParserFactory.generateAckFromMessage(message, config)
    }
}

module.exports = Hl7ResultAckStrategyServiceV1;