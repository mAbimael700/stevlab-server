let tcpConnections = {}; // Mapeo de conexiones TCP activas

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

module.exports = {
  setTCPConnection,
  getTCPConnection,
  removeTCPConnection,
  getAllTCPConnections,
};
