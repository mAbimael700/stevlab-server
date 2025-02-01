const {
  formatMacAddressWithSeparators,
} = require("../../utils/formatMacAddressWithSeparators");

let equipmentsOnServer = [];

function setEquipments(newEquipments) {
  equipmentsOnServer = newEquipments;
}

function getEquipments() {
  return equipmentsOnServer;
}

function getEquipmentById(id) {
  return equipmentsOnServer.find((e) => e.id_device === id);
}

/**
 * Valida si el equipo está registrado en el servidor LIS.
 * @param {string} macAddress - La dirección MAC del equipo a verificar.
 * @returns {object | boolean} Retorna los datos del equipo o falso en caso de no encontrar el equipo
 */
function verifyDeviceRegistered(macAddress) {
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
      `El equipo con dirección MAC (${formatMacAddressWithSeparators(
        macAddress
      )}) no está registrado.`
    );
    return false;
  }

  return foundEquipment;
}

module.exports = {
  setEquipments,
  getEquipments,
  getEquipmentById,
  verifyDeviceRegistered,
};
