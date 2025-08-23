class EquipmentQueryService {
  constructor({ httpEquipmentRepository }) {
    this.equipmentRepository = httpEquipmentRepository;
  }
}

module.exports = EquipmentQueryService;
