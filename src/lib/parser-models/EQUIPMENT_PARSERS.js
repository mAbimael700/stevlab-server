const {
  parser: type1
} = require("../parsers/HL7-type1/parser");
const { parser: type4 } = require("../parsers/HL7-type4/parser");
const { parseMessage: cm200Parser } = require("../parsers/CM200/parser");
const { parseData: A15Parser } = require("../parsers/A15/parser");
const {
  parser: VITROS350Parser,
} = require("../parsers/Vitros350/parser");
const { parser: XMLParser } = require("../parsers/XML/parser");
const { CONTROLAB } = require("../../constants/dictionaries/CONTROLAB");
const { DYMIND } = require("../../constants/dictionaries/DYMIND");
const { MINDRAY_BS120 } = require("../../constants/dictionaries/MINDRAY_BS120");

const CHAR_DELIMITER = "\\x1C";

// Función genérica para parsers que usan type4
const createType4Parser =
  (dictionary, options = {}) =>
  (hl7Message) =>
    type4(hl7Message, dictionary, options);

// Configuración centralizada de parsers
const equipmentsParsers = {
  FUJIFILM_DRICHEM_NX600: { parser: type1, CHAR_DELIMITER: "\x03" },
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
    parser: VITROS350Parser,
    CHAR_DELIMITER: "!\\d{3}h\\d{4}[A-F0-9]{2}",
  },
  SWELAB_PLUS: {
    parser: XMLParser,
    CHAR_DELIMITER: "<!--:End:(Msg|Chksum):\\d+(:\\d+)*:-->",
  },
};

module.exports = { equipmentsParsers };
