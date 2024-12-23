
const { dataEvent } = require("../../../TPCServer/events/data/data-event");
const { removeTCPConnection } = require("./tcp-manager");


function handleDataEvent(socket, data, device, deviceData, bufferList) {
    dataEvent(data, device, bufferList, deviceData);
    socket.write(data.toString())
}

function handleCloseEvent(client, macAddress, scheduleReconnect) {
    console.log(`Conexión cerrada para ${macAddress}.`);
    removeTCPConnection(macAddress);
    scheduleReconnect();

}

function handleErrorEvent(client, macAddress, error, scheduleReconnect) {
    console.error(`Error en la conexión con ${macAddress}: ${error.message}`);
    removeTCPConnection(macAddress);
    scheduleReconnect();
}

module.exports = {
    handleDataEvent,
    handleCloseEvent,
    handleErrorEvent,
};
