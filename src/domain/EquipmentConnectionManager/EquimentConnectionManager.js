const {
  EquipmentConnection,
} = require("../EquipmentConnection/EquipmentConnection");
const {
  EquipmentProfileConfiguration,
} = require("../EquipmentProfileConfiguration/EquipmentProfileConfiguration");
const EquipmentSchema = require("../Equipment/EquipmentSchema");
const equipmentService = require("../Equipment/Memory/EquipmentService");
const EquipmentProfileConfigurationService = require("../EquipmentProfileConfiguration/Memory/EquipmentProfileConfigurationService");

class EquipmentConnectionManager {
  constructor(equipmentService) {
    if (EquipmentConnectionManager.instance) {
      return EquipmentConnectionManager.instance;
    }
    /**
     * @type {Map<string, EquipmentConnection>}
     */
    this.equipmentsOnServer = new Map();
    this.equipmentService = equipmentService;
    EquipmentConnectionManager.instance = this;
  }

  // Función para leer equipos desde el archivo
  async initialize() {
    try {
      const equipments = await this.equipmentService.getAll();
      equipments.forEach(async (e) => {
        const result = EquipmentSchema.validate(e);
        if (result.success) {
          await this.setEquipmentConnection(result.data); // Actualiza la lista en equipment-helpers
        }
      });
    } catch (error) {
      console.error("Error al leer el archivo de dispositivos:", error.message);
    }
  }

  async setEquipmentConnection(equipment) {
    const equipmentProfile = new EquipmentProfileConfiguration(equipment.profile);
    const equipmentConnection = new EquipmentConnection(
      equipment,
      equipmentProfile
    );
    this.equipmentsOnServer.set(equipment.id, equipmentConnection);
    return this.equipmentsOnServer.get(equipment.id);
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
   * @returns {EquipmentConnectionManager}
   */
  static getInstance() {
    if (!EquipmentConnectionManager.instance) {
      EquipmentConnectionManager.instance = new EquipmentConnectionManager();
    }
    return EquipmentConnectionManager.instance;
  }
}

const equipmentConnectionManager = new EquipmentConnectionManager(
  equipmentService
);

module.exports = equipmentConnectionManager;
