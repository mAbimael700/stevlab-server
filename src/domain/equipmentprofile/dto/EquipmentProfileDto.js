const CommunicationProfileDto = require("@/domain/communicationprofile/CommunicationProfileDto");

class EquipmentProfileDto {
    constructor(equipmentProfile) {
        this.id = Number(equipmentProfile.id);
        this.name = equipmentProfile.name;
        this.communicationType = equipmentProfile.communication_type;
        this.communicationProfile = new CommunicationProfileDto(
            equipmentProfile.communicationProfile
        );
        this.active = equipmentProfile.active;
        this.handshake= equipmentProfile.handshake
        this.ack = equipmentProfile.ack
    }
}

module.exports = EquipmentProfileDto;
