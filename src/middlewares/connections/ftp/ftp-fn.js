const { emitStatusDevice } = require("../../../lib/websocket/emit-device-status");

function emitClosedDevice(
  equipment,
  error = true,
  message = "Error en la conexión FTP"
) {
  emitStatusDevice(
    {
      last_connection: new Date(),
      connection_status: "disconnected",
    },
    equipment,
    message,
    error
  );
}

function emitOpenedDevice(equipment, message) {
  emitStatusDevice(
    {
      require_ftp_conn: true,
      last_connection: new Date(),
      connection_status: "connected",
    },
    equipment,
    message
  );
}

function createOptions(equipment) {
    return {
      host: equipment.ip_address,
      port: equipment.port,
      user: "stevlabserver",
      password: "annon",
      secure: true, // TLS explícito
      sessionReuse: false,
      passive: true, // Habilita el modo pasivo
      secureOptions: {
        rejectUnauthorized: false,
        maxVersion: "TLSv1.2",
      }, // Permitir certificados autofirmados
    };
  }

module.exports = {
    emitClosedDevice, emitOpenedDevice, createOptions
}