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


class ServerFactory {



  static create(mode) {
    const TPC_PORT = process.env.PORT ?? 3000;
    const SOCKET_PORT = process.env.SOCKET_PORT ?? 5000;

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

  process.loadEnvFile();
  ErrorHandler();
  configurationManager();

  const serverInitializer = ServerFactory.create(process.env.PRODUCTION_MODE);
  serverInitializer();

  initializeEquipmentManager();
}

module.exports = lisServerApplication;
