const { Socket } = require("node:net");

/**
 * Clientes TCP/IP almacenados en memória en el servidor
 * @type {Map<string, Socket>}
 */
const tcpConnections = new Map(); // Mapeo de conexiones TCP activas

/**
 * Guarda el cliente de conexión TCP/IP en memoria en el servidor
 * @param {String} idDevice - Id del equipo de laboratorio
 * @param {Socket} connection - cliente
 */
function setTCPConnection(idDevice, connection) {
  tcpConnections.set(idDevice, connection);
}

/**
 * Devuelve el cliente TCP/IP del equipo
 * @param {String} idDevice - Id del equipo de laboratorio
 * @returns {Socket | undefined}
 */
function getTCPConnection(idDevice) {
  return tcpConnections.get(idDevice);
}

/**
 * Elimina el cliente en memoria del servidor.
 * @param {String} idDevice - Id del equipo de laboratorio
 */
function removeTCPConnection(idDevice) {
  const connection = getTCPConnection(idDevice);
  if (connection) {
    if (!connection.destroyed) {
      console.log(`Cerrando conexión TCP para ${idDevice}.`);
      connection.destroy(); // Cierra la conexión TCP limpiamente
    } else {
      console.log(`La conexión TCP para ${idDevice} ya estaba cerrada.`);
    }
    tcpConnections.delete(idDevice);
  } else {
    console.log(`No se encontró una conexión TCP activa para ${idDevice}.`);
  }
}

function getAllTCPConnections() {
  return Array.from(tcpConnections.values());
}

module.exports = {
  setTCPConnection,
  getTCPConnection,
  removeTCPConnection,
  getAllTCPConnections,
};
