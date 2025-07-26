const { initializeEquipmentManager } = require("../../../middlewares/equipment/equiment-manager");
const {
  getEquipments,
} = require("../../../middlewares/equipment/equipment-helpers");
const EquipmentProfileConfigurationService = require("@/domain/equipmentprofile/Memory/EquipmentProfileConfigurationService");

class EquipmentService {
  constructor() {
    this.profileConfigurationService = new EquipmentProfileConfigurationService();
    initializeEquipmentManager()
    this.equimentRepository = {
      getAll: getEquipments,
      findByIpAddress(ipAddress) {
        return getEquipments().find((e) => e.configuration?.ipAddress === ipAddress);
      },
      findByMacAddress(macAddress) {

        return getEquipments().find((e) => e.configuration?.macAddress === macAddress);

      }
    }
  }

  findByIpAddress(ipAddress) {
    const equiment = this.equimentRepository.findByIpAddress(ipAddress)
    const _profile = this.profileConfigurationService.getById(equiment.profile);
    equiment.profile = _profile;
    return equiment
  }

  findByMacAddress(macAddress) {
    return this.equimentRepository.findByMacAddress(macAddress)
  }
}

const equipmentService = new EquipmentService();

module.exports = equipmentService;
