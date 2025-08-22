// Funciona con CUALQUIER tipo de datos ASTM:
require('module-alias/register');
// 1. Mensaje completo
const AstmClinicalDataModel = require("../../src/domain/clinicaldatamodel/model/AstmClinicalDataModel");
const completeMessage = `
H|\\^&|||ARCHITECT^9.55|||||||P|1|20250808133200
P|1||||GOMEZ^MARCELINA|||F
R|1|^^^1101^Na-C|140|mmol/L|136 TO 145|||R||ADMIN||20250808132646
L|1
`;

// 2. Línea individual
const singleLine = "R|1|^^^1101^Na-C|140|mmol/L|136 TO 145|||R||ADMIN||20250808132646";

// 3. Múltiples líneas sin header/footer
const multipleResults = `
R|10|^^^CBC^^^MCV|96.54|||||F||Admin|20250808130713
R|11|^^^CBC^^^MCH|32.23|||||F||Admin|20250808130713
R|12|^^^CBC^^^MCHC|33.39|||||F||Admin|20250808130713
`;

// 4. Mensaje parcial (solo algunos elementos)
const partialMessage = `
P|1||||GOMEZ^MARCELINA|||F
R|1|^^^1101^Na-C|140|mmol/L|136 TO 145|||R||ADMIN||20250808132646
`;

// TODOS funcionan con el mismo método:
const result1 = AstmClinicalDataModel.transform(completeMessage);
const result2 = AstmClinicalDataModel.transform(singleLine);
const result3 = AstmClinicalDataModel.transform(multipleResults);
const result4 = AstmClinicalDataModel.transform(partialMessage);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);