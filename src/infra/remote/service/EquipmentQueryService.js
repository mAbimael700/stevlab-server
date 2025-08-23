class EquipmentQueryService {
  constructor({ httpEquipmentRepository }) {
    this.equipmentRepository = httpEquipmentRepository;
  }

  async findByIpAndMacAddress(ipAddress, macAddress) {
    return this.equipmentService.findByIpAndMacAddress(ipAddress, macAddress);
  }
}

module.exports = EquipmentQueryService;
