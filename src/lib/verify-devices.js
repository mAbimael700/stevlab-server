const { equipmentsOnServer } = require("../middlewares/equiment-manager");
const devicesLength = equipmentsOnServer.length;

function verifyDevices(currentRemoteMacAddress) {

  if (devicesLength === 0) {
    console.log(
      "Por favor, registra los equipos de laboratorio conectados al servidor."
    );

  }

  if (!equipmentsOnServer.find(equipment => equipment.mac_address === currentRemoteMacAddress)) {
    console.log(
      "El equipo con dirección la dirección MAC: " +
      currentRemoteMacAddress +
      " no está registrado."
    );

    return false;
  }
  return equipmentsOnServer.find(equipment => equipment.mac_address === currentRemoteMacAddress)
}

module.exports = {
  verifyDevices,
};
