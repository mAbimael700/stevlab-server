const path = require("node:path");

let currentWorkDirectory = "";
let ENV_DEPLOY = "";

if (process.env.PRODUCTION_MODE == "development") {
  currentWorkDirectory = process.cwd();
  ENV_DEPLOY = path.join(currentWorkDirectory, ".env");
} else {
  currentWorkDirectory = process.resourcesPath ?? process.cwd();
  ENV_DEPLOY = path.join(currentWorkDirectory, "app", ".env");
}

const PRODUCTION_MODE = "local";

module.exports = {
  currentWorkDirectory,
  PRODUCTION_MODE,
  ENV_DEPLOY,
};
