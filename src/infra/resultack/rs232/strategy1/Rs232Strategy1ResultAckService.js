const IResultAckService = require("@/infra/resultack/interface/IResultAckService");

class Rs232Strategy1ResultAckService extends IResultAckService {

    generateAck(message, config) {
        return String.fromCharCode(6);
    }
}

module.exports = Rs232Strategy1ResultAckService;