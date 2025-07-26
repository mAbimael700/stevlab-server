const data = new Map();

data.set("HL71", {
  checksumRegex: '\\x1C',
  type: "HL7",
  name: "HL7 Protocol",
});

class EquipmentProfileConfigurationService {
  constructor() {}

  getById(id) {
    return data.get(id);
  }
}

module.exports = EquipmentProfileConfigurationService;
