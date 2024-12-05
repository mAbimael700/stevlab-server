const { initializeTcpServer } = require("../middlewares/servers/tcp-server.js");
const {
  initializeExpressServer,
} = require("../middlewares/servers/express-server.js");
const {
  initializeWebSocket,
} = require("../middlewares/servers/websocket-server.js");
// Importar el archivo que registra los eventos
require("../middlewares/equipment/equipment-handler.js");

const {
  configurationManager,
} = require("../middlewares/configuration/configuration-manager.js");
const { ErrorHandler } = require("../middlewares/error-handler.js");
const {
  initializeEquipmentManager,
} = require("../middlewares/equipment/equiment-manager.js");

// Definición de los puertos de cada servidor
const TPC_PORT = process.env.PORT || 3000;
const SOCKET_PORT = process.env.SOCKET_PORT || 4000;

function lisServerApplication() {
  //Manejador de errores no esperados
  ErrorHandler();

  // Configuración de equipos
  configurationManager();

  // Inicialización de Servidores
  //const expressServer = initializeExpressServer(SOCKET_PORT);
  //initializeWebSocket(expressServer);
  initializeTcpServer({ PORT: TPC_PORT });
  initializeEquipmentManager();
}

module.exports = lisServerApplication;
