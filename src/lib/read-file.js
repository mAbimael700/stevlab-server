const fs = require("node:fs/promises");
const path = require("node:path")

async function readFile(...filePath) {
  const pathToRead = path.join(...filePath)
  console.log(pathToRead);
  
  try {
    // Verificamos si el archivo existe
    await fs.access(pathToRead);
    // Leemos el contenido del archivo
    const fileContent = await fs.readFile(pathToRead);

    return fileContent.toString("utf8");
  } catch (error) {
    throw new Error("No existe el fichero con la ruta: " + pathToRead);
  }
}


async function deleteFile(filePath) {
  try {
    // Verificamos si el archivo existe
    await fs.access(filePath);

    // Leemos el contenido del archivo
    await fs.rm(filePath);
  } catch (error) {
    throw new Error("No existe el fichero con la ruta: " + filePath);
  }
}

module.exports = { readFile, deleteFile };