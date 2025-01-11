const net = require("node:net");
const bl = require("bl");
const { handleDataEvent } = require("../connections/tcp-ip/tcp-events-handler");
const {
  deviceValidation,
} = require("../connections/tcp-ip/tcp-device-validation");
const { emitStatusDevice } = require("../../lib/websocket/emit-device-status");
const { Server } = require("../../services/server.js");

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

      const device = await deviceValidation(socket);

      console.log(
        `Conexión TCP/IP entrante del equipo ${device.data.name} con la dirección IPv4: ${device.ipAddress}:${socket.remotePort}`
      );

      emitStatusDevice(
        {
          ip_address: device.ipAddress,
          port: socket.remotePort.toString(),
          connection_status: "connected",
        },
        device.data
      );

      // Establece un timeout más largo para la conexión
      socket.setTimeout(60000); // 60 segundos

      const bufferList = new bl();
      socket.on("data", async (data) => {
        handleDataEvent(
          socket,
          data,
          device.data,
          device.parsingData,
          bufferList
        );
      });

      socket.on("end", () => {
        console.log(
          `Conexión cerrada por el equipo ${device.data.name} con IPv4: ${device.ipAddress}:${socket.remotePort}`
        );

        emitStatusDevice(
          {
            last_connection: new Date(),
            connection_status: "disconnected",
          },
          device.data
        );
      });

      // Manejador de errores
      socket.on("error", (err) => {
        if (err.code === "ECONNRESET") {
          console.warn(
            ` Conexión reseteada por el cliente ${device.ipAddress}:${socket.remotePort}`
          );
        } else {
          emitStatusDevice(
            {
              last_connection: new Date(),
              connection_status: "disconnected",
            },
            device.data,
            `Error en la conexión: ${err.message}`,
            true
          );
          console.error("Error en la conexión:", err);
          socket.destroy(); // Cerrar la conexión en caso de error
        }
      });

      socket.on("close", () => {
        console.log("Conexión cerrada");
        Server.setStatus("inactivo")
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
    Server.setStatus("activo")
    Server.setTCPPort(PORT)
  });
}

module.exports = {
  initializeTcpServer,
};
