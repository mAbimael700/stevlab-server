const mongoose = require("mongoose");

class EquipmentConnectionStatus {
  constructor() {
    this.lastConnection = { type: Date, default: null };
    this.status = { type: String, default: null };
  }

  getSchema() {
    return new mongoose.Schema({
      lastConnection: this.lastConnection,
      connectionStatus: this.status
    });
  }
}

class EquipmentConfiguration {
  constructor() {
    this.port = { type: Number, default: null };
    this.macAddress = { type: String, default: null };
    this.ipAddress = { type: String, default: null, unique: true };
    this.baudRate = { type: Number, default: null };
    this.remoteDirectory = { type: String, default: null };
  }

  getSchema() {
    return new mongoose.Schema({
      port: this.port,
      macAddress: this.macAddress,
      ipAddress: this.ipAddress,
      baudRate: this.baudRate,
      remoteDirectory: this.remoteDirectory
    });
  }
}

class Equipment {
  constructor() {
    this.id = { type: String, required: true, unique: true };
    this.name = { type: String, required: true };
    this.profile = { type: String, required: true };
    this.connectionStatus = { 
      type: new EquipmentConnectionStatus().getSchema(), 
      default: () => ({}) 
    };
    this.configuration = { 
      type: new EquipmentConfiguration().getSchema(), 
      default: () => ({}) 
    };
  }

  getSchema() {
    return new mongoose.Schema({
      id: this.id,
      name: this.name,
      profile: this.profile,
      connectionStatus: this.connectionStatus,
      configuration: this.configuration
    });
  }

  getModel() {
    return mongoose.model("Equipment", this.getSchema());
  }
}

module.exports = new Equipment().getModel();