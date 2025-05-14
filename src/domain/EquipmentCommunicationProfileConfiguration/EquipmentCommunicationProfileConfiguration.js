const {
  SpU120BufferParser,
} = require("../../lib/parsers/SpU120BufferParser/SpU120BufferParser");

class EquipmentCommunicationProfileConfiguration {
  constructor(communicationProfileConfiguration) {
    this.name = communicationProfileConfiguration.name;
    this.type = communicationProfileConfiguration.type;
    this.checksumRegex = communicationProfileConfiguration.checksumRegex;
    this.options = communicationProfileConfiguration.options ?? {};
    this.parser = null;
    this.setupParser();
  }

  setupParser() {
    switch (this.type) {
      case "HL7":
        this.parser = Hl7BufferParser;
        break;

      case "XML":
        this.parser = XmlBufferParser;
        break;

      case "SPRU120":
        this.parser = SpU120BufferParser;
        break;

      case "A15":
        this.parser = A15BufferParser;
        break;

      case "FJT1":
        this.parser = FulljifilmType1BufferParser;
        break;

      case "CM200":
        this.parser = Cm200BufferParser;
        break;

      case "Vitros350":
        this.parser = Vitros350BufferParser;
        break;
      default:
        throw new Error("No existe el tipo de parser");
    }
  }
}

module.exports = {
  EquipmentCommunicationProfileConfiguration,
};
