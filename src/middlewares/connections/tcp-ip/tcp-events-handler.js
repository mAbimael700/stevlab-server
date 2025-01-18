
const { dataEvent } = require("../../../lib/data-handler/data-event");
const { removeTCPConnection } = require("./tcp-manager");


function handleDataEvent(socket, data, device, deviceData, bufferList) {
    dataEvent(data, device, bufferList, deviceData);
    socket.write(data.toString())
}


/**
 * Maneja eventos de conexión (cierre o error).
 * @param {Object} client - Cliente TCP.
 * @param {Object} equipment - Información del equipo.
 * @param {String} eventType - Tipo de evento ("close" o "error").
 * @param {Function} scheduleReconnect - Función para programar reconexión.
 * @param {Error} [error] - Detalle del error (solo para eventos "error").
 */
function handleConnectionEvent(client, equipment, eventType, scheduleReconnect, error) {
    if (eventType === "close") {
        console.info(`Conexión cerrada con ${equipment.name}.`);
    } else if (eventType === "error") {
        console.error(`Error en la conexión con ${equipment.name}: ${error.message}`);
    }

    removeTCPConnection(equipment.id_device);
    scheduleReconnect();
}
module.exports = {
    handleDataEvent,
    handleConnectionEvent
};
