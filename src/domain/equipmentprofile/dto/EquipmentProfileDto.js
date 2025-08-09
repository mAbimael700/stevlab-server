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
        this.requiresAck = equipmentProfile.requires_ack ?? false
        this.requiresHandshake = equipmentProfile.requires_handshake ?? false
        this.ackTrigger = equipmentProfile.ack_trigger
        this.handshakeType = equipmentProfile.handshake_type
        this.ackType = equipmentProfile.ack_type
    }
}

module.exports = EquipmentProfileDto;
