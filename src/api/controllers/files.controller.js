const fs = require("node:fs");
const path = require("node:path");
const util = require("node:util");
const { DATADIR } = require("../../constants/DATADIR");

class FilesController {
  static async getFiles(req, res) {
    // Convertir fs.readdir y fs.readFile a funciones basadas en promesas
    const readdir = util.promisify(fs.readdir);
    const readFile = util.promisify(fs.readFile);

    try {
      // Leer el directorio donde se encuentran los datos
      const files = await readdir(DATADIR.toString());

      // Obtiene las rutas completas de los archivos
      const filePaths = files.map((file) => path.join(DATADIR, file));

      // Filtrar los archivos .json
      const jsonFiles = filePaths.filter(
        (file) => path.extname(file) === ".json"
      );

      // Leer el contenido de los archivos JSON
      const jsonPromises = jsonFiles.map((jsonFile) => {
        const basenameSplited = path.basename(jsonFile).split("-");
        const day = parseInt(basenameSplited[1].substring(0, 2));
        const month = parseInt(basenameSplited[1].substring(2, 4)) - 1; // Meses en Date comienzan desde 0
        const year = parseInt(basenameSplited[1].substring(4));

        const hour = parseInt(basenameSplited[2].substring(0, 2));
        const minutes = parseInt(basenameSplited[2].substring(2, 4));
        const seconds = parseInt(basenameSplited[2].substring(4));

        return readFile(jsonFile, "utf-8")
          .then((data) => ({
            fecha_transferencia: new Date(
              year,
              month,
              day,
              hour,
              minutes,
              seconds
            ),
            resultados: JSON.parse(data),
          }))
          .catch((error) => {
            console.error(
              `Error parsing JSON in file ${jsonFile}:`,
              error.message
            );
            return null; // Si falla el parseo, retornamos null
          });
      });

      // Esperar a que todas las promesas de lectura se resuelvan
      const jsonData = await Promise.all(jsonPromises);

      // Filtrar los resultados nulos (errores en el parseo)
      const validData = jsonData.filter((data) => data !== null);

      // Enviar la respuesta con los datos leídos
      return res.status(200).json({ status: 200, data: validData });
    } catch (err) {
      console.error("Error:", err);
      return res
        .status(500)
        .json({ status: 500, error: "Error reading JSON files" });
    }
  }
}

module.exports = {
  FilesController,
};
