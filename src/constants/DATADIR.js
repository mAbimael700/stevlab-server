const path = require("node:path");
const { currentWorkDirectory } = require("./CONSTANTS");
const DATADIR = path.join(currentWorkDirectory, "data");

module.exports = {
  DATADIR,
};
