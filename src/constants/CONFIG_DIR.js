const path = require("node:path");
const CONFIG_DIR = path.join(process.cwd(), "config");

const DEVICES_DIR = path.join(CONFIG_DIR, "devices.json");

module.exports = {
  CONFIG_DIR,
  DEVICES_DIR
};
