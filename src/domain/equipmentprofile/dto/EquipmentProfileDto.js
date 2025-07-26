const CommunicationProfileDto = require("../../CommunicationProfile/CommunicationProfileDto");

class EquipmentProfileDto {
  constructor(equipmentProfile) {
    this.id = Number(equipmentProfile.id);
    this.name = equipmentProfile.name;
    this.communicationType = equipmentProfile.communication_type;
    this.communicationProfile = new CommunicationProfileDto(
      equipmentProfile.communicationProfile
    );
    this.active = equipmentProfile.active;
  }
}

module.exports = EquipmentProfileDto;
