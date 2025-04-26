class EquipmentParsingConfiguration {
  constructor(parserConfiguration) {
    this.type = parserConfiguration.type;
    this.checksumRegex = parserConfiguration.checksumRegex;
    this.options = parserConfiguration.options ?? {};
    this.parser = null;
    this.build();
  }

  build() {
    switch (this.type) {
      case "HL7":
        this.parser = Hl7BufferParser;
        break;

      case "XML":
        this.parser = XmlBufferParser;
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
  EquipmentParsingConfiguration,
};
