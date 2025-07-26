const EquipmentConfigurationDto = require("@/domain/equipmentconfiguration/dto/EquipmentConfigurationDto")
const EquipmentProfileDto = require("@/domain/equipmentprofile/dto/EquipmentProfileDto")

class EquipmentDto {

    /**
     * 
     * @param {Object} equipment 
     */
    constructor(equipment) {
        this.id = Number(equipment.id)
        this.name = equipment.name
        this.createdAt = equipment.created_at
        this.modifiedAt = equipment.modified_at
        this.lastConnection = equipment.last_connection
        this.connectionStatus = equipment.connection_status
        this.active = equipment.active
        this.equipmentProfile = new EquipmentProfileDto(equipment.equipmentProfile)
        this.equipmentConfiguration = new EquipmentConfigurationDto(equipment.equipmentConfiguration)
    }
}

module.exports = EquipmentDto