class EquipmentConfigurationDto {
    constructor(equipmentConfiguration) {
        this.ipAddress = equipmentConfiguration.ip_address
        this.macAddress = equipmentConfiguration.mac_address
        this.baudRate = equipmentConfiguration.baud_rate
    }
}

module.exports = EquipmentConfigurationDto