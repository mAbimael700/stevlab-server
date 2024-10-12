const path = require("node:path");
const os = require("node:os")

const LOG_DIR = path.join(process.cwd(), "logs")

module.exports = { LOG_DIR }