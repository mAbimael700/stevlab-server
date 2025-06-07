const ParserFactory = require("../ParserFactory/ParserFactory");
const EquipmentProfileDto = require("./EquipmentProfileDto");

class EquipmentProfile {
  /**
   * 
   * @param {EquipmentProfileDto} equipmentProfile 
   */
  constructor(equipmentProfile) {
    this.checksumRegex = equipmentProfile.communicationProfile.checksumRegex;
    this.parser = ParserFactory
      .create(equipmentProfile.communicationProfile.type)
      .setOptions(equipmentProfile.options);
  }
}

module.exports = {
  EquipmentProfile,
};
