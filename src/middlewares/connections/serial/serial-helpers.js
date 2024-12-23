const { SerialPort } = require("serialport");
const { createSerialConnection } = require("./serial-connection");

let serialConnections = {};

function getSerialConnections() {
  return serialConnections;
}

function addSerialConn(device) {
  // Configuración del puerto serie
  const currConections = getSerialConnections()
  const comPortAvailable = Object.values(currConections)
    .some(p => p.path !== device.port)

  if (comPortAvailable) {
    const port = createSerialConnection(device)
    serialConnections[device.id_device] = port;
    return console.log("Conexión serial establecida en el puerto " + port.path);
  }

  console.log(`El puerto ${device.port} ya está utilizado por otro equipo.`);

}

function closeSerialConn(device) {
  const port = serialConnections[device.id_device];

  if (!port.closing) {
    port.close();
    delete serialConnections[device.id_device];
  }
  
}

async function getAvailableCOMPorts() {
  try {
    const ports = await SerialPort.list(); // Lista los puertos disponibles
    const comPorts = ports.map((port) => ({
      path: port.path,
      manufacturer: port.manufacturer || "Unknown",
      serialNumber: port.serialNumber || "N/A",
    }));
    return comPorts;
  } catch (error) {
    console.error("Error al obtener los puertos COM:", error);
    throw error;
  }
}



module.exports = {
  addSerialConn,
  closeSerialConn,
  getSerialConnections,
  getAvailableCOMPorts
};
