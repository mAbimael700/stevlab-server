const path = require("node:path");

const currentWorkDirectory = process.cwd()
const ENV_DEPLOY = path.join(currentWorkDirectory, ".env")
process.loadEnvFile(ENV_DEPLOY);

const {
    DB_URI,
    DB_PASSWORD_MONGO: DB_PASSWORD,
    PRODUCTION_MODE
} = process.env

module.exports = {
    currentWorkDirectory,
    DB_URI,
    DB_PASSWORD,
    PRODUCTION_MODE
}