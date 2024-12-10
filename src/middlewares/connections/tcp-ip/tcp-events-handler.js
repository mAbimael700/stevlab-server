
const { dataEvent } = require("../../../TPCServer/events/data/data-event");
const { setTCPConnection, removeTCPConnection } = require("./tcp-manager");
const { setReconnectInterval, removeReconnectInterval } = require("./tcp-reconnect-manager");


function handleDataEvent(socket, data, device, deviceData, bufferList) {
    dataEvent(data, device, bufferList, deviceData);
    socket.write("OK")
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
