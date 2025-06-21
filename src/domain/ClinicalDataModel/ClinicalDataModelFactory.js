const FujifilmClinicalDataModel = require("./FujifilmClinicalDataModel");
const Hl7ClinicalDataModel = require("./Hl7ClinicalDataModel");
const IClinicalDataModel = require("./IClinicalDataModel");
const XmlClinicalDataModel = require("./XmlClinicalDataModel");

class ClinicalDataModelFactory {
  constructor() {
    /**
     * @type {Map<string, IClinicalDataModel> }
     */
    this.parsers = new Map();
    this.registerCoreParsers();
  }

  registerCoreParsers() {
    this.register("HL7", Hl7ClinicalDataModel);
    this.register("XML", XmlClinicalDataModel);
    this.register("FJT1", FujifilmClinicalDataModel);
    /*this.register("SPRU120", SpU120BufferParser);
    this.register("A15", A15BufferParser);
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
    return this.parsers.get(type);
  }
}

const clinicalDataModelFactory = new ClinicalDataModelFactory();

module.exports = clinicalDataModelFactory;
