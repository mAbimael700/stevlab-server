const { getIO } = require("../../middlewares/servers/websocket-server");

function emitStatusDevice(
  data,
  device,
  message = "El estado de conexión de los equipos ha sido actualizado",
  error = false
) {
  const io = getIO();
  if (io) {
    io.emit("device-status", JSON.stringify({ data, device, message, error }));
  }
}

module.exports = {
  emitStatusDevice,
};
