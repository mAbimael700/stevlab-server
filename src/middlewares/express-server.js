const http = require("node:http");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { filesRouter } = require("../api/routes/files.routes");
const { devicesRouter } = require("../api/routes/devices.routes");

// Se inicializa el servidor Express (http) para conexiones WebSocket
const app = express();

const expressServer = http.createServer(app);

//Función para inicializar el servidor express
function initializeExpressServer(PORT) {
  //Middleware logger de las peticiones http al servidor
  app.use(morgan("dev"));

  app.use(cors());
  //Rutas de la api

  //Endpoint para consultar los archivos del servidor local
  app.use("/api/files", filesRouter);
  app.use("/api/areas", devicesRouter);

  expressServer.listen(PORT, () => {
    console.log(`Servidor WebSocket escuchando en el puerto ${PORT}`);
  });

  return expressServer;
}

module.exports = {
  initializeExpressServer,
};
