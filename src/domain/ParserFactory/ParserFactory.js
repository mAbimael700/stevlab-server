const Hl7ClinicalDataModel = require("../ClinicalDataModel/Hl7ClinicalDataModel");
const IClinicalDataModel = require("../ClinicalDataModel/IClinicalDataModel");


class ParserFactory {
  constructor() {
    /**
     * @type {Map<string, IClinicalDataModel> }
     */
    this.parsers = new Map();
    this.registerCoreParsers();
  }

  registerCoreParsers() {
    this.register("HL7", Hl7ClinicalDataModel);
    /* this.register("XML", XmlBufferParser);
    this.register("SPRU120", SpU120BufferParser);
    this.register("A15", A15BufferParser);
    this.register("FJT1", FulljifilmType1BufferParser);
    this.register("CM200", Cm200BufferParser);
    this.register("Vitros350", Vitros350BufferParser); */
  }

  register(type, ParserClass) {
    if (typeof ParserClass !== "function") {
      throw new Error("El parser debe ser una clase o función constructora");
    }
    this.parsers.set(type, ParserClass);
    return this; // Permite method chaining
  }

  get supportedParsers() {
    return Array.from(this.parsers.keys());
  }

  /**
   *
   * @param {string} type
   * @returns {IClinicalDataModel}
   */
  create(type) {
    if (!this.parsers.has(type)) {
      throw new Error(`Tipo de parser no soportado: ${type}`);
    }
    return new (this.parsers.get(type))();
  }
}

const parserFactory = new ParserFactory();

module.exports = parserFactory;
