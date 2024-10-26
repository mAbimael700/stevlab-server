const { initializeTcpServer } = require("./src/middlewares/tcp-server");
const { initializeExpressServer } = require("./src/middlewares/express-server");
const { initializeWebSocket } = require("./src/middlewares/websocket-server");
const {
  configurationManager,
} = require("./src/middlewares/configuration-manager");
const { ErrorHandler } = require("./src/middlewares/error-handler");

// Definición de los puertos de cada servidor
const TPC_PORT = process.env.PORT || 3000;
const SOCKET_PORT = process.env.SOCKET_PORT || 4000;

//Manejador de errores no esperados
ErrorHandler();

// Configuración de equipos
configurationManager();

// Inicialización de Servidores
const expressServer = initializeExpressServer(SOCKET_PORT);
const io = initializeWebSocket(expressServer);
const tpcServer = initializeTcpServer({ PORT: TPC_PORT });

