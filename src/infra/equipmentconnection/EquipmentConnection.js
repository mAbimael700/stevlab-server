const ClientConnection = require("@/infra/clientconnection/entity/ClientConnection");
const EquipmentDto = require("@/domain/equipment/dto/EquipmentDto.js");
const ClientOutBoundConnection = require("@/infra/clientconnection/entity/ClientOutBoundConnection.js");

class EquipmentConnection {
  /**
   *
   * @param {EquipmentDto} equipment
   * @param {ClientConnection | ClientOutBoundConnection | null} clientConnection
   */
  constructor(equipment, clientConnection = null) {
    if (!equipment) {
      throw new Error("Invalid parameters provided to Equipment constructor");
    }

    this.equipment = equipment;
    this.clientConnection = clientConnection;

    if (clientConnection) {
      clientConnection?.connect();
    }
  }

  /**
   *
   * @param {ClientConnection} connection
   */
  setClientConnection(connection) {
    this.clientConnection = connection;
  }
}

module.exports = EquipmentConnection;