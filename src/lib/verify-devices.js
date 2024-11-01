const { getEquipments } = require("../middlewares/equiment-manager");
const {
  formatMacAddressWithSeparators,
} = require("../utils/formatMacAddressWithSeparators");

//Función que valida los equipos registrados en el sistema
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

module.exports.verifyDevices = verifyDevices; // Exportación al final
