const { A15 } = require("../../../constants/dictionaries/A15");

const rawData = `
24030101000334 GLUCOSE SER 142 mg/dL 01/03/2024 14:15:29
24030101000334 UREA UV SER 29.6 mg/dL 01/03/2024 14:09:14
24030101000334 CREATININE SER 0.66 mg/dL 01/03/2024 14:09:59
24030101000334 CALCIUM ARSENAZO SER 8.83 mg/dL 01/03/2024 14:10:44
24030101000334 PHOSPHORUS SER 2.78 mg/dL 01/03/2024 14:10:59
24030101000334 MAGNESIUM SER 0.85 mg/dL 01/03/2024 14:11:14
24030101000334 BUN SER 13.85 mg/dL 01/03/2024 14:09:14
24030101000335 GLUCOSE SER 110 mg/dL 01/03/2024 21:17:22
24030101000335 UREA UV SER 31.9 mg/dL 01/03/2024 21:15:52
24030101000335 CREATININE SER 0.64 mg/dL 01/03/2024 21:16:07
24030101000335 URIC ACID SER 5.84 mg/dL 01/03/2024 21:14:07
24030101000335 CHOLESTEROL SER 190 mg/dL 01/03/2024 21:15:07
24030101000335 TRIGLYCERIDES SER 191 mg/dL 01/03/2024 21:15:22
24030101000335 g-GT SER 42 U/L 01/03/2024 21:16:07
24030101000335 ALT SER 26 U/L 01/03/2024 21:15:52
24030101000335 AST SER 22 U/L 01/03/2024 21:15:37
24030101000335 ALP-AMP SER 76 U/L 01/03/2024 21:15:37
24030101000335 BILI TOTAL DPD SER 0.56 mg/dL 01/03/2024 21:14:22
24030101000335 BILI DIRECT DPD SER 0.23 mg/dL 01/03/2024 21:16:07
24030101000335 PROTEIN TOTAL SER 7.39 g/dL 01/03/2024 21:13:51
24030101000335 ALBUMIN SER 4.32 g/dL 01/03/2024 21:15:52
24030101000335 AMYLASE DIRECT SER 85 U/L 01/03/2024 21:16:37
24030101000335 CALCIUM ARSENAZO SER 9.94 mg/dL 01/03/2024 21:15:37
24030101000335 PHOSPHORUS SER 2.79 mg/dL 01/03/2024 21:15:52
24030101000335 MAGNESIUM SER 2.53 mg/dL 01/03/2024 21:16:07
24030101000335 CHOL HDL DIRECT SER 41.3 mg/dL 01/03/2024 21:17:37
24030101000335 LDH SER 428 U/L 01/03/2024 21:16:22
24030101000335 IRON FERROZINE SER 42.9 ug/dL 01/03/2024 21:14:52
24030101000335 ALBUMIN/GLOBULIN RATIO SER 1 - 01/03/2024 21:15:52
24030101000335 BUN SER 14.89 mg/dL 01/03/2024 21:15:52
24030101000335 BUN/CREATININE SER 23 % 01/03/2024 21:16:07
24030101000335 GLOBULIN SER 3.1 g/L 01/03/2024 21:15:52
24030101000335 INDIRECT BILIRUB DPD SER 0.33 mg/dL 01/03/2024 21:16:07
24030101000335 LIPASA DGGR SER 54.95 U/L 01/03/2024 21:14:37
334 MAGNESIUM SER 1.75 mg/dL 01/03/2024 14:53:59
`;

function parseData(data) {
  const lines = data.trim().split("\n");
  const parsedResults = [];
  let currentEntry = null;
  let currentFolio = null;

  lines.forEach((line) => {
    const segments = line.split(/\s+/);
    const folio = segments[0];
    const nombre = [];
    let i = 1;

    // Obtener el nombre del parámetro hasta encontrar "SER"
    while (segments[i] && segments[i] !== "SER") {
      nombre.push(segments[i]);
      i++;
    }

    const parametroNombre = nombre.join(" ");
    const clave_sistema = A15[parametroNombre];
    const valor = segments[i + 1];
    const unidad_medida = segments[i + 2];
    const fecha = segments[i + 3];
    const hora = segments[i + 4];
    const clave = `${fecha.split("/").reverse().join("")}${hora.replace(
      /:/g,
      ""
    )}`;

    // Verificar si es un nuevo folio o la primera entrada
    if (folio !== currentFolio) {
      console.log(folio !== currentFolio);
      console.log("Folio: ", folio);
      console.log("Current Folio: ", currentFolio);

      // Guardar la entrada actual si existe
      if (currentEntry) parsedResults.push(currentEntry);

      // Crear nueva entrada para el nuevo folio
      currentEntry = {
        tipo: "R",
        id: folio,
        folio: folio,
        nombre_paciente: "",
        sexo: "O",
        parametros: [],
      };

      // Actualizar el folio actual
      currentFolio = folio;
    }

    // Añadir el parámetro a la entrada actual
    currentEntry.parametros.push({
      clave,
      nombre: parametroNombre,
      clave_sistema,
      valor,
      unidad_medida,
    });
  });

  // Añadir la última entrada si existe
  if (currentEntry) parsedResults.push(currentEntry);

  return parsedResults;
}

module.exports = {
  parseData,
};
