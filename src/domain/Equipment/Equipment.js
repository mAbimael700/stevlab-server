const { ClientConnection } = require("../ClientConnection/ClientConnection");
const { EquipmentConfiguration } = require("./EquipmentConfiguration");
const { EquipmentConnectionStatus } = require("./EquipmentConnectionStatus");

class Equipment {
  /**
   *
   * @param {*} equipment
   * @param {ClientConnection | null} connection
   */
  constructor(equipment, connection = null) {
    this.data = {
      id: equipment.id,
      name: equipment.name,
      equipmentID: equipment.equipmentID,
      brand: equipment.brand,
      area: new Area(equipment.area),
      status: new EquipmentConnectionStatus(),
      configuration: new EquipmentConfiguration(equipment.configuration),
    };
    this.connection = connection;
  }

  /**
   *
   * @param {ClientConnection} connection
   */
  setConnection(connection) {
    this.connection = connection;
  }
}

module.exports = { Equipment };
