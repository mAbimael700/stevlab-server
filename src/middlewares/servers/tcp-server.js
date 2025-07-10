const net = require("node:net");
const { tcpSocketListener } = require("../connections/tcp-ip/tcp-listener.js");

const options = {
  allowHalfOpen: true, // Permite conexiones a medias en caso de ser necesario
  keepAlive: true, // Envia paquetes keep-alive cada 30 segundos
  keepAliveInitialDelay: 3000,
};

//Se crea el servidor TPC/IP y escribimos los eventos a escuchar
function initializeTcpServer({ PORT }) {
  const tcpServer = net.createServer(options, tcpSocketListener);

  tcpServer.listen(PORT, () => {
    console.log(`Servidor TPC/IP escuchando en el puerto ${PORT}`);
  });
}

module.exports = {
  initializeTcpServer,
};
