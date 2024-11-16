const FULLJIFILM_NX600_DICTIONARIO = {
  Ca: "CA01", // Calcio
  K: "GAAR11", // Potasio
  Na: "GAAR10", // Sodio
  Mg: "MGSE", // Magnesio
  Cl: "CL01", // Cloro
  ALP: "FALC", // Fosfatasa Alcalina
  AMYL: "AMI0", // Amilasa
  CHE: "COL2", // Colinesterasa
  GGT: "GGT0", // Gamma-Glutamil Transferasa
  "GOT/AST": "QSTGO", // Aspartato Aminotransferasa
  "GPT/ALT": "QSTGP", // Alanina Aminotransferasa
  LDH: "DHL0", // Lactato Deshidrogenasa
  LIP: "LIPA", // Lipasa
  ALB: "ALB1", // Albúmina
  BUN: "NURE", // Nitrógeno Ureico en Sangre
  CRE: "QSCRENZ", // Creatinina
  DBIL: "BILD", // Bilirrubina Directa
  GLU: "QSGLU", // Glucosa
  "HDL-C": "RELCH", // Colesterol HDL
  IP: "FOOR", // Fósforo Inorgánico
  TBIL: "BILT", // Bilirrubina Total
  TCHO: "QSCOLE", // Colesterol Total
  TCO2: "BIC1", // Bicarbonato Total
  TG: "TRIG", // Triglicéridos
  TP: "PRO01", // Proteínas Totales
  UA: "QSAU", // Ácido Úrico
  UREA: "QSURE"
};

module.exports = {
  FULLJIFILM_NX600_DICTIONARIO,
};


function getElementoKey({ diccionario, elemento }) {
  return diccionario[elemento] || null; // Retorna null si no se encuentra la clave
}
