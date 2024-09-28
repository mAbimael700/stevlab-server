const net = require("node:net");
const fs = require("node:fs");
const path = require("node:path");
const { parseResultsData } = require("../lib/parsers/HL7-type1/parser");
const { format } = require("date-fns");
const { DATADIR } = require("../constants/DATADIR");

//Se crea el servidor TPC/IP y escribimos los eventos a escuchar

function initializeTcpServer({ PORT, webSocketServer }) {
  const tcpServer = net.createServer((socket) => {
    console.log(
      "Conexión TCP/IP entrante de: " +
        socket.remoteAddress +
        ":" +
        socket.remotePort
    );

    socket.on("data", (data) => {
      try {
        // Guarda los datos en un archivo
        const results = parseResultsData(data.toString());
        const jsonResults = JSON.stringify(results);

        // Emite a través de Socket.io
        webSocketServer.emit("labResultsMessage", { data: jsonResults });
        console.log("Evento 'labResultsMessage' emitido con datos");

        const timestamp = format(new Date(), "ddMMyyyy-HHmmss");
        const filePath = path.join(DATADIR, `resultados-${timestamp}.json`);
        const filePath2 = path.join(DATADIR, `resultados-${timestamp}.txt`);

        fs.appendFileSync(filePath, jsonResults);
        fs.appendFileSync(filePath2, data.toString());

        console.log(`Datos guardados en ${DATADIR}`);
      } catch (error) {
        console.error("Error al procesar datos:", error);
      }
    });

    socket.on("end", () => {
      console.log("Conexión cerrada");
    });
  });

  tcpServer.listen(PORT, () => {
    console.log(`Servidor TPC/IP escuchando en el puerto ${PORT}`);
  });
}

module.exports = {
  initializeTcpServer,
};
