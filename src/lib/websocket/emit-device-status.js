const { emitMessage } = require("./emit-message-to-websocket");

function emitStatusDevice(
  data,
  device,
  message = "El estado de conexión de los equipos ha sido actualizado",
  error = false
) {

  emitMessage({ data, device, message, error }, null, "device-status")
}

module.exports = {
  emitStatusDevice,
};
