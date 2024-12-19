
let rs232Connections = {};

function getRs232Connections() {
  return rs232Connections;
}

function addSerialConn(device) {
  // Configuración del puerto serie

  rs232Connections[device.id] = port;
}

function closeSerialConn(device) {
  const port = rs232Connections[device.id]

  port.close()
  delete rs232Connections[device.id]
}


module.exports = {
  addSerialConn,
  closeSerialConn,
  getRs232Connections
}