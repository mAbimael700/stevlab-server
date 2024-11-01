const {
  parseResultsData: type1,
} = require("../../lib/parsers/HL7-type1/parser");
const { parser: type4 } = require("../../lib/parsers/HL7-type4/parser");

const { parseMessage: cm200Parser } = require("../../lib/parsers/CM200/parser");
const { parseData: A15Parser } = require("../../lib/parsers/A15/parser");

const { CONTROLAB } = require("../dictionaries/CONTROLAB");

function type4Fn(dictionary, CHAR_DELIMITER = "\x1C") {
  return {
    parser: (hl7Message) => {
      return type4(hl7Message, dictionary);
    },
    CHAR_DELIMITER,
  };
}

const equipmentsParsers = {
  FUJIFILM_DRICHEM_NX600: type1,
  CONTROLAB: type4Fn(CONTROLAB),
  CM200: { parser: cm200Parser, CHAR_DELIMITER: "" },
  A15: { parser: A15Parser, CHAR_DELIMITER: "" },
  MINDRAY_BC20S: type4Fn(),
  SWELAB: type4Fn(),
  DYMIND: type4Fn(),
};

module.exports = {
  equipmentsParsers,
};
