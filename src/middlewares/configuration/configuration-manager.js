const fs = require("node:fs");
const path = require("node:path");
const {
  CONFIG_DIR,
  DEVICES_DIR,
  FILE_UPLOADS_DIR,
  STATES,
  SERVER,
  FILEPATH_DIR,
} = require("../../constants/CONFIG_DIR");
const { DATADIR } = require("../../constants/DATADIR");
const { LOG_DIR } = require("../../constants/LOG_DIR");

const directorios = [
  LOG_DIR,
  DATADIR,
  CONFIG_DIR,
  STATES,
  FILE_UPLOADS_DIR,
  SERVER,
];

function ensureDirectoryExists(directoryPath) {
  const absolutePath = path.resolve(directoryPath);
  if (!fs.existsSync(absolutePath)) {
    console.info(`Creando directorio: ${absolutePath}`);
    fs.mkdirSync(absolutePath, { recursive: true });
  }
}

function ensureFileExists(filePath, defaultContent = {}) {
  const absolutePath = path.resolve(filePath);
  if (!fs.existsSync(absolutePath)) {
    console.info(`Creando archivo: ${absolutePath}`);
    fs.writeFileSync(absolutePath, JSON.stringify(defaultContent, null, 2));
  }
}

function configurationManager() {
  // Crear carpetas necesarias
  directorios.forEach(ensureDirectoryExists);

  // Crear archivo devices.json si no existe
  ensureFileExists(DEVICES_DIR, { devices: [] });
  ensureFileExists(FILEPATH_DIR, { filePath: "" });
  ensureFileExists(path.join(CONFIG_DIR, "server.json"), {});
}

module.exports = {
  configurationManager,
};
