const http = require("node:http");
const path = require("node:path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { filesRouter } = require("../../api/routes/files.routes");
const { devicesRouter } = require("../../api/routes/devices.routes");
const { messageRouter } = require("../../api/routes/messages.routes");

// Se inicializa el servidor Express (http) para conexiones WebSocket
const app = express();

const expressServer = http.createServer(app);

//Función para inicializar el servidor express
function initializeExpressServer(PORT) {
  //Middleware logger de las peticiones http al servidor
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(cors());
  app.disable('x-powered-by');
  //Rutas de la api

  //Endpoint para consultar los archivos del servidor local
  app.use("/api/files", filesRouter);
  app.use("/api/areas", devicesRouter);
  app.use("/api/devices", devicesRouter);
  app.use("/api/message", messageRouter);

  // Sirve los archivos estáticos desde la carpeta build
  app.use(express.static(path.join(process.cwd(), "dist")));

  // Captura todas las rutas y redirige a index.html para que React Router DOM maneje el enrutamiento
  app.get("*", (req, res) => {
    res.sendFile(path.join(process.cwd(), "dist", "index.html"));
  });

  expressServer.listen(PORT, () => {
    console.log(
      `Servidor WebSocket escuchando en el puerto http://localhost:${PORT}/`
    );
  });

  return expressServer;
}

module.exports = {
  initializeExpressServer,
};
