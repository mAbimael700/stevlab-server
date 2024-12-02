const bl = require("bl");
const { dataEvent } = require("../../../TPCServer/events/data");
const { setTCPConnection, removeTCPConnection } = require("./tcp-manager");
const { setReconnectInterval, removeReconnectInterval } = require("./tcp-reconnect-manager");

function handleDataEvent(client, data, device, deviceData) {
    const bufferList = new bl();
    dataEvent(data, device.ip_address, bufferList, deviceData);
    client.write("OK")
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
