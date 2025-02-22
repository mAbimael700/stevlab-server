const { CONTROLAB } = require("../../constants/dictionaries/CONTROLAB");
const { HEMATOLOGY } = require("../../constants/dictionaries/HEMATOLOGY");
const { MINDRAY_BS120 } = require("../../constants/dictionaries/MINDRAY_BS120");

const { parser: type1 } = require("../../lib/parsers/HL7-type1/parser");
const { parser: hl7Parser } = require("../../lib/parsers/HL7-type4/parser");
const { parser: type1 } = require("../../lib/parsers/HL7-type1/parser");
const { parseMessage: cm200Parser } = require("../../lib/parsers/CM200/parser");
const { parseData: A15Parser } = require("../../lib/parsers/A15/parser");
const { parser: VITROS350Parser } = require("../../lib/parsers/Vitros350/parser");
const { parser: XMLParser } = require("../../lib/parsers/XML/parser");
const { generateHl7Ack } = require("../../lib/parsers/HL7-type4/messageSpliterFn");
const { generateAck } = require("../../lib/parsers/XML/ack-function");

class EquipmentParsingConfiguration {
    constructor(name) {
        this.id = name
        this.parser = null
        this.checksumRegex = null
        this.sendsBySingleParameter = false
        this.ackMessageFunction = null
        this.options = {}
    }

    build() {
        switch (this.id) {
            case "FUJIFILM_DRICHEM_NX600":
                this.parser = type1;
                this.checksumRegex = "\x03";
                break;

            case "CONTROLAB":
                this._configureHl7Parser(CONTROLAB);
                break;

            case "CM200":
                this.parser = cm200Parser;
                this.checksumRegex = "";
                break;

            case "A15":
                this.parser = A15Parser;
                this.checksumRegex = "";
                break;

            case "MINDRAY_BC20S":
            case "SWELAB":
            case "DYMIND":
                this._configureHl7Parser(HEMATOLOGY);
                break;

            case "MINDRAY_BS120":
                this._configureHl7Parser(MINDRAY_BS120, {
                    positions: { OBR: { folio: 2 } },
                }, true);
                break;

            case "VITROS_350":
                this.parser = VITROS350Parser;
                this.checksumRegex = "!\\d{3}h\\d{4}[A-F0-9]{2}";
                break;

            case "SWELAB_PLUS":
                this.parser = XMLParser;
                this.checksumRegex = "<!--:End:Chksum:\\d+(:\\d+)*:-->";
                this.ackMessageFunction = generateAck;
                break;

            default:
                break;
        }
    }


    _configureHl7Parser(dictionary, options = {}, sendsBySingleParameter = false) {
        this.parser = this._createHl7Parser(dictionary, options);
        this.checksumRegex = "\\x1C";
        this.sendsBySingleParameter = sendsBySingleParameter;
        this.dictionary = dictionary;
        this.ackMessageFunction = generateHl7Ack;
        this.options = options;
    }

    _createHl7Parser(dictionary, options = {}) {
        return (hl7Message) => hl7Parser(hl7Message, dictionary, options);
    }
}


module.exports = {
    EquipmentParsingConfiguration
}