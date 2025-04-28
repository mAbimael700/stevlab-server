const path = require("node:path");
const fs = require("node:fs");
const { currentWorkDirectory } = require("./CONSTANTS");
const CONFIG_DIR = path.join(currentWorkDirectory, "config");
const DEVICES_DIR = path.join(CONFIG_DIR, "devices.json");
const FILEPATH_DIR = path.join(CONFIG_DIR, "files.txt");
const FTP_PREVIOUS_STATE_DIR = path.join(CONFIG_DIR, "ftp_path_status.json");
const FILE_UPLOADS_DIR =
  loadFileDirectory() || path.join(currentWorkDirectory, "file_uploads");
const STATES = path.join(CONFIG_DIR, "states");
const SERVER = path.join(CONFIG_DIR, "server");

function loadFileDirectory() {
  try {
    const filePath = fs.readFileSync(FILEPATH_DIR).toString("utf-8");
    return filePath ? path.join(filePath) : null;
  } catch (error) {
    console.error("Ocurrió un error al leer el archivo de directorio:", error);
  }
}
module.exports = {
  CONFIG_DIR,
  DEVICES_DIR,
  FILEPATH_DIR,
  FILE_UPLOADS_DIR,
  FTP_PREVIOUS_STATE_DIR,
  STATES,
  SERVER,
};
