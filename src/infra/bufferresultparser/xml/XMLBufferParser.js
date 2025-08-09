const { XMLParser } = require("fast-xml-parser");

class XMLBufferParser {
  static options = {
    ignoreAttributes: false,
    allowBooleanAttributes: true,
    parseTagValue: false, // No parsear valores para evitar errores
    trimValues: true,
  };

  constructor(data) {
    this.parser = new XMLParser(XMLBufferParser.options);
    this.sampleData = this.parse(data).sample;
    this.segments = this.getSegments();
  }

  parse(data) {
    try {
      return this.parser.parse(data);
    } catch (error) {
      throw new Error("Parse error in XML: " + error.message, error);
    }
  }

  getSampleResume() {
    return {
      information: this.getSampleInformation(),
      results: this.getSampleResults(),
    };
  }

  getSampleResults() {
    const sampleResults = this.findSegmentByDescription("smpresults");

    if (sampleResults) {
      return sampleResults.parameterValues.map((smpr) => ({
        name: smpr.n,
        value: smpr.v,
        high: smpr.h,
        low: smpr.l,
      }));
    }
  }

  getSampleInformation() {
    const sampleInformation = this.findSegmentByDescription("smpinfo");

    if (sampleInformation) {
      const { parameterValues } = sampleInformation;

      const date = new Date(this.findParameterValue(parameterValues, "DATE"));
      const sampleId = this.findParameterValue(parameterValues, "ID");
      const patientName = this.findParameterValue(parameterValues, "ID2");

      return { sampleId, date, patientName };
    }
  }

  findParameterValue(parameterValue, name) {
    return parameterValue.find((smpi) => smpi.n === name)?.v;
  }

  findSegmentByDescription(description) {
    return this.segments.find((s) => s.description === description);
  }

  getSegments() {
    const segments = Object.entries(this.sampleData);

    return segments.map(([description, parameterValue]) => {
      let values = parameterValue;

      if (parameterValue.p) {
        values = parameterValue.p;
      }

      return {
        description,
        parameterValues: values,
      };
    });
  }
}

module.exports = XMLBufferParser;
