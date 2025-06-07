const parserFactory = require("../ParserFactory/ParserFactory");
const EquipmentProfileDto = require("./EquipmentProfileDto");

class EquipmentProfile {
  /**
   * 
   * @param {EquipmentProfileDto} equipmentProfile 
   */
  constructor(equipmentProfile) {
    this.type = equipmentProfile.communicationProfile.id;
    this.checksumRegex = equipmentProfile.communicationProfile.checksumRegex;
    this.parser = parserFactory
      .create(equipmentProfile.communicationProfile.type)
      .setOptions(equipmentProfile.options);
  }
}

module.exports =
  EquipmentProfile;
