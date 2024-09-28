const http = require("node:http");
const express = require("express");
const morgan = require('morgan')
const { filesRouter } = require("../api/routes/files.routes");

// Se inicializa el servidor Express (http) para conexiones WebSocket
const app = express();
const expressServer = http.createServer(app);


//Función para inicializar el servidor express
function initializeExpressServer(PORT) {
  //Middleware logger de las peticiones http al servidor
  app.use(morgan('dev'))

  //Rutas de la api

  //Endpoint para consultar los archivos del servidor local
  app.use("/api/files", filesRouter);
  
  expressServer.listen(PORT, () => {
    console.log(`Servidor WebSocket escuchando en el puerto ${PORT}`);
  });

  

  return expressServer;
}

module.exports = {
  initializeExpressServer,
};
