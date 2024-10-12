const net = require("node:net");
const fs = require("node:fs");

const path = require("node:path");
const { parseResultsData } = require("../lib/parsers/HL7-type1/parser");
const { format } = require("date-fns");
const { DATADIR } = require("../constants/DATADIR");
const { verifyDevices } = require("../lib/verify-devices");
const { getMacAddress } = require("../lib/getMacAddress");
const { validateParser } = require("../lib/validate-buffer");
const { validateResponse } = require("../lib/parsers/response-model");

//Se crea el servidor TPC/IP y escribimos los eventos a escuchar
function initializeTcpServer({ PORT, webSocketServer }) {
  const MAX_DATA_SIZE = 1e6; // 1MB máximo por paquete

  const tcpServer = net.createServer(
    {
      allowHalfOpen: true, // Permite conexiones a medias en caso de ser necesario
      keepAlive: true, // Envia paquetes keep-alive cada 30 segundos
      keepAliveInitialDelay: 3000,
    },
    (socket) => {
      // Obtenemos la ip del socket (equipo) en la conexión
      const currentRemoteIpAddress = socket.remoteAddress.split(":")[3];

      // Instanciamos la referencia de la dirección MAC del equipo
      let currentRemoteMacAddress;

      console.log(
        "Conexión TCP/IP entrante de: " +
        currentRemoteIpAddress +
        ":" +
        socket.remotePort
      );

      // Establece un timeout más largo para la conexión
      socket.setTimeout(60000); // 60 segundos

      socket.on("data", async (data) => {


        //Formatea la fecha para guardarla en el nombre del archivo json
        const timestamp = format(new Date(), "ddMMyyyy-HHmmss");
        const filePath = path.join(DATADIR, `resultados-${timestamp}.json`);
        const filePath2 = path.join(DATADIR, `resultados-${timestamp}.txt`)

        console.log("Mensaje entrante de: " + currentRemoteIpAddress + "...");
        
        // Verifica que exista el equipo registrado
        try {
          fs.appendFileSync(filePath2, data.toString());
          console.log(`Datos crudos guardados en la ruta: ${filePath}`);

          if (data.length > MAX_DATA_SIZE) {
            console.warn(`Paquete demasiado grande recibido: ${data.length} bytes`);
            socket.destroy(); // Cierra la conexión si los datos son demasiado grandes
            return;
          }
          
          //Obtenemos la dirección MAC del equipo conectado
          currentRemoteMacAddress = await getMacAddress(currentRemoteIpAddress);
          if (!currentRemoteMacAddress) {
            console.log(
              "No se encontró la dirección MAC, no se puede verificar el equipo."
            );
            return;
          }

          //Valida si existe el equipo registrado en las configuraciones del sistema
          const existeEquipo = verifyDevices(currentRemoteMacAddress);

          //Si el equipo en la conexión no está registrado termina el evento
          if (!existeEquipo) {
            return;
          }

          // Devuelve la función parser que le corresponde al equipo
          const parseResultsData = validateParser({
            id_device: existeEquipo.id,
          });

          //Parsea los datos en un objeto
          const results = parseResultsData(data.toString());

          // Valida que el mensaje parseado sea correcto          
          const result = validateResponse(results);


          

          //En caso de que el mensaje parseado sea válido lo guarda en un JSON
          if (result.success && result.data.length > 0) {
            const jsonResults = JSON.stringify(results, null, 2);

            //Guarda el archivo en la ruta especificada con el JSON parseado
            fs.appendFileSync(filePath, jsonResults);
            console.log(`Datos parseados guardados en la ruta: ${filePath}`);

            // Emite a través de Socket.io
            webSocketServer.emit("labResultsMessage", { data: jsonResults });
          }
        } catch (error) {
          console.error("Error al procesar datos:", error);
        }
      });

      socket.on("end", () => {
        console.log(`Conexión cerrada por ${currentRemoteIpAddress}`);
      });

      // Manejador de errores
      socket.on("error", (err) => {
        if (err.code === "ECONNRESET") {
          console.warn(
            `Conexión reseteada por el cliente ${currentRemoteIpAddress}:${socket.remotePort}`
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
    if (!tcpServer.listening) {
      console.log("Intentando reconectar el servidor TCP/IP..."); setTimeout(() => {
        tcpServer.listen(PORT, () => {
          console.log(`Servidor TCP/IP reiniciado en el puerto ${PORT}`);
        });
      }, 5000); // Reintentar después de 5 segundos
    }


  }

  tcpServer.listen(PORT, () => {
    console.log(`Servidor TPC/IP escuchando en el puerto ${PORT}`);
  });
}

module.exports = {
  initializeTcpServer,
};
