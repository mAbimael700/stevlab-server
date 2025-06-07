const CommunicationProfileDto = require("../CommunicationProfile/CommunicationProfileDto");

class EquipmentProfileDto {
    constructor(equipmentProfile) {
        this.name = equipmentProfile.name
        this.communicationType = equipmentProfile.communication_type
        this.communicationProfile = new CommunicationProfileDto(equipmentProfile.communicationProfile)
    }
}

module.exports = EquipmentProfileDto