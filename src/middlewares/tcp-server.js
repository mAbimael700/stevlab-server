const net = require("node:net");
const bl = require("bl");
const { dataEvent } = require("../tcp-ip/events/data");

//Se crea el servidor TPC/IP y escribimos los eventos a escuchar
function initializeTcpServer({ PORT, webSocketServer }) {
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

      console.log(
        "Conexión TCP/IP entrante de: " +
          currentRemoteIpAddress +
          ":" +
          socket.remotePort
      );

      // Establece un timeout más largo para la conexión
      socket.setTimeout(60000); // 60 segundos

      const bufferList = bl();
      socket.on("data", async (data) =>
        dataEvent(data, currentRemoteIpAddress, webSocketServer, bufferList)
      );

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
