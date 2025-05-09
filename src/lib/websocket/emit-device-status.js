const {
  getEquipments,
  setEquipments,
} = require("../../middlewares/equipment/equipment-helpers");
const { emitMessage } = require("./emit-message-to-websocket");

/**
 * Emite al servidor Websocket una actualización de estado de conexión del equipo
 *
 * @param {EquipmentConnectionStatus} status
 * @param {Equipment} device
 * @param {string} message
 * @param {boolean} error
 */
function emitStatusDevice(status, device, message, error = false) {
  try {
    if (!message) {
      message = `El estado de conexión del equipo ${device.name} se actualizó`;
    }

    const equipments = getEquipments();
    let equiment = equipments.find((e) => e.id_device === device.id_device);
    equiment = { ...equiment, ...status };
    setEquipments(equipments);
    emitMessage(
      { data: status, device, message, error },
      null,
      "device-status"
    );
  } catch (error) {
    console.error(
      "Ocurrió un error al actualizar el estado de conexión del equipo",
      error.message
    );
  }
}

module.exports = {
  emitStatusDevice,
};
