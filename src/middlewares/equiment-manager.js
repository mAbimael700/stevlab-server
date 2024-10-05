const {
  parseResultsData: parserFujifilmNx600,
} = require("../lib/parsers/HL7-type1/parser");
const {
  parseResultsData: parserControlLab,
} = require("../lib/parsers/HL7-type4/parser");

let equipmentsOnServer = [];

const equipmentsParsers = {
  "FUJIFILM_DRICHEM_NX600": parserFujifilmNx600,
  "CONTROLAB": parserControlLab,
};


module.exports = {
    equipmentsOnServer,
    equipmentsParsers
}