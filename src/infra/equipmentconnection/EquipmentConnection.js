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