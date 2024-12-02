const net = require("node:net");
const bl = require("bl");
const { dataEvent } = require("../TPCServer/events/data");

let tcpConnections = {}; // Mapeo de conexiones TCP activas
let reconnectIntervals = {}; // Mapeo de intervalos de reconexión

// Función para crear una conexión TCP
function createTCPConnection(device) {
  const port = device.port;
  const host = device.ip_address;
  const macAddress = device.mac_address;

  if (tcpConnections[macAddress]) {
    console.log(`Conexión existente detectada para ${device.name}.`);
    return; // Evita crear múltiples clientes para el mismo dispositivo
  }

  const client = new net.Socket();

  const connect = () => {
    console.log(`Intentando conectar al equipo ${device.name} en ${host}:${port}...`);
    client.connect(port, host, () => {
      console.log(`Conexión exitosa con ${device.name} en ${host}:${port}.`);
      setTCPConnection(macAddress, client); // Usa el setter para guardar la conexión
      clearReconnectInterval(macAddress); // Cancela cualquier intervalo de reconexión
    });
  };

  const scheduleReconnect = () => {
    if (!reconnectIntervals[macAddress]) {
      console.log(`Programando reconexión para ${device.name} en 5 segundos.`);
      reconnectIntervals[macAddress] = setInterval(() => {
        if (!getTCPConnection(macAddress)) {
          connect(); // Intenta reconectar si no hay una conexión activa
        }
      }, 5000);
    }
  };

  const clearReconnectInterval = (macAddress) => {
    if (reconnectIntervals[macAddress]) {
      clearInterval(reconnectIntervals[macAddress]);
      delete reconnectIntervals[macAddress];
    }
  };

  client.on("data", async (data) => {
    const bufferList = new bl();
    await dataEvent(data, host, bufferList); // Manejo de datos recibidos
  });

  client.on("close", () => {
    console.log(`Conexión cerrada para ${device.name}.`);
    removeTCPConnection(macAddress); // Usa el remover para eliminar la conexión activa
    scheduleReconnect(); // Programa el intento de reconexión
  });

  client.on("error", (err) => {
    console.error(`Error en la conexión con ${device.name}: ${err.message}`);
    removeTCPConnection(macAddress); // Usa el remover para eliminar la conexión activa en caso de error
    scheduleReconnect(); // Programa el intento de reconexión
  });

  connect();
}

// Función para cerrar una conexión TCP
function closeTCP(macAddress) {
  const client = getTCPConnection(macAddress);
  if (client) {
    console.log(`Cerrando conexión TCP para ${macAddress}.`);
    client.destroy(); // Cierra la conexión
    removeTCPConnection(macAddress); // Usa el remover para eliminar la conexión activa
    clearReconnectInterval(macAddress); // Limpia el intervalo de reconexión
  } else {
    console.log(`No se encontró una conexión TCP activa para ${macAddress}.`);
  }
}

// Función para conectar un dispositivo
async function connectTCP(device) {
  const macAddress = device.mac_address;

  try {
    // Cierra cualquier conexión existente antes de crear una nueva
    if (getTCPConnection(macAddress)) {
      console.log(`Cerrando conexión existente para ${device.name}.`);
      closeTCP(macAddress);
    }

    createTCPConnection(device);
  } catch (error) {
    console.error(
      `Error al conectar TCP con ${device.name} (${device.ip_address}): ${error.message}`
    );
  }
}

// Setters y Getters
function setTCPConnection(macAddress, connection) {
  tcpConnections[macAddress] = connection;
}

function getTCPConnection(macAddress) {
  return tcpConnections[macAddress];
}

function removeTCPConnection(macAddress) {
  delete tcpConnections[macAddress];
}

function getAllTCPConnections() {
  return tcpConnections;
}

function setReconnectInterval(macAddress, interval) {
  reconnectIntervals[macAddress] = interval;
}

function getReconnectInterval(macAddress) {
  return reconnectIntervals[macAddress];
}

function removeReconnectInterval(macAddress) {
  if (reconnectIntervals[macAddress]) {
    clearInterval(reconnectIntervals[macAddress]);
    delete reconnectIntervals[macAddress];
  }
}

module.exports = {
  connectTCP,
  closeTCP,
  getTCPConnection,
  setTCPConnection,
  removeTCPConnection,
  getAllTCPConnections,
  setReconnectInterval,
  getReconnectInterval,
  removeReconnectInterval,
};
