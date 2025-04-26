class EquipmentConfiguration {
  constructor(configuration) {
    this.port = configuration.port;
    this.macAddress = configuration.macAddress;
    this.ipAddress = configuration.ipAddress;
    this.baudRate = configuration.baudRate;
    this.remoteDirectory = configuration.remoteDirectory;
    this.connectionType = configuration.connectionType;
  }

  setPort(port) {
    this.port = port;
  }

  setMacAddress(macAddress) {
    this.macAddress = macAddress;
  }

  setIpAddress(ipAddress) {
    this.ipAddress = ipAddress;
  }

  setBaudRate(baudRate) {
    this.baudRate = baudRate;
  }

  setRemoteDirectory(directory) {
    this.remoteDirectory = directory;
  }
}

module.exports = { EquipmentConfiguration };
