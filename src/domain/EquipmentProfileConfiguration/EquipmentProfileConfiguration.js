const ParserFactory = require("../ParserFactory/ParserFactory");

class EquipmentProfileConfiguration {
  constructor(profileConfiguration) {
    this.name = profileConfiguration.name;
    this.type = profileConfiguration.type;
    this.checksumRegex = profileConfiguration.checksumRegex;
    this.parser = ParserFactory
    .create(profileConfiguration.type)
    .setOptions(profileConfiguration.options);
  }
}

module.exports = {
  EquipmentProfileConfiguration,
};
