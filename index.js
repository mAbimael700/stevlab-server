const fs = require("node:fs");
const path = require("node:path");

const { initializeTcpServer } = require("./src/middlewares/tcp-server");

const { initializeExpressServer } = require("./src/middlewares/express-server");
const { initializeWebSocket } = require("./src/middlewares/websocket-server");
const {DATADIR} = require('./src/constants/DATADIR')

// Definición de los puertos de cada servidor
const TPC_PORT = process.env.PORT || 3000;
const SOCKET_PORT = process.env.SOCKET_PORT || 4000;

// Asegura de que la carpeta de data exista dónde se ejecuta el programa
if (!fs.existsSync(DATADIR)) {
  fs.mkdirSync(DATADIR);
}

// Inicialización de Servidores
const expressServer = initializeExpressServer(SOCKET_PORT);
const io = initializeWebSocket(expressServer);
const tpcServer = initializeTcpServer({ PORT: TPC_PORT, webSocketServer: io });
