const { getEquipments } = require("../middlewares/equiment-manager");

function formatMacAddressWithSeparators(mac) {
  // Dividir la cadena en grupos de 2 caracteres y unirlos con ':'
  return mac
    .match(/.{1,2}/g)
    .join(":")
    .toUpperCase();
}

function verifyDevices(currentRemoteMacAddress) {
  try {
    const equipmentsOnServer = getEquipments();
    const devicesLength = equipmentsOnServer.length;

    if (devicesLength === 0) {
      console.log(
        "Por favor, registra los equipos de laboratorio conectados al servidor."
      );
      
    }
    const foundEquipment = equipmentsOnServer.find(
      (equipment) => equipment.mac_address === currentRemoteMacAddress
    );

    if (!foundEquipment) {
      console.log(
        "El equipo con dirección la dirección MAC: " +
          formatMacAddressWithSeparators(currentRemoteMacAddress) +
          " no está registrado."
      );

      return false;
    }

    return foundEquipment;
  } catch (error) {
    console.error("Error al verificar dispositivos:", error.message);
    return false; // Devuelve false en caso de error
  }
}

module.exports = {
  verifyDevices,
  formatMacAddressWithSeparators
};
