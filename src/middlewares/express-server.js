const http = require("node:http");
const express = require("express");
const morgan = require('morgan')
const { filesRouter } = require("../api/routes/files.routes");

// Se inicializa el servidor Express (http) para conexiones WebSocket
const app = express();
const expressServer = http.createServer(app);

function initializeExpressServer(PORT) {
  app.use(morgan('dev'))
  app.use("/api/files", filesRouter);
  
  expressServer.listen(PORT, () => {
    console.log(`Servidor WebSocket escuchando en el puerto ${PORT}`);
  });

  

  return expressServer;
}

module.exports = {
  initializeExpressServer,
};
