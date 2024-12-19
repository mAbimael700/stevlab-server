const { parseResultsData: type1 } = require("../../lib/parsers/HL7-type1/parser");
const { parser: type4 } = require("../../lib/parsers/HL7-type4/parser");
const { parseMessage: cm200Parser } = require("../../lib/parsers/CM200/parser");
const { parseData: A15Parser } = require("../../lib/parsers/A15/parser");
const { CONTROLAB } = require("../dictionaries/CONTROLAB");
const { DYMIND } = require("../dictionaries/DYMIND");
const { MINDRAY_BS120 } = require("../dictionaries/MINDRAY_BS120");

const CHAR_DELIMITER = "\\x1C";

// Función genérica para parsers que usan type4
const createType4Parser = (dictionary, options = {}) => (hl7Message) =>
  type4(hl7Message, dictionary, options);

// Configuración centralizada de parsers
const equipmentsParsers = {
  FUJIFILM_DRICHEM_NX600: { parser: type1, CHAR_DELIMITER: "" },
  CONTROLAB: { parser: createType4Parser(CONTROLAB), CHAR_DELIMITER },
  CM200: { parser: cm200Parser, CHAR_DELIMITER: "" },
  A15: { parser: A15Parser, CHAR_DELIMITER: "" },
  MINDRAY_BC20S: { parser: createType4Parser(DYMIND), CHAR_DELIMITER },
  SWELAB: { parser: createType4Parser(DYMIND), CHAR_DELIMITER },
  DYMIND: { parser: createType4Parser(DYMIND), CHAR_DELIMITER },
  MINDRAY_BS120: {
    parser: createType4Parser(MINDRAY_BS120, {
      positions: { OBR: { folio: 2 } },
    }),
    CHAR_DELIMITER,
    sendsBySingleParameter: true,
  },

  VITROS_350: {
    parser: ()=>{},
    CHAR_DELIMITER: "!\\d{3}h[^\\n\\r]*"
  }
};

module.exports = { equipmentsParsers };
