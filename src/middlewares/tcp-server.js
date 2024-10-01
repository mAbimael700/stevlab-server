const net = require("node:net");
const fs = require("node:fs");
const path = require("node:path");
const { parseResultsData } = require("../lib/parsers/HL7-type1/parser");
const { format } = require("date-fns");
const { DATADIR } = require("../constants/DATADIR");
const { verifyDevices } = require("../lib/verify-devices");

//Se crea el servidor TPC/IP y escribimos los eventos a escuchar
function initializeTcpServer({ PORT, webSocketServer }) {
  const tcpServer = net.createServer(
    {
      allowHalfOpen: true, // Permite conexiones a medias en caso de ser necesario
      keepAlive: true, // Envia paquetes keep-alive cada 30 segundos
      keepAliveInitialDelay: 3000,
    },
    (socket) => {
      const currentRemoteAddress = socket.remoteAddress.split(":")[3];
      console.log(
        "Conexión TCP/IP entrante de: " +
          currentRemoteAddress +
          ":" +
          socket.remotePort
      );

      // Establece un timeout más largo para la conexión
      socket.setTimeout(60000); // 60 segundos

      socket.on("data", (data) => {
        
        // Verifica que exista el equipo registrado
        //const existeEquipo = verifyDevices(currentRemoteAddress);

        try {
          // Guarda los datos en un archivo
          const results = parseResultsData(data.toString());
          const jsonResults = JSON.stringify(results);

          // Emite a través de Socket.io
          webSocketServer.emit("labResultsMessage", { data: jsonResults });
          console.log("Evento 'labResultsMessage' emitido con datos");

          //Formatea la fecha para guardarla en el nombre del archivo json
          const timestamp = format(new Date(), "ddMMyyyy-HHmmss");
          const filePath = path.join(DATADIR, `resultados-${timestamp}.json`);


          //Guarda el archivo en la ruta especificada con el JSON parseado
          fs.appendFileSync(filePath, jsonResults);
          console.log(`Datos guardados en ${filePath}`);
        } catch (error) {
          console.error("Error al procesar datos:", error);
        }
      });

      socket.on("end", () => {
        console.log("Conexión cerrada");
      });

      // Manejador de errores
      socket.on("error", (err) => {
        if (err.code === "ECONNRESET") {
          console.warn(
            `Conexión reseteada por el cliente ${currentRemoteAddress}:${socket.remotePort}`
          );
        } else {
          console.error("Error en la conexión:", err);
          socket.destroy(); // Cerrar la conexión en caso de error
        }
      });

      socket.on("close", () => {
        console.log("Conexión cerrada, intentando reconectar...");
        reconnect();
      });
    }
  );

  function reconnect() {
    setTimeout(createConnection, 5000); // Intentar reconectar después de 5 segundos
  }

  tcpServer.listen(PORT, () => {
    console.log(`Servidor TPC/IP escuchando en el puerto ${PORT}`);
  });
}

module.exports = {
  initializeTcpServer,
};
