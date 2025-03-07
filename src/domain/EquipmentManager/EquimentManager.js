const { validateDeviceConfiguration } = require("../../schemas/device-schema");
const { Equipment } = require("../Equipment/Equipment");
const { EquipmentRepository } = require("../Equipment/EquipmentRepository");

class EquipmentManager {
  constructor() {
    if (EquipmentManager.instance) {
      return EquipmentManager.instance;
    }

    this.equipmentRepository = new EquipmentRepository();

    /**
     * @type {Map<string, Equipment>}
     */
    this.equipmentsOnServer = new Map();
    EquipmentManager.instance = this;
  }

  // Función para leer equipos desde el archivo
  async loadEquipments() {
    try {
      //Pendiente: Validar si los directorios de config y el archivo de devices existen
      const devices = await this.equipmentRepository.getAll();
      const result = validateDeviceConfiguration(devices);

      if (result.success) {
        this.setEquipments(result.data); // Actualiza la lista en equipment-helpers
      }
    } catch (error) {
      console.error("Error al leer el archivo de dispositivos:", error.message);
    }
  }

  /**
   * Guarda los equipos registrados en el repositorio
   * @param {*} newEquipments
   */
  setEquipments(newEquipments) {
    /**
     * @type {Equipment[]}
     */
    const equipments = newEquipments.map((e) => {
      const equipment = new Equipment(e, e.connectionType, e.configuration);
      return equipment;
    });

    equipments.forEach((equipment) => {
      this.equipmentsOnServer.set(equipment.getId(), equipment);
    });
  }

  /**
   * 
   * @param {string} id 
   * @returns 
   */
   getEquipmentById(id) {
    return this.equipmentsOnServer.get(id);
  }

  // Método estático para obtener la instancia única
  static getInstance() {
    if (!EquipmentManager.instance) {
      EquipmentManager.instance = new EquipmentManager();
    }
    return EquipmentManager.instance;
  }
}

module.exports = {
  EquipmentManager,
};
