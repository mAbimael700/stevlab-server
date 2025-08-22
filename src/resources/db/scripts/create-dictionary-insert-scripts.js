const fs = require("node:fs");
const path = require("node:path");

const { CM200 } = require("../../../constants/dictionaries/CM200.js");
const { A15 } = require("../../../constants/dictionaries/A15.js");
const { CONTROLAB } = require("../../../constants/dictionaries/CONTROLAB.js");
const { DYMIND } = require("../../../constants/dictionaries/DYMIND.js");
const { FULLJIFILM_NX600_DICTIONARIO } = require("../../../constants/dictionaries/FULJIFILM_NX600.js");
const { HEMATOLOGY } = require("../../../constants/dictionaries/HEMATOLOGY.js");
const { MINDRAY_BS120 } = require("../../../constants/dictionaries/MINDRAY_BS120.js");

const dictionaries = {
    CM200,
    A15,
    CONTROLAB,
    DYMIND,
    FULLJIFILM_NX600_DICTIONARIO,
    HEMATOLOGY,
    MINDRAY_BS120,
};

// Map para asociar cada valor con un ID simulado
const valueToId = new Map();
let currentId = 1;

// Paso 1: Recorrer todos los valores de los diccionarios
for (const dict of Object.values(dictionaries)) {
    for (const value of Object.values(dict)) {
        if (!value || !value.trim()) continue;
        if (!valueToId.has(value)) {
            valueToId.set(value, currentId++);
        }
    }
}

// Paso 2: Generar SQL para system_parameters
const systemParametersOutput = [];
systemParametersOutput.push("-- Insert system_parameters");
systemParametersOutput.push('INSERT INTO "system_parameters" ("id", "value") VALUES');
systemParametersOutput.push(
    [...valueToId.entries()]
        .map(([value, id]) => `  (${id}, '${value}')`)
        .join(",\n") + ";"
);

// Paso 3: Generar SQL para parameter_dictionaries agrupado por origen
const parameterDictionariesOutput = [];
parameterDictionariesOutput.push("-- Insert parameter_dictionaries (agrupado por origen)");

for (const [dictName, dict] of Object.entries(dictionaries)) {
    const rows = [];
    for (const [key, value] of Object.entries(dict)) {
        if (!value || !value.trim()) continue;
        const id = valueToId.get(value);
        rows.push(`  ('${key}', ${id})`);
    }
    if (rows.length > 0) {
        parameterDictionariesOutput.push(`-- ${dictName}`);
        parameterDictionariesOutput.push('INSERT INTO "parameter_dictionaries" ("parameter_description", "system_parameter_id") VALUES');
        parameterDictionariesOutput.push(rows.join(",\n") + ";\n");
    }
}

// Paso 4: Escribir ambos archivos
const basePath = path.join(__dirname);
const systemParametersPath = path.join(basePath, "system_parameters")
const parameterDictionariesPath = path.join(basePath, "parameter_dictionaries")
fs.writeFileSync(
    path.join(systemParametersPath, "insert_system_parameters.sql"),
    systemParametersOutput.join("\n\n"),
    "utf-8"
);

fs.writeFileSync(
    path.join(parameterDictionariesPath, "insert_parameter_dictionaries.sql"),
    parameterDictionariesOutput.join("\n\n"),
    "utf-8"
);

console.log("✅ Archivos SQL generados:");
console.log(`- ${path.join(systemParametersPath, "insert_system_parameters.sql")}`);
console.log(`- ${path.join(parameterDictionariesPath, "insert_parameter_dictionaries.sql")}`);
