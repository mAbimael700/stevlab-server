const path = require("node:path");
const fs = require("node:fs");
const { format } = require("date-fns");
const { FILE_UPLOADS_DIR } = require("../constants/CONFIG_DIR");
const {
  getPIDSegmentDataPosition,
  getOBRSegmentDataPosition,
} = require("./parsers/HL7-type4/messageSpliterFn");

/**
 *
 * @param {string} content
 * @returns {string} Ruta del archivo guardado
 */
function saveFile(content) {
  const timestamp = format(new Date(), "dd-MM-yyyy");

  try {
    const person = getPIDSegmentDataPosition(content, 5);
    const uniqueId = getOBRSegmentDataPosition(content, 3);
    
    // Limpiar el nombre de persona si existe, o usar 'undefined'
    const cleanPerson = person ? person.replaceAll("^", "") : 'undefined'
    
    const filePath = path.join(
      FILE_UPLOADS_DIR,
      `envi${timestamp}_fol_${uniqueId}_${cleanPerson}.txt`
    );

    fs.writeFileSync(filePath, content);
    return filePath;
  } catch (error) {
    console.error("Ocurrió un error al guardar el archivo:", error.message);
  }
}

module.exports = {
  saveFile,
};
