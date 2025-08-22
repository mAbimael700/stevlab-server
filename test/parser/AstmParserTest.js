
// Tu data ASTM
const ASTMParser = require("../../src/infra/bufferresultparser/astm/ASTMParser");
const AstmClinicalDataModel = require("../../src/domain/clinicaldatamodel/model/AstmClinicalDataModel");
const astmData = `
H|\\^&|||ARCHITECT^9.55^F3454100244^H1P1O1R1C1Q1L1|||||||P|1|20250808133200
P|1||||GOMEZ^MARCELINA|||F
O|1|1012515377|1012515377^A035^3|^^^1101^Na-C^STANDARD^P|R||||||||||||||||||||F
R|1|^^^1101^Na-C^STANDARD^P^18604UN24^05562^^F|140|mmol/L|136 TO 145|EXP||R||ADMIN^ADMIN||20250808132646|c402830
R|2|^^^1103^Cl-C^STANDARD^P^18604UN24^05562^^F|109|mmol/L|98 TO 107|EXP^HIGH||R||ADMIN^ADMIN||20250808132646|c402830
L|1
`;

const parser = new ASTMParser(astmData);

// Obtener resumen completo
const resume = parser.getSampleResume();
console.log(resume);

// Obtener solo resultados
const results = parser.getSampleResults();
console.log(results);

// Obtener información del paciente
const patientInfo = AstmClinicalDataModel.transform();
console.log(patientInfo);