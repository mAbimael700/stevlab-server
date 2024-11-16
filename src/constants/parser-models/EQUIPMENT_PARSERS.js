const {
  parseResultsData: type1,
} = require("../../lib/parsers/HL7-type1/parser");
const { parser: type4 } = require("../../lib/parsers/HL7-type4/parser");

const { parseMessage: cm200Parser } = require("../../lib/parsers/CM200/parser");
const { parseData: A15Parser } = require("../../lib/parsers/A15/parser");

const { CONTROLAB } = require("../dictionaries/CONTROLAB");
const { DYMIND } = require("../dictionaries/DYMIND");
const { MINDRAY_BS120 } = require("../dictionaries/MINDRAY_BS120");

function type4Fn(dictionary, CHAR_DELIMITER = "\x1C") {
  return {
    parser: (hl7Message) => {
      return type4(hl7Message, dictionary);
    },
    CHAR_DELIMITER,
  };
}

// Diccionario de funciones por modelo del equipo

const CHAR_DELIMITER = "\x1C";

const equipmentsParsers = {
  FUJIFILM_DRICHEM_NX600: type1,
  CONTROLAB: {
    parser: (hl7Message) => {
      return type4(hl7Message, CONTROLAB);
    },
    CHAR_DELIMITER,
  },
  CM200: { parser: cm200Parser, CHAR_DELIMITER: "" },
  A15: { parser: A15Parser, CHAR_DELIMITER: "" },
  MINDRAY_BC20S: {
    parser: (hl7Message) => {
      return type4(hl7Message);
    },
    CHAR_DELIMITER,
  },
  SWELAB: {
    parser: (hl7Message) => {
      return type4(hl7Message, DYMIND);
    },
    CHAR_DELIMITER,
  },
  DYMIND: {
    parser: (hl7Message) => {
      return type4(hl7Message, DYMIND);
    },
    CHAR_DELIMITER,
  },
  MINDRAY_BS120: {
    parser: (hl7Message) => {
      return type4(hl7Message, MINDRAY_BS120);
    },
    CHAR_DELIMITER,
  },
};

module.exports = {
  equipmentsParsers,
};
