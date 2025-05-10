const { EquipmentConnection } = require("../EquipmentConnection/EquipmentConnection");
const { EquipmentParsingProfileConfiguration } = require("../EquipmentParsingProfile/EquipmentParsingProfileConfiguration");
const { EquipmentValidator } = require("./EquipmentValidator");

class EquipmentManager {
  constructor() {
    if (EquipmentManager.instance) {
      return EquipmentManager.instance;
    }
    /**
     * @type {Map<string, EquipmentConnection>}
     */
    this.equipmentsOnServer = new Map();
    this.equipmentService = new Equipmentservice();
    EquipmentManager.instance = this;
  }

  // Función para leer equipos desde el archivo
  async loadEquipments() {
    try {
      //⚠⚠ Pendiente: Validar si los directorios de config y el archivo de devices existen
      const equipments = await this.equipmentService.getAll();

      equipments.forEach(e => {
        const result = EquipmentValidator.validate(e);
        if (result.success) {
          this.setEquipments(result.data); // Actualiza la lista en equipment-helpers
        }
      })

    } catch (error) {
      console.error("Error al leer el archivo de dispositivos:", error.message);
    }
  }

  /**
   * Guarda los equipos registrados en el repositorio
   * @param {*} equipments
   */
  setEquipments(equipments) {
    const equipments = equipments.map((e) => {
      const equipment = new Equipment(e, e.connectionType, e.configuration);
      return equipment;
    });

    equipments.forEach((equipment) => {
      this.equipmentsOnServer.set(equipment.getId(), equipment);
    });
  }



  async setEquipment(equipment) {
    const profile = await this.profileService.getById(equipment.profile)
    const equipmentProfile = new EquipmentParsingProfileConfiguration(profile)
    const equipmentConnection = new EquipmentConnection(equipment, equipmentProfile)
    this.equipmentsOnServer.set(equipment.id, equipmentConnection)
  }
  /**
   * 
   * @param {string} id 
   * @returns 
   */
  getEquipmentById(id) {
    return this.equipmentsOnServer.get(id);
  }

  /**
   * Método estático para obtener la instancia única
   * @returns {EquipmentManager}
   */
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
