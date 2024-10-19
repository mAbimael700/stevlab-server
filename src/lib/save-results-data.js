const { format } = require("date-fns");
const path = require("node:path");
const fs = require("fs")
const { DATADIR } = require("../constants/DATADIR");

function saveResultsToLocalData(parsedData) {
  //Formatea la fecha para guardarla en el nombre del archivo json
  const timestamp = format(new Date(), "ddMMyyyy-HHmmss");
  const filePath = path.join(DATADIR, `resultados-${timestamp}`);

  const jsonResults = JSON.stringify(parsedData, null, 2);



  //Guarda el archivo en la ruta especificada con el JSON parseado
  if (parsedData[0]) {
    fs.appendFileSync(
      filePath.concat(`-${parsedData[0].folio}.json`),
      jsonResults
    );

    console.log(
      `Datos parseados guardados en la ruta: ${filePath.concat(
        `-${parsedData[0].folio}.json`
      )}`
    );
  }
}

module.exports = {
  saveResultsToLocalData
}
