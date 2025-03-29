const HEMATOLOGY = {
  WBC: "BHLEU", // LEUCOCITOS
  "LYM%": "BHLINF2", // LINFOCITOS PORCENTUAL
  "GRAN%": "BHNS2", // NEUTROFILOS SEGMENTADOS %
  "MID%": "BHMON2", // MONOCITOS PORCENTUAL%
  "LYM#": "BHLINF", // LINFOCITOS ABSOLUTO
  "GRAN#": "BHNS", // NEUTROFILOS SEGMENTADOS
  "MID#": "BHMON", // MONOCITOS
  RBC: "BHERI", // ERITROCITOS
  HGB: "BHHEMO", // HEMOGLOBINA
  HCT: "BHHEMA", // HEMATROCITO
  MCV: "BHVCM", // VOLUMEN CORPUSCULAR MEDIO
  MCH: "BHHCM", // HCM
  MCHC: "BHCMB", // CMHB
  PLT: "BHPLT", // PLAQUETAS
  RDW: "BHRDW", // RDW
  MPV: "BHMPV", // MPV
  PDW: "BHPDW", // PDW
  PCT: "BHPCT", // PCT
  LCR: undefined, // LCR
  LN: undefined, // LN 
  "RDW-CV": "BHRDW1", // Variación de tamaño de globulos rojos  
  "RDW-SD": "RDW2", // Amplitud de distribución eritrositaria 
  "P-LCR": "BH0P", // Índice de cobertura de vida con relación de plaquetas
  "P-LCC": "BH0LCC" // Coeficiente de plaquetas de células grandes 
};

module.exports = {
  HEMATOLOGY,
};
