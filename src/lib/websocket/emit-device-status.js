const { Device } = require("../../domain/Device");
const { DeviceConnectionStatus } = require("../../domain/DeviceConnectionStatus");
const { emitMessage } = require("./emit-message-to-websocket");

/**
 * Emite al servidor Websocket una actualización de estado de conexión del equipo
 * 
 * @param {DeviceConnectionStatus} status 
 * @param {Device} device 
 * @param {string} message 
 * @param {boolean} error 
 */
function emitStatusDevice(
  status,
  device,
  message = `El estado de conexión del equipo ${device.name} se actualizó`,
  error = false
) {

  //if (status.lastConnection) device.status.setLastConnection(status.getconnectionStatus())
  //if (status.connectionStatus) device.status.setConnectionStatus(status.getconnectionStatus())

  emitMessage({ data: status, device, message, error }, null, "device-status")

}

module.exports = {
  emitStatusDevice,
};
