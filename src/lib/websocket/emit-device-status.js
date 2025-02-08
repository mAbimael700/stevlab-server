const {Device} = require("../../domain/Device")
const { emitMessage } = require("./emit-message-to-websocket");
/**
 * @type {{
 *  last_connection?: Date,
 *  connection_status: "connected" | "connecting" | "disconnected" | "reconnecting"
 * }}
 */
let DeviceStatusData

/**
 * Emite al servidor Websocket una actualización de estado de conexión del equipo
 * 
 * @param {DeviceStatusData} data 
 * @param {Device} device 
 * @param {string} message 
 * @param {boolean} error 
 */
function emitStatusDevice(
  data,
  device,
  message = `El estado de conexión del equipo ${device.name} se actualizó`,
  error = false
) {

  emitMessage({ data, device, message, error }, null, "device-status")
  
}

module.exports = {
  emitStatusDevice,
};
