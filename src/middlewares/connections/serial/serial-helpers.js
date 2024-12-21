const { SerialPort } = require("serialport");

let rs232Connections = {};

function getRs232Connections() {
  return rs232Connections;
}

function addSerialConn(device) {
  // Configuración del puerto serie

  rs232Connections[device.id] = port;
}

function closeSerialConn(device) {
  const port = rs232Connections[device.id];

  port.close();
  delete rs232Connections[device.id];
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
  getRs232Connections,
  getAvailableCOMPorts
};
