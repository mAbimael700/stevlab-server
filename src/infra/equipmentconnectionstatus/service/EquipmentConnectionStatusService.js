class EquipmentConnectionStatusService {
  constructor({ equipmentService, websocketEmitter }) {
    this.equipmentService = equipmentService;
    this.emitter = websocketEmitter;
  }

  async updatelastConnection(equipmentId, timestamp) {
    const { lastConnection, name, id } =
      await this.equipmentService.updateLastConnection(equipmentId, timestamp);

    this._emitToEquipmentStatusChannel("last-connection", {
      lastConnection,
      name,
      id,
    });
  }

  /**
   *
   * @param {number | bigint} equipmentId
   * @param {"connected" | "disconnected" | "closed" | "connecting"} newStatus
   */
  async connectionStatus(equipmentId, newStatus) {
    const { status, name, id } =
      await this.equipmentService.updateConnectionStatus(
        equipmentId,
        newStatus
      );
    this._emitToEquipmentStatusChannel("connection-status", {
      status,
      name,
      id,
    });
  }

  /**
   *
   * @param {'connection-status' | 'last-connection'} event
   * @param {*} data
   */
  _emitToEquipmentStatusChannel(event, data) {
    this.emitter.emitToChannel("equipment-status", event, data);
  }
}

module.exports = EquipmentConnectionStatusService;
