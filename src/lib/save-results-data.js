const path = require("node:path");
const crypto = require("node:crypto");
const { format } = require("date-fns");
const fs = require("fs");
const { DATADIR } = require("../constants/DATADIR");

function saveResultsToLocalData(parsedData) {
  //Formatea la fecha para guardarla en el nombre del archivo json

  // Formatea la fecha para guardarla en el nombre del archivo de texto
  const timestamp = format(new Date(), "ddMMyyyy-HHmmss-SSS");
  const uniqueId = crypto.randomBytes(3).toString("hex"); // Crea un identificador único de 3 bytes (6 caracteres hexadecimales)
  const filePath = path.join(DATADIR, `resultados-${timestamp}-${uniqueId}`);

  parsedData.forEach((element) => {
    const jsonResults = JSON.stringify([element], null, 2);

    //Guarda el archivo en la ruta especificada con el JSON parseado
    if (element) {
      fs.appendFileSync(filePath.concat(`-${element.folio}.json`), jsonResults);

      console.log(
        `Datos parseados guardados en la ruta: ${filePath.concat(
          `-${element.folio}.json`
        )}`
      );
    }
  });
}

module.exports = {
  saveResultsToLocalData,
};
