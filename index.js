const net = require("node:net");
const http = require("node:http")
const { Server } = require("socket.io")
const fs = require("node:fs");
const express = require("express")

const { parseResultsData } = require("./src/lib/parsers/HL7-type3/parser");
const { format } = require("date-fns")

// Definición de los puertos de cada servidor
const TPC_PORT = process.env.PORT || 3000;
const SOCKET_PORT = process.env.SOCKET_PORT || 4000;

// Se inicializa el servidor Express (http) para conexiones WebSocket
const app = express()
const expressServer = http.createServer(app);

//  Se inicializa el servidor WebSocket con Socket.io
const io = new Server(expressServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})

// Configuración de Socket.io
io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado:', socket.id);

  // Manejar eventos desde el cliente
  socket.on('labResultsMessage', (data) => {
    console.log('Mensaje recibido del cliente:', data);
    // Puedes procesar y enviar respuestas aquí
    socket.emit('labResultsMessage', data);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id);
  });

  socket.emit("saludo", "Este es un saludos")

  
});

expressServer.listen(SOCKET_PORT, () => {
  console.log(`Servidor WebSocket escuchando en el puerto ${SOCKET_PORT}`);
})

// Creamos el servidor TPC/IP y escribimos los eventos a escuchar
const tcpServer = net.createServer((socket) => {
  console.log("Conexión TCP/IP entrante de: " + socket.remoteAddress + ":" + socket.remotePort);

  socket.on("data", (data) => {

    console.log("Datos recibidos:", data.toString());

    // Guarda los datos en un archivo
    const results = parseResultsData(data.toString())
    const jsonResults = JSON.stringify(results)

    // Emitir a través de Socket.io
    io.emit("labResultsMessage", { data: jsonResults });
    console.log("Evento 'labResultsMessage' emitido con datos");

    fs.appendFileSync(`./data/resultados-${format(
      new Date(),
      "ddMMyyyy-HHmmss")}.json`, jsonResults);
  });

  socket.on("end", () => {
    console.log("Conexión cerrada");
  });
});

tcpServer.listen(TPC_PORT, () => {
  console.log(`Servidor TPC/IP escuchando en el puerto ${TPC_PORT}`);
});
