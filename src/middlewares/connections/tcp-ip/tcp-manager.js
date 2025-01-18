const { Socket } = require("node:net")

/**
 * Devuelve todos los clientes TCP/IP en memória en el servidor
 */
let tcpConnections = {}; // Mapeo de conexiones TCP activas

/**
 * Guarda el cliente de conexión TCP/IP en memoria en el servidor
 * @param {String} idDevice - Id del equipo de laboratorio
 * @param {Socket} connection - cliente
 */
function setTCPConnection(idDevice, connection) {
  tcpConnections[idDevice] = connection;
}

/**
 * Devuelve el cliente TCP/IP del equipo
 * @param {String} idDevice - Id del equipo de laboratorio
 * @returns {Socket}
 */
function getTCPConnection(idDevice) {
  return tcpConnections[idDevice];
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
      delete tcpConnections[idDevice];
  } else {
      console.log(`No se encontró una conexión TCP activa para ${idDevice}.`);
  }
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
