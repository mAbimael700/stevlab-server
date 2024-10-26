const fs = require("node:fs/promises");

async function readFile(filePath) {
  try {
    // Verificamos si el archivo existe
    await fs.access(filePath);

    // Leemos el contenido del archivo
    const fileContent = await fs.readFile(filePath);

    console.log(
      "Información del contenido en el archivo de la ruta: " + filePath
    );
    console.log(fileContent.toString("utf8"));

    return fileContent.toString("utf8");
  } catch (error) {
    throw new Error("No existe el fichero con la ruta: " + filePath);
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