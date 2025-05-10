const Equipment = require("./Equipment");

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

  async findByProfile(profile) {
    return await Equipment.findOne({ profile });
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

  async updateEquipmentLastConnection(id, timestamp) {
    this.updateField(id, "status.lastConnection", timestamp)
  }

  async updateEquipmentConnectionStatus(id, status) {
    this.updateField(id, "status.connectionStatus", status)
  }

  async delete(id) {
    return await Equipment.findByIdAndDelete(id);
  }
}

module.exports = { EquipmentRepository };
