const path = require("node:path");
const CONFIG_DIR = path.join(process.cwd(), "config");

const DEVICES_DIR = path.join(CONFIG_DIR, "devices.json");
const FTP_PREVIOUS_STATE_DIR = path.join(CONFIG_DIR, "ftp_path_status.json");

const FILE_UPLOADS_DIR = path.join(process.cwd(), "file_uploads");

const STATES = path.join(CONFIG_DIR, "states");

module.exports = {
  CONFIG_DIR,
  DEVICES_DIR,
  FILE_UPLOADS_DIR,
  FTP_PREVIOUS_STATE_DIR,
  STATES,
};
