const path = require("node:path");
const { currentWorkDirectory } = require("./CONSTANTS");

const LOG_DIR = path.join(currentWorkDirectory, "logs")

module.exports = { LOG_DIR }