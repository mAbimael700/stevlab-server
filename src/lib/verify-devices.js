const { equipmentsOnServer } = require("../middlewares/equiment-manager");
const devicesLength = Object.keys(equipmentsOnServer).length;

function verifyDevices(currentRemoteAddress) {
  if (devicesLength === 0) {
    console.log(
      "Por favor, registra los equipos de laboratorio conectados al servidor."
    );
    return false;
  } else if (!equipmentsOnServer[currentRemoteAddress]) {
    console.log(
      "El equipo con dirección IP: " +
        currentRemoteAddress +
        " no está registrado."
    );

    return false;
  }
}

module.exports = {
  verifyDevices,
};
