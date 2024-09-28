const { Router } = require("express");
const fs = require("node:fs");
const path = require("node:path");
const util = require("node:util");

const filesRouter = Router();
const { DATADIR } = require("../../constants/DATADIR");
const { format, getDay } = require("date-fns");

// Convertir fs.readdir y fs.readFile a funciones basadas en promesas
const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);

filesRouter.get("/", async (req, res) => {
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

      console.log(basenameSplited[1]);

      const day = basenameSplited[1].substring(0, 2);
      const month = basenameSplited[1].substring(2, 4);
      const year = basenameSplited[1].substring(4, basenameSplited[1].length);

      console.log(`${year}-${month}-${day}`);

      return readFile(jsonFile, "utf-8").then((data) => ({
        fecha_transferencia: new Date(year, month - 1, day),
        resultados: JSON.parse(data),
      }));
    });

    // Esperar a que todas las promesas de lectura se resuelvan
    const jsonData = await Promise.all(jsonPromises);

    // Enviar la respuesta con los datos leídos
    return res.status(200).json(jsonData);
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ error: "Error reading JSON files" });
  }
});

module.exports = {
  filesRouter,
};
