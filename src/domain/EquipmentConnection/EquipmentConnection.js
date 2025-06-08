const { ClientConnection } = require("../ClientConnection/ClientConnection.js");
const EquipmentDto = require("../Equipment/EquipmentDto.js");
const {
  EquipmentConnectionStatus,
} = require("../EquipmentConnectionStatus/EquipmentConnectionStatus.js");
const EquipmentProfile = require("../EquipmentProfile/EquipmentProfile.js");

class EquipmentConnection {
  /**
   *
   * @param {EquipmentDto} equipment
   * @param {ClientConnection | null} clientConnection
   */
  constructor(equipment, clientConnection = null) {
    if (!equipment) {
      throw new Error("Invalid parameters provided to Equipment constructor");
    }

    this.equipment = equipment;
    this.connectionStatus = new EquipmentConnectionStatus(
      equipment.connectionStatus
    );
    this.profile = new EquipmentProfile(equipment.equipmentProfile);
    this.clientConnection = clientConnection;
  }

  /**
   *
   * @param {ClientConnection} connection
   */
  setClientConnection(connection) {
    this.clientConnection = connection;
  }
}

module.exports = { EquipmentConnection };
