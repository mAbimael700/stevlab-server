const { CM200 } = require("../../src/constants/dictionaries/CM200.js")
const { A15 } = require("../../src/constants/dictionaries/A15.js")
const { CONTROLAB } = require("../../src/constants/dictionaries/CONTROLAB.js")
const { DYMIND } = require("../../src/constants/dictionaries/DYMIND.js")
const { FULLJIFILM_NX600_DICTIONARIO } = require("../../src/constants/dictionaries/FULJIFILM_NX600.js")
const { HEMATOLOGY } = require("../../src/constants/dictionaries/HEMATOLOGY.js")
const { MINDRAY_BS120 } = require("../../src/constants/dictionaries/MINDRAY_BS120.js")
const fs = require("node:fs")
const path = require("node:path")

const dictionaries = [
    CM200,
    A15,
    CONTROLAB,
    DYMIND,
    FULLJIFILM_NX600_DICTIONARIO,
    HEMATOLOGY,
    MINDRAY_BS120
]

// Crear un Set con todos los valores únicos
const uniqueValues = new Set(
    dictionaries.flatMap(dict => Object.values(dict))
);

// Si necesitas usarlo como array
const uniqueValuesArray = [...uniqueValues];

fs.appendFileSync(path.join(__dirname, "keys.txt"), uniqueValuesArray.filter(v => v?.trim()).map(v => `"${v}"`).join(", \n"))