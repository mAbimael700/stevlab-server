const { Device } = require("../../../domain/Device");
const { Client } = require("basic-ftp")

/**
 * @type {Map<string, {client:Client, reconnecting: boolean}>}
 */
const ftpConnections = new Map()


function getFtpConnectionById(idDevice) {
    return ftpConnections.get(idDevice)
}

/**
 * 
 * @param {Device} device 
 * @param {Client} client 
 */
function setFtpConnection(device, client) {
    // Agregar o actualizar la conexión
    ftpConnections.set(device.id_device, {
        client,
        reconnecting: false,
    })
}

/**
 * 
 * @param {string} idDevice 
 * @param {{reconnecting: boolean}} options 
 * @returns 
 */
function updateFtpConnection(idDevice, options) {
    const client = ftpConnections.get(idDevice);
    if (client) {
        // Mezclar el estado anterior con los nuevos atributos
        const updatedConnection = { ...client, ...options };
        ftpConnections.set(idDevice, updatedConnection);
        return updatedConnection; // Retornar la conexión actualizada para consistencia
    }
    console.warn(
        `No existe el cliente FTP proporcionado.`
    );
    return null;
}

/**
 * 
 * @param {string} idDevice
 */
function deleteFtpConnection(idDevice) {
    ftpConnections.delete(idDevice);
    console.log("Cliente FTP eliminado");
}

module.exports = {}