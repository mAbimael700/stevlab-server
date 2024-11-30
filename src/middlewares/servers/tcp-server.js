const net = require("node:net");
const bl = require("bl");
const { dataEvent } = require("../../TPCServer/events/data");

const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

const { validateParser } = require("../../lib/validate-buffer");
const { verifyDevices } = require("../../lib/verify-devices");
const { validateResponse } = require("../../schemas/response-schema");
const { format } = require("date-fns");
const { getMacAddress } = require("../../lib/getMacAddress");

const MAX_DATA_SIZE = 1e6; // 1MB máximo por paquete

//Se crea el servidor TPC/IP y escribimos los eventos a escuchar
function initializeTcpServer({ PORT }) {
  const tcpServer = net.createServer(
    {
      allowHalfOpen: true, // Permite conexiones a medias en caso de ser necesario
      keepAlive: true, // Envia paquetes keep-alive cada 30 segundos
      keepAliveInitialDelay: 3000,
    },
    async (socket) => {
      // Obtenemos la ip del socket (equipo) en la conexión
      let currentRemoteIpAddress = socket.remoteAddress.split(":")[3];
      let currentRemoteMacAddress = "";
      let existeEquipo = false;
      let parser = () => {};
      let CHAR_DELIMITER = "";

      console.log(
        "Conexión TCP/IP entrante de: " +
          currentRemoteIpAddress +
          ":" +
          socket.remotePort
      );

      // Devuelve la función parser que le corresponde al equipo y el carácter delimitador
      const deviceParsing = validateParser({
        id_device: existeEquipo.id,
      });

      parser = deviceParsing.parser;
      CHAR_DELIMITER = deviceParsing.CHAR_DELIMITER;

      //Obtenemos la dirección MAC del equipo conectado
      currentRemoteMacAddress = await getMacAddress(currentRemoteIpAddress);
      if (!currentRemoteMacAddress) {
        console.log(
          "No se encontró la dirección MAC, no se puede verificar el equipo."
        );
        socket.destroy();
      }

      verifyDevices(currentRemoteMacAddress);

      // Establece un timeout más largo para la conexión
      socket.setTimeout(60000); // 60 segundos

      const resultsToSave = {};
      const bufferList = new bl();
      socket.on("data", async (data) => {
        await dataEvent(
          data,
          currentRemoteIpAddress ?? "127.0.0.1",
          bufferList,
          resultsToSave
        );
      });

      socket.on("end", () => {
        console.log(`Conexión cerrada por ${currentRemoteIpAddress}`);
      });

      // Manejador de errores
      socket.on("error", (err) => {
        if (err.code === "ECONNRESET") {
          console.warn(
            ` Conexión reseteada por el cliente ${currentRemoteIpAddress}:${socket.remotePort}`
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
      console.log("Intentando reconectar el servidor TCP/IP...");
      setTimeout(() => {
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
