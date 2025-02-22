const { setEquipments, getEquipments } = require("./EquipmentHelpers");
const { validateDeviceConfiguration } = require("../../schemas/device-schema");


class EquipmentManager {
  constructor(parameters) {

  }

  // Función para leer equipos desde el archivo
  loadEquipmentsFromDatabase() {
    try {

      //Pendiente: Validar si los directorios de config y el archivo de devices existen
      const data = EquipmentRepository.getAll()
      const devices = JSON.parse(data)?.devices;
      const result = validateDeviceConfiguration(devices)

      if (result.success) {
        setEquipments(result.data); // Actualiza la lista en equipment-helpers
      }

    } catch (error) {
      console.error("Error al leer el archivo de dispositivos:", error.message);
    }
  }
}









module.exports = {
  initializeEquipmentManager,
  writeEquipmentOnServer,
  deleteEquipmentOnServer,
  getEquipments,
};
