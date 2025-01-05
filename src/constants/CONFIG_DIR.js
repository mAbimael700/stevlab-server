const path = require("node:path");
const { currentWorkDirectory } = require("./CONSTANTS");
const CONFIG_DIR = path.join(currentWorkDirectory, "config");
const DEVICES_DIR = path.join(CONFIG_DIR, "devices.json");
const FTP_PREVIOUS_STATE_DIR = path.join(CONFIG_DIR, "ftp_path_status.json");
const FILE_UPLOADS_DIR = path.join(currentWorkDirectory, "file_uploads");
const STATES = path.join(CONFIG_DIR, "states");
const SERVER = path.join(CONFIG_DIR, "server");


module.exports = {
  CONFIG_DIR,
  DEVICES_DIR,
  FILE_UPLOADS_DIR,
  FTP_PREVIOUS_STATE_DIR,
  STATES,
  SERVER
};
