const {SerialPort} = require("serialport");
const {createSerialConnection} = require("./serial-connection");
const {emitStatusDevice} = require("../../../lib/websocket/emit-device-status");
let serialConnections = new Map();

/**
 *
 * @returns {Map<string, SerialPort<any>>}
 */
function getSerialConnections() {
    return serialConnections;
}

/**
 *
 * @param {Object} device
 * @returns
 */
function addSerialConn(device) {
    // Configuración del puerto serie
    const currConnections = getSerialConnections();
    const comPortAvailable = Array.from(currConnections.values()).every(
        (p) => p.path !== device.port
    );

    if (comPortAvailable) {
        const port = createSerialConnection(device);

        serialConnections.set(device.id_device, port);

        return console.log("Conexión serial establecida en el puerto " + port.path);
    }

    console.warn(`El puerto ${device.port} ya está utilizado por otro equipo.`);
}

function closeSerialConn(device) {
    const port = serialConnections.get(device.id_device);

    if (port && !port.closing) {
        port.close();
        serialConnections.delete(device.id_device);
    }
}

module.exports = {
    addSerialConn,
    closeSerialConn,
    getSerialConnections,
};
