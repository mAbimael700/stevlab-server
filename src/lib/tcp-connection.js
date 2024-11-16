const net = require("node:net");
const bl = require("bl");
const { dataEvent } = require("../TPCServer/events/data");

let tcpConnections = {};

function createTCPConnection(device) {
  // Configuration ===================================
  const port = device.port;
  const host = device.ip_address;
  const client = new net.Socket();

  client.connect(port, host, () => {
    console.log(
      `Servidor LIS conectado al equipo ${device.name} en el puerto: ${port}`
    );
  });

  const bufferList = new bl();
  client.on("data", async (data) => {
    await dataEvent(data, device.ip_address, bufferList);
  });

  client.on("close", () => {
    console.log("Conexión cerrada");
  });

  client.on("error", (err) => {
    console.error("Error de conexión:", err.message);
  });

  tcpConnections[device.mac_address] = client;
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
  const currentConnection = tcpConnections[equipment.mac_address];

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
