const path = require("node:path");

let currentWorkDirectory = '';
let ENV_DEPLOY = '';

if (process.env.PRODUCTION_MODE == "development") {
  currentWorkDirectory = process.cwd();
  ENV_DEPLOY = path.join(currentWorkDirectory, ".env");
} else {
  currentWorkDirectory = process.resourcesPath;
  ENV_DEPLOY = path.join(currentWorkDirectory, "app", ".env");
}

process.loadEnvFile(ENV_DEPLOY);

const { DB_URI, DB_PASSWORD_MONGO: DB_PASSWORD, PRODUCTION_MODE } = process.env;

module.exports = {
  currentWorkDirectory,
  DB_URI,
  DB_PASSWORD,
  PRODUCTION_MODE,
};
