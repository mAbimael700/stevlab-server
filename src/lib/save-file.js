const path = require('node:path')
const fs = require("node:fs");
const crypto = require("node:crypto");
const { format } = require("date-fns");
const { FILE_UPLOADS_DIR } = require("../constants/CONFIG_DIR");

/**
 *
 * @param {string} content
 * @returns {string} Ruta del archivo guardado
 */
function saveFile(content) {
  const timestamp = format(new Date(), "ddMMyyyy-HHmmss-SSS");
  const uniqueId = crypto.randomBytes(3).toString("hex");
  const filePath = path.join(
    FILE_UPLOADS_DIR,
    `resultados-${timestamp}-${uniqueId}.txt`
  );
  fs.appendFileSync(filePath, content);
  return filePath;
}

module.exports = {
  saveFile,
};
