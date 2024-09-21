function parseData(buffer) {
  // Divide el texto en bloques separados por '' y '' (inicio y fin de mensajes)
  let rawData = buffer
    .split(/[\x02\x03]/)
    .filter((section) => section.trim() !== "");

  // Procesa cada bloque
  return rawData.map((section) => {
    let records = section.split(""); // Separar por delimitador de registros
    return records.map((record) => {
      let fields = record.split(","); // Separar cada campo por comas
      return fields;
    });
  });
}

function parseResults(parsedData) {
  const results = [];

  parsedData.forEach((section) => {
    console.log("Sección: " + section);

    section.forEach((line) => {
      console.log("Linea: " + line);
      if (line[0] === "R") {
        // Parsear un bloque de resultados (líneas que comienzan con 'R')
        const result = {
          tipo: line[0].trim(),
          estado: line[1].trim(),
          fecha: line[2].trim(),
          hora: line[3].trim(),
          folio: line[4].trim(),
          id: line[5].trim(),
          parametros: [],
        };

        // Extraer los parámetros de laboratorio y sus resultados
        for (let i = 12; i < line.length; i += 7) {
          if (line[i]) {
            const parametro = {
              nombre: line[i].trim(),
              valor: line[i + 2].trim(),
              unidad: line[i + 3].trim(),
              rango_min: line[i + 4].trim(),
              rango_max: line[i + 5].trim(),
              indicador: line[i + 6]?.trim() || "=",
            };
            result.parametros.push(parametro);
          }
        }
        results.push(result);
      }
    });
  });

  return results;
}

const buffer = `R,NORMAL ,16-09-2024,09:00,5 ,6479 , ,01,9,999,01,03,Na-PS ,=,142 mEq/l ,01,136 ,149 , ,K-PS ,=,4.6 mEq/l ,01,3.8 ,5.0 , ,Cl-PS ,=,105 mEq/l ,01,98 ,106 , S,NORMAL ,16-09-2024,14:05,1 ,6484 , ,01AR,NORMAL ,16-09-2024,14:05,1 ,6484 , ,00,9,999,01,03,Na-PS ,=,147 mEq/l ,01,136 ,145 ,H ,K-PS ,=,6.3 mEq/l ,01,3.5 ,5.1 ,H ,Cl-PS ,=,113 mEq/l ,01,98 ,107 ,H S,NORMAL ,16-09-2024,14:12,2 ,729 , ,01VR,NORMAL ,15-09-2024,11:24,22 ,6467 , ,01,9,999,01,16,LIP-PS ,=,177 U/l ,01,23 ,300 , ,AMYL-PS ,=,120 U/l ,01,30 ,110 ,H ,LDH-PS ,=,332 U/l ,01,106 ,211 ,H ,ALP-PS ,=,57 U/l ,01,32 ,111 , ,GGT-PS ,=,81 U/l ,01,16 ,73 ,H ,GOT-PS ,=,65 U/l ,01,8 ,38 ,H ,GPT-PS ,=,22 U/l ,01,4 ,44 , ,ALP-PS ,=,62 U/l ,01,32 ,111 , ,TP-PS ,=,7.4 g/dl ,01,6.7 ,8.3 , ,DBIL-PS ,=,8.7 mg/dl ,01,0.1 ,0.4 ,H ,TBIL-PS ,=,12.5 mg/dl ,01,0.1 ,1.2 ,H ,GLU-PS ,=,81 mg/dl ,01,70 ,110 , ,UREA-PS ,=,120.7 mg/dl ,01,0.0 ,0.0 , ,Na-PS ,=,128 mEq/l ,01,136 ,149 ,L ,K-PS ,=,3.1 mEq/l ,01,3.8 ,5.0 ,L ,Cl-PS ,=,82 mEq/l ,01,98 ,106 ,L 0`;

let parsedData = parseData(buffer);
console.log(parsedData);

let resultados = parseResults(parsedData);
//console.log(JSON.stringify(resultados));
