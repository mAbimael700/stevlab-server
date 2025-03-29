const mongoose = require("mongoose");

const EquipmentConnectionStatusSchema = new mongoose.Schema({
  lastConnection: { type: Date, default: null },
  connectionStatus: { type: String, default: null },
});

const EquipmentConfigurationSchema = new mongoose.Schema({
  port: { type: Number, default: null },
  macAddress: { type: String, default: null },
  ipAddress: { type: String, default: null, unique: true },
  baudRate: { type: Number, default: null },
  remoteDirectory: { type: String, default: null },
});

const EquipmentSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  equipmentID: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  area: { type: mongoose.Schema.Types.Mixed, required: true },
  status: { type: EquipmentConnectionStatusSchema, default: () => ({}) },
  configuration: { type: EquipmentConfigurationSchema, default: () => ({}) },
});


module.exports = mongoose.model("Equipment", EquipmentSchema);
