const net = require("node:net");
const bl = require("bl");
const { dataEvent } = require("../../TPCServer/events/data/data-event");
const { validateParser } = require("../../lib/validate-buffer");
const { verifyDevices } = require("../../lib/verify-devices");
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

      console.log(
        "Conexión TCP/IP entrante de: " +
          currentRemoteIpAddress +
          ":" +
          socket.remotePort
      );

      //Obtenemos la dirección MAC del equipo conectado
      currentRemoteMacAddress = await getMacAddress(currentRemoteIpAddress);
      if (!currentRemoteMacAddress) {
        console.warn(
          "No se encontró la dirección MAC, no se puede verificar el equipo."
        );
        socket.destroy();
      }

      const device = verifyDevices(currentRemoteMacAddress);

      // Devuelve la función parser que le corresponde al equipo y el carácter delimitador
      const deviceParsing = validateParser({
        id_device: device.id,
      });

      //Valida si existe el equipo registrado en las configuraciones del sistema
      const existeEquipo = verifyDevices(currentRemoteMacAddress);

      //Si el equipo en la conexión no está registrado termina el evento
      if (!existeEquipo) {
        console.warn("Equipo no registrado. Conexión cerrada.");
        socket.destroy();
      }

      // Establece un timeout más largo para la conexión
      socket.setTimeout(60000); // 60 segundos

      const bufferList = new bl();

      socket.on("data", async (data) => {
        await dataEvent(
          data,
          currentRemoteIpAddress ?? "127.0.0.1",
          bufferList,
          deviceParsing
        );
        socket.write("OK");
      });

      socket.on("end", () => {
        console.log(
          `Conexión cerrada por el equipo con la IP: ${currentRemoteIpAddress}`
        );
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
        console.log("Conexión cerrada");
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
