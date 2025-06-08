const {
  EquipmentConnection,
} = require("../EquipmentConnection/EquipmentConnection");
const EquipmentSchema = require("../Equipment/EquipmentSchema");
const EquipmentDto = require("../Equipment/EquipmentDto");
const ClientConnectionFactory = require("../ClientConnection/ClientConnectionFactory.js");

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
          await this.setEquipmentConnection(result.data);
        }
      });
    } catch (error) {
      console.error("Error al leer el archivo de dispositivos:", error.message);
    }
  }

  /**
   *
   * @param {EquipmentDto} equipment
   * @returns
   */
  async setEquipmentConnection(equipment) {
    try {
      const clientConnection = ClientConnectionFactory.create(
        equipment.equipmentProfile.communicationType,
        equipment
      );
      const equipmentConnection = new EquipmentConnection(
        equipment,
        clientConnection
      );
      this.equipmentsOnServer.set(equipment.id, equipmentConnection);
      return this.equipmentsOnServer.get(equipment.id);
    } catch (error) {
      console.error(`Error al crear conexión para equipo ${equipment.id}:`, error.message);
      throw error;
    }
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
