const { formatMacAddressWithSeparators } = require("../../utils/formatMacAddressWithSeparators");

let equipmentsOnServer = [];

function setEquipments(newEquipments) {
  equipmentsOnServer = newEquipments;
}

function getEquipments() {
  return equipmentsOnServer;
}

function verifyDevices(macAddress) {
  const devices = getEquipments();
  if (!devices.length) {
    console.log("No hay equipos registrados.");
    return false;
  }

  const foundEquipment = devices.find(
    (equipment) => equipment.mac_address === macAddress
  );

  if (!foundEquipment) {
    console.log(
      `El equipo con dirección MAC (${formatMacAddressWithSeparators(macAddress)}) no está registrado.`
    );
    return false;
  }

  return foundEquipment;
}

module.exports = { setEquipments, getEquipments, verifyDevices };
