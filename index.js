const { initializeTcpServer } = require("./src/middlewares/servers/tcp-server");
const { initializeExpressServer } = require("./src/middlewares/servers/express-server");
const { initializeWebSocket } = require("./src/middlewares/servers/websocket-server.js");
// Importar el archivo que registra los eventos
require('./src/middlewares/equipment-handler.js');

const {
  configurationManager,
} = require("./src/middlewares/configuration/configuration-manager.js");
const { ErrorHandler } = require("./src/middlewares/error-handler");
const { initializeEquipmentManager } = require("./src/middlewares/equiment-manager");

// Definición de los puertos de cada servidor
const TPC_PORT = process.env.PORT || 3000;
const SOCKET_PORT = process.env.SOCKET_PORT || 4000;

//Manejador de errores no esperados
ErrorHandler();

// Configuración de equipos
configurationManager();

// Inicialización de Servidores
const expressServer = initializeExpressServer(SOCKET_PORT);
initializeWebSocket(expressServer);
initializeTcpServer({ PORT: TPC_PORT });
initializeEquipmentManager();

