class EquipmentQueryService {
  constructor({ equipmentService }) {
    this.equipmentService = equipmentService;
  }

  async findByIpAndMacAddress(ipAddress, macAddress) {
    return this.equipmentService.findByIpAndMacAddress(ipAddress, macAddress);
  }
}

module.exports = EquipmentQueryService;
