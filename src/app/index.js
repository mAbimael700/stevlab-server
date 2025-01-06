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
const { run } = require("../db/db-connection.js");
const { ENV_DEPLOY } = require("../constants/CONFIG_DIR.js");
const { PRODUCTION_MODE } = require("../constants/CONSTANTS.js");
const { Server } = require("../services/server.js");

// Definición de los puertos de cada servidor


class ServerFactory {

  static create(mode) {
    const TPC_PORT = process.env.PORT ?? 3000;
    const SOCKET_PORT = process.env.SOCKET_PORT ?? 4000;

    switch (mode) {
      case "electron":
        return () => {
          const expressServer = initializeExpressServer(SOCKET_PORT);
          initializeWebSocket(expressServer);
          initializeTcpServer({ PORT: TPC_PORT });
        }
      case "local":
        return () => {
          const expressServer = initializeExpressServer(SOCKET_PORT);
          initializeWebSocket(expressServer);
          initializeTcpServer({ PORT: TPC_PORT });
        };
      default:
        throw new Error("Modo de producción no soportado.");
    }
  }
}


// Carga las variables del archivo .env
function lisServerApplication() {

  ErrorHandler();
  configurationManager();
  Server.getInitialServerConfiguration()
  const serverInitializer = ServerFactory.create(PRODUCTION_MODE ?? "local");
  serverInitializer();

  initializeEquipmentManager();
}

module.exports = lisServerApplication;
