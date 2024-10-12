const fs = require("node:fs");
const path = require("node:path");

const { initializeTcpServer } = require("./src/middlewares/tcp-server");
const { initializeExpressServer } = require("./src/middlewares/express-server");
const { initializeWebSocket } = require("./src/middlewares/websocket-server");
const { DATADIR } = require("./src/constants/DATADIR");
const { CONFIG_DIR } = require("./src/constants/CONFIG_DIR");
const {
  configurationManager,
} = require("./src/middlewares/configuration-manager");
const { LOG_DIR } = require("./src/constants/LOG_DIR");
const { ErrorHandler } = require("./src/middlewares/error-handler");

// Definición de los puertos de cada servidor
const TPC_PORT = process.env.PORT || 3000;
const SOCKET_PORT = process.env.SOCKET_PORT || 4000;

//Manejador de errores no esperados
ErrorHandler();

// Asegura de que la carpeta de data exista dónde se ejecuta el programa
if (!fs.existsSync(DATADIR)) {
  fs.mkdirSync(DATADIR);
}

// Verifica si la carpeta de configuración existe, si no, créala
if (!fs.existsSync(CONFIG_DIR)) {
  console.error(
    `La carpeta de configuración no existe: ${CONFIG_DIR}. Creando la carpeta...`
  );
  fs.mkdirSync(CONFIG_DIR, { recursive: true }); // Crea la carpeta, incluyendo cualquier carpeta padre si es necesario
}

// Verifica si el directorio de logs existe, si no, lo crea
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

// Configuración de equipos
configurationManager();

// Inicialización de Servidores
const expressServer = initializeExpressServer(SOCKET_PORT);
const io = initializeWebSocket(expressServer);
const tpcServer = initializeTcpServer({ PORT: TPC_PORT, webSocketServer: io });
