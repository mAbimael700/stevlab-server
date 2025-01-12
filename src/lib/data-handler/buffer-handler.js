const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { format } = require("date-fns");
const { FILE_UPLOADS_DIR } = require("../../constants/CONFIG_DIR");


function handleBuffer(data, parsingData) {
  const { parser, CHAR_DELIMITER } = parsingData;

  const timestamp = format(new Date(), "ddMMyyyy-HHmmss-SSS");
  const uniqueId = crypto.randomBytes(3).toString("hex");
  const filePath = path.join(
    FILE_UPLOADS_DIR,
    `resultados-${timestamp}-${uniqueId}`
  );

  if (!parser || !CHAR_DELIMITER) {
    throw new Error("Parser o delimitador no definidos para el equipo");
  }

  // Crear la expresión regular
  const delimiterRegex = new RegExp(CHAR_DELIMITER, "g");

  // Buscar el índice del delimitador
  const delimiterIndex = data.search(delimiterRegex);

  if (delimiterIndex !== -1) {
    const match = data.match(delimiterRegex);
    const matchLength = match ? match[0].length : 0;

    const completeMessage = data.slice(0, delimiterIndex + matchLength);
    const consumedBytes = Buffer.byteLength(completeMessage, "utf-8");

    fs.appendFileSync(filePath.concat(`.txt`), completeMessage);
    console.log("Mensaje completo recibido: \n", filePath.concat(`.txt`));

    const results = parser(completeMessage);
  
    if (!results) {
      console.error("El parser devolvió resultados inválidos");
      return
    }

    return { results, consumedBytes };
  } else {
    //console.log("No se encontró el delimitador en los datos.");
  }
}


function clearProcessedBuffer(bufferList, consumedBytes) {
  bufferList.consume(consumedBytes);
}

module.exports = {
  handleBuffer,
  clearProcessedBuffer,
};
