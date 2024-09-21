const net = require("net");
const fs = require("fs");
const socket = require("socket.io");

const PORT = process.env.PORT || 3000;

const io = socket("ws://localhost:5173");

const server = net.createServer((socket) => {
  console.log("Conexión entrante");

  socket.on("data", (data) => {
    console.log("Datos recibidos:", data.toString());

    io.emit("messageLab", {
      results: parsedData,
    });

    // Guarda los datos en un archivo
    fs.appendFileSync("datos_recibidos.txt", data);
  });

  socket.on("end", () => {
    console.log("Conexión cerrada");
  });
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
