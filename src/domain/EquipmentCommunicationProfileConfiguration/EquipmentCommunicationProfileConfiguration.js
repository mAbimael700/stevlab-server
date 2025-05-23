class EquipmentCommunicationProfileConfiguration {
  constructor(profileConfiguration) {
    this.name = profileConfiguration.name;
    this.type = profileConfiguration.type;
    this.checksumRegex = profileConfiguration.checksumRegex;
    this.options = profileConfiguration.options ?? {};
    this.parser = ParserFactory.create(profileConfiguration.type)
  }
}

module.exports = {
  EquipmentCommunicationProfileConfiguration,
};
