class EquipmentConfigurationDto {
  constructor(equipmentConfiguration) {
    const [configuration] = equipmentConfiguration;
    this.ipAddress = configuration.ip_address;
    this.macAddress = configuration.mac_address;
    this.baudRate = configuration.baud_rate;
    this.port = configuration.port;
  }
}

module.exports = EquipmentConfigurationDto;
