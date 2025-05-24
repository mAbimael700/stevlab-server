const {
  getEquipments,
} = require("../../../middlewares/equipment/equipment-helpers");
const EquipmentProfileConfigurationService = require("../../EquipmentProfileConfiguration/Memory/EquipmentProfileConfigurationService");

class EquipmentService {
  constructor() {
    this.profileConfigurationService =
      new EquipmentProfileConfigurationService();
  }

  findByIpAddress(ipAddress) {
    const equiment = getEquipments().find((e) => e.configuration?.ipAddress === ipAddress);
    const _profile = this.profileConfigurationService.getById(equiment.profile);
    equiment.profile = _profile;
    return equiment
  }

  findByMacAddress(macAddress) {
    return getEquipments().find((e) => e.configuration?.macAddress === macAddress);
  }
}

const equipmentService = new EquipmentService();

module.exports = equipmentService;
