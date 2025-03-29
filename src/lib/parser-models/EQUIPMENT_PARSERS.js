const { parser: type1 } = require("../parsers/HL7-type1/parser");
const { parser: type4 } = require("../parsers/HL7-type4/parser");
const { parseMessage: cm200Parser } = require("../parsers/CM200/parser");
const { parseData: A15Parser } = require("../parsers/A15/parser");
const { parser: VITROS350Parser } = require("../parsers/Vitros350/parser");
const { parser: XMLParser } = require("../parsers/XML/parser");
const { CONTROLAB } = require("../../constants/dictionaries/CONTROLAB");
const { HEMATOLOGY } = require("../../constants/dictionaries/HEMATOLOGY");
const { MINDRAY_BS120 } = require("../../constants/dictionaries/MINDRAY_BS120");
const FINECARE = {}
const { generateHl7Ack } = require("../parsers/HL7-type4/messageSpliterFn");
const { generateAck } = require("../parsers/XML/ack-function");

const CHAR_DELIMITER = "\\x1C";

// Función genérica para parsers que usan type4
const createType4Parser =
  (dictionary, options = {}) =>
  (hl7Message) =>
    type4(hl7Message, dictionary, options);

function parsingDataHL7(
  dictionary = HEMATOLOGY,
  options = {},
  sendsBySingleParameter = false
) {
  return {
    parser: createType4Parser(dictionary, options),
    CHAR_DELIMITER,
    sendsBySingleParameter,
    ackMessageFunction: generateHl7Ack,
  };
}

// Configuración centralizada de parsers
const equipmentsParsers = {
  FUJIFILM_DRICHEM_NX600: { parser: type1, CHAR_DELIMITER: "\x03" },
  CONTROLAB: parsingDataHL7(CONTROLAB),
  FINECARE_PLUS: parsingDataHL7(FINECARE),
  CM200: { parser: cm200Parser, CHAR_DELIMITER: "" },
  A15: { parser: A15Parser, CHAR_DELIMITER: "" },
  MINDRAY_BC20S: parsingDataHL7(),
  SWELAB: parsingDataHL7(),
  DYMIND: parsingDataHL7(),
  MINDRAY_BS120: parsingDataHL7(
    MINDRAY_BS120,
    {
      positions: { OBR: { folio: 2 } },
    },
    true
  ),
  VITROS_350: {
    parser: VITROS350Parser,
    CHAR_DELIMITER: "!\\d{3}h\\d{4}[A-F0-9]{2}",
  },
  SWELAB_PLUS: {
    parser: XMLParser,
    CHAR_DELIMITER: "<!--:End:Chksum:\\d+(:\\d+)*:-->",
    ackMessageFunction: generateAck
  },
};

module.exports = { equipmentsParsers };
