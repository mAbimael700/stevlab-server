const net = require("node:net");
const bl = require("bl");
const { dataEvent } = require("../TPCServer/events/data");

let tcpConnections = {};

function createTCPConnection(device, maxRetries = 5, retryDelayMs = 30000) {
  let attempt = 0;

  const connect = () => {
    const port = device.port;
    const host = device.ip_address;
    const client = new net.Socket();

    client.connect(port, host, () => {
      console.log(
        `Servidor LIS conectado al equipo ${device.name} en el dirección IP ${host}:${port} exitosamente`
      );

      // Save the connection and reset the retry attempt counter
      tcpConnections[device.mac_address] = client;
      attempt = 0;
    });

    const bufferList = new bl();
    client.on("data", async (data) => {
      await dataEvent(data, device.ip_address, bufferList);
    });

    client.on("close", () => {
      console.log(`Conexión cerrada para el equipo ${device.name}`);
      scheduleReconnect();
    });

    client.on("error", (err) => {
      console.error(`Error de conexión para ${device.name}:`, err.message);
      scheduleReconnect();
    });
  };

  const scheduleReconnect = () => {
    if (attempt < maxRetries) {
      attempt++;
      console.log(
        `Intento de reconexión ${attempt}/${maxRetries} para el equipo ${device.name}...`
      );
      setTimeout(connect, 1000); // Retry after 1 second
    } else {
      console.log(
        `Max intentos alcanzados. Reintentando en ${retryDelayMs / 1000} segundos para el equipo ${device.name}`
      );
      setTimeout(() => {
        attempt = 0;
        connect();
      }, retryDelayMs);
    }
  };

  connect();
}




function closeTCP(mac_address) {
  const client = tcpConnections[mac_address];
  if (client) {
    client.destroy();
    console.log(`Conexión TCP/IP cerrada para ${mac_address}`);
    delete tcpConnections[mac_address]; // Elimina la conexión de la lista
  } else {
    console.log(`No se encontró una conexión TCP activa para ${mac_address}`);
  }
}

async function connectTCP(device) {
  // Si ya existe una conexión, ciérrala antes de intentar una nueva conexión
  const currentConnection = tcpConnections[device.mac_address];

  try {
    if (currentConnection) {
      console.log(
        `Cerrando conexión existente para ${device.mac_address} con ip ${device.ip_address}`
      );
      closeTCP(device.mac_address);
    }

    createTCPConnection(device);
  } catch (error) {
    console.error(
      `Error al conectar TCP con ${device.name} con IP ${device.ip_address}: `,
      error.message
    );
  }
}

module.exports = { connectTCP, closeTCP, tcpConnections };
