const fs = require("node:fs");
const { FILE_UPLOADS_DIR } = require("../../../constants/CONFIG_DIR");
const path = require("node:path");
const crypto = require("node:crypto");
const { format } = require("date-fns");

function handleBuffer(data, parsingData) {
  const { parser, CHAR_DELIMITER } = parsingData;

  const timestamp = format(new Date(), "ddMMyyyy-HHmmss-SSS");
  const uniqueId = crypto.randomBytes(3).toString("hex"); // Crea un identificador único de 3 bytes (6 caracteres hexadecimales)
  const filePath = path.join(
    FILE_UPLOADS_DIR,
    `resultados-${timestamp}-${uniqueId}`
  );

  if (!parser || !CHAR_DELIMITER) {
    throw new Error("Parser o delimitador no definidos para el equipo");
  }

  const delimiterIndex = data.indexOf(CHAR_DELIMITER);
  if (delimiterIndex !== -1) {
    const completeMessage = data.slice(0, delimiterIndex + 1);
    const consumedBytes = Buffer.byteLength(completeMessage, "utf-8");

    fs.appendFileSync(filePath.concat(`.txt`), completeMessage);
    console.log("Mensaje completo recibido: \n", completeMessage);

    const results = parser(completeMessage);
    if (!results) {
      throw new Error("El parser devolvió resultados inválidos");
    }

    return { results, consumedBytes };
  }

}

function clearProcessedBuffer(bufferList, consumedBytes) {
  bufferList.consume(consumedBytes);
}

module.exports = {
  handleBuffer,
  clearProcessedBuffer,
};
