const EquipmentDto = require("./EquipmentDto");
const EquipmentRepository = require("./EquipmentRepository");
const EquipmentSchema = require("./EquipmentSchema");

class EquipmentService {
  /**
   *
   * @param {EquipmentRepository} equipmentRepository
   */
  constructor(equipmentRepository) {
    this.equipmentRepository = equipmentRepository;
  }

  async getAll() {
    const equipments = await this.equipmentRepository.findAll({
      includeRelations: true,
    });

    if (equipments.length > 0) {
      return equipments.map(e => new EquipmentDto(e));
    }

    return null;
  }

  /**
   *
   * @param {Number} id
   */
  async getById(id) {
    const result = this.equipmentRepository.findById(id);

    if (result) {
      return result;
    }

    return null;
  }

  async create(data) {
    const resultValidation = EquipmentSchema.validate(data);

    if (resultValidation.success) {
      const result = await this.equipmentRepository.create(
        resultValidation.data
      );
      return result;
    } else {
      throw new Error(resultValidation.error.message, {
        cause: resultValidation.error.errors,
      });
    }
  }
}

module.exports = EquipmentService;
