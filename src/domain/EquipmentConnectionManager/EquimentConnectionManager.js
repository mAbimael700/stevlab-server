const {
  EquipmentConnection,
} = require("../EquipmentConnection/EquipmentConnection");
const EquipmentSchema = require("../Equipment/EquipmentSchema");

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
    const equipmentConnection = new EquipmentConnection(equipment);
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
   * @returns {EquipmentConnectionManager}
   */
  static getInstance() {
    if (!EquipmentConnectionManager.instance) {
      EquipmentConnectionManager.instance = new EquipmentConnectionManager();
    }
    return EquipmentConnectionManager.instance;
  }
}



module.exports = EquipmentConnectionManager;
