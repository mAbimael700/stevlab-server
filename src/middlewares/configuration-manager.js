const fs = require("node:fs");
const path = require("node:path");
const { CONFIG_DIR, DEVICES_DIR } = require("../constants/CONFIG_DIR");

// Asegura de que la carpeta de config exista dónde se ejecuta el programa

function configurationManager() {
  // Asegura de que las rutas sean absolutas
  const configPath = path.resolve(CONFIG_DIR);
  const devicesPath = path.resolve(DEVICES_DIR);

  // Verifica si la carpeta de configuración existe, si no, créala
  if (!fs.existsSync(CONFIG_DIR)) {
    console.error(
      `La carpeta de configuración no existe: ${CONFIG_DIR}. Creando la carpeta...`
    );
    fs.mkdirSync(CONFIG_DIR, { recursive: true }); // Crea la carpeta, incluyendo cualquier carpeta padre si es necesario
  }

  // Verifica si el archivo devices.json existe, si no, créalo con un array vacío
  if (!fs.existsSync(devicesPath)) {
    fs.writeFileSync(
      devicesPath,
      JSON.stringify(
        {
          devices: [],
        },
        null,
        2
      ) // El tercer argumento es para tener el JSON con formato legible
    );
  }
}

module.exports = {
  configurationManager,
};
