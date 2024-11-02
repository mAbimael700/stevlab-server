const fs = require("node:fs");
const path = require("node:path");
const util = require("node:util");
const { DATADIR } = require("../../constants/DATADIR");

class FilesController {
  static async getFiles(req, res) {
    const readdir = util.promisify(fs.readdir);
    const readFile = util.promisify(fs.readFile);
  
    try {
      const files = await readdir(DATADIR.toString());
      const filePaths = files.map((file) => path.join(DATADIR, file));
      const jsonFiles = filePaths.filter((file) => path.extname(file) === ".json");
  
      const jsonPromises = jsonFiles.map((jsonFile) => {
        const basenameSplited = path.basename(jsonFile).split("-");
        const day = parseInt(basenameSplited[1].substring(0, 2));
        const month = parseInt(basenameSplited[1].substring(2, 4)) - 1;
        const year = parseInt(basenameSplited[1].substring(4));
  
        const hour = parseInt(basenameSplited[2].substring(0, 2));
        const minutes = parseInt(basenameSplited[2].substring(2, 4));
        const seconds = parseInt(basenameSplited[2].substring(4));
  
        return readFile(jsonFile, "utf-8")
          .then((data) => ({
            fecha_transferencia: new Date(year, month, day, hour, minutes, seconds),
            resultados: JSON.parse(data),
          }))
          .catch((error) => {
            console.error(`Error parsing JSON in file ${jsonFile}:`, error.message);
            return null;
          });
      });
  
      const jsonData = await Promise.all(jsonPromises);
      const validData = jsonData.filter((data) => data !== null);
  
      // Ordenar los datos por fecha de transferencia más reciente
      validData.sort((a, b) => b.fecha_transferencia - a.fecha_transferencia);
  
      return res.status(200).json({ status: 200, data: validData });
    } catch (err) {
      console.error("Error:", err);
      return res.status(500).json({ status: 500, error: "Error reading JSON files" });
    }
  }
  
}

module.exports = {
  FilesController,
};
