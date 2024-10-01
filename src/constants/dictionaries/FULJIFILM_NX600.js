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
  "GOT/AST": "RTGOTGP", // Aspartato Aminotransferasa
  "GPT/ALT": "PFHCAN6", // Alanina Aminotransferasa
  LDH: "DHL0", // Lactato Deshidrogenasa
  LIP: "LIPA", // Lipasa
  ALB: "ALB1", // Albúmina
  BUN: "NURE", // Nitrógeno Ureico en Sangre
  CRE: "CREA", // Creatinina
  DBIL: "BILD", // Bilirrubina Directa
  GLU: "GLUC", // Glucosa
  "HDL-C": "RELCH", // Colesterol HDL
  IP: "FOOR", // Fósforo Inorgánico
  TBIL: "BILT", // Bilirrubina Total
  TCHO: "COLE", // Colesterol Total
  TCO2: "BIC1", // Bicarbonato Total
  TG: "TRIG", // Triglicéridos
  TP: "PRO01", // Proteínas Totales
  UA: "AU00", // Ácido Úrico
};

module.exports = {
  FULLJIFILM_NX600_DICTIONARIO,
};


function getElementoKey({ diccionario, elemento }) {
  return diccionario[elemento] || null; // Retorna null si no se encuentra la clave
}
