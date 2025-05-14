const {
  EquipmentConnection,
} = require("../EquipmentConnection/EquipmentConnection");
const {
  EquipmentCommunicationProfileConfiguration,
} = require("../EquipmentCommunicationProfileConfiguration/EquipmentCommunicationProfileConfiguration");
const { EquipmentValidator } = require("./EquipmentValidator");

class EquipmentConnectionManager {
  constructor() {
    if (EquipmentConnectionManager.instance) {
      return EquipmentConnectionManager.instance;
    }
    /**
     * @type {Map<string, EquipmentConnection>}
     */
    this.equipmentsOnServer = new Map();
    this.equipmentService = new Equipmentservice();
    this.equipmentProfileService = new EquipmentProfileService();
    EquipmentConnectionManager.instance = this;
  }

  // Función para leer equipos desde el archivo
  async loadEquipments() {
    try {
      const equipments = await this.equipmentService.getAll();
      equipments.forEach(async (e) => {
        const result = EquipmentValidator.validate(e);
        if (result.success) {
          await this.setEquipment(result.data); // Actualiza la lista en equipment-helpers
        }
      });
    } catch (error) {
      console.error("Error al leer el archivo de dispositivos:", error.message);
    }
  }

  async setEquipment(equipment) {
    const profile = await this.equipmentProfileService.getById(equipment.profile);
    const equipmentProfile = new EquipmentCommunicationProfileConfiguration(profile);
    const equipmentConnection = new EquipmentConnection(
      equipment,
      equipmentProfile
    );
    this.equipmentsOnServer.set(equipment.id, equipmentConnection);
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
   * @returns
   */
  static getInstance() {
    if (!EquipmentConnectionManager.instance) {
      EquipmentConnectionManager.instance = new EquipmentConnectionManager();
    }
    return EquipmentConnectionManager.instance;
  }
}

module.exports = {
  EquipmentConnectionManager,
};
