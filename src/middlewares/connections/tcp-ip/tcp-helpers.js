const { removeTCPConnection, getTCPConnection } = require("./tcp-manager");
const { createTCPConnection } = require("./tcp-connection");
const { removeReconnectInterval } = require("./tcp-reconnect-manager");
const { emitStatusDevice } = require("../../../lib/websocket/emit-device-status");

/**
 * Cierra y elimina una conexión TCP para un dispositivo específico.
 * @param {Object} device - Información del equipo de laboratorio
 */
function closeTCP(device) {
    const idDevice = device.id_device;

    if (getTCPConnection(idDevice)) {
        console.log(`Cerrando y eliminando conexión TCP para el equipo: ${device.name}.`);
        removeTCPConnection(idDevice); // Reutiliza la lógica de eliminación
        removeReconnectInterval(idDevice); // Limpia también los intentos de reconexión programados
        emitStatusDevice(
            { connection_status: "disconnected", last_connection: new Date() },
            device,
            `Conexión TCP cerrada para el equipo ${device.name}.`
        );
    } else {
        console.log(`No se encontró una conexión TCP activa para ${idDevice}.`);
    }
}

async function connectTCP(device) {
    const idDevice = device.id_device;

    try {
        if (getTCPConnection(idDevice)) {
            console.log(`Cerrando conexión existente para ${device.name}.`);
            emitStatusDevice(
                { connection_status: "disconnected", last_connection: new Date(), },
                device,
                `Cerrando conexión existente para ${device.name} en ${host}:${port}.`
            )
            closeTCP(device);
        }

        createTCPConnection(device);
    } catch (error) {
        console.error(
            `Error al conectar TCP con ${device.name} (${device.ip_address}): ${error.message}`
        );
        emitStatusDevice(
            { connection_status: "disconnected" },
            device,
            `Error al conectar TCP con ${device.name} (${device.ip_address}): ${error.message}`,
            true
        )
    }
}

module.exports = { connectTCP, closeTCP };