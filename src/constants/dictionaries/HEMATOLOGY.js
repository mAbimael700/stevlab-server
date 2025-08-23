const HEMATOLOGY = {
  WBC: "BHLEU", // LEUCOCITOS
  "LYM%": "BHLINF2", // LINFOCITOS PORCENTUAL
  "GRAN%": "BHNS2", // NEUTRÓFILOS SEGMENTADOS %
  "MID%": "BHMON2", // MONOCITOS PORCENTUAL%
  "LYM#": "BHLINF", // LINFOCITOS ABSOLUTO
  "GRAN#": "BHNS", // NEUTRÓFILOS SEGMENTADOS
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
  "P-LCC": "BH0LCC", // Coeficiente de plaquetas de células grandes
  RDWR: "RDWR1", // Ancho de eritrocitos
  LR: "BHLR", // Linfocitos
  MR: "BHMR", // Monocitos
  GR: "BHGR", // Neutrofilos segmentados
  BHBAS1: "BAS#",
  BHEOS1: "EOS#",
  BHAL1: "AL#",
  BHAL2: "AL%",
  BHIG1: "IG#",
  BHIG2: "IG%",
  BHNU1: "NU#",
  BHNU2: "NU%",
  BHMON1: "MON#",
  "MON%": "BHMON2",
};

module.exports = {
  HEMATOLOGY,
};
