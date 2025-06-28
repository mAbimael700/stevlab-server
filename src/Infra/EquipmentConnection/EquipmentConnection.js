const ClientConnection = require("../ClientConnection/ClientConnection.js");
const EquipmentDto = require("../../domain/Equipment/EquipmentDto.js");
const ClientOutBoundConnection = require("../ClientConnection/ClientOutBoundConnection.js");

class EquipmentConnection {
  /**
   *
   * @param {EquipmentDto} equipment
   * @param {ClientConnection | ClientOutBoundConnection| null} clientConnection
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

module.exports = { EquipmentConnection };
