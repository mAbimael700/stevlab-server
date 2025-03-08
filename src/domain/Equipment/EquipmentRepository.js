const Equipment = require("../../models/Equipment");

class EquipmentRepository {

  constructor() { }

  async create(data) {
    const equipment = new Equipment(data);
    return await equipment.save();
  }

  async getAll() {
    return await Equipment.find()
  }

  async findById(id) {
    return await Equipment.findById(id);
  }

  async findByEquipmentID(equipmentID) {
    return await Equipment.findOne({ equipmentID });
  }

  async findByMacAddress(macAddress) {
    return await Equipment.findOne({ configuration: { macAddress } });
  }

  async findAll() {
    return await Equipment.find();
  }

  async update(id, updateData) {
    return await Equipment.findByIdAndUpdate(id, updateData, { new: true });
  }

  async updateField(id, fieldPath, newValue) {
    const updateData = {
      $set: { [fieldPath]: newValue }
    };
    return await Equipment.findByIdAndUpdate(id, updateData, { new: true });
  }

  async updateLastConnection(id, timestamp) {
    this.updateField(id, "status.lastConnection", timestamp)
  }

  async updateConnectionStatus(id, status) {
    this.updateField(id, "status.connectionStatus", status)
  }

  async delete(id) {
    return await Equipment.findByIdAndDelete(id);
  }
}

module.exports = { EquipmentRepository };
