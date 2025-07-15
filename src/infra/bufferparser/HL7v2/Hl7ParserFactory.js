const Hl7BufferParser = require("./HL7BufferParser");
const Hl7Message = require("./Hl7Message");

class Hl7ParserFactory {
    static parse(hl7Data) {
        const bufferParser = new Hl7BufferParser(hl7Data);
        return new Hl7Message(bufferParser);
    }

    static generateAck(messageId, emisor, receptor, status) {
        return Hl7BufferParser.generateHl7Ack(messageId, emisor, receptor, status);
    }
}

module.exports = Hl7ParserFactory