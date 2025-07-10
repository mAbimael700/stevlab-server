const EquipmentDto = require("./EquipmentDto");
const EquipmentRepository = require("./EquipmentRepository");
const EquipmentSchema = require("./EquipmentSchema");

class EquipmentService {
  /**
   *
   * @param {Object} dependencies
   */
  constructor(dependencies) {
    this.equipmentRepository = dependencies.equipmentRepository;
    this.equipmentProfileRepository = dependencies.equipmentRepository;
  }

  async getAll() {
    const equipments = await this.equipmentRepository.findAll({
      includeRelations: true,
    });

    if (equipments.length > 0) {
      return equipments.map((e) => new EquipmentDto(e));
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
      return new EquipmentDto(result);
    }

    return null;
  }

  async create(data) {
    const resultValidation = EquipmentSchema.validateCreation(data);

    if (resultValidation.success) {
      const equipmentProfile = await this.equipmentProfileRepository.getById(
        resultValidation.data.equipmentProfile
      );

      if (equipmentProfile) {
        const result = await this.equipmentRepository.create(
          resultValidation.data
        );

        return result;
      } else {
        throw new Error("El equipment profile no existe");
        
      }
    } else {
      throw new Error(resultValidation.error.message, {
        cause: resultValidation.error.errors,
      });
    }
  }

  async findByIpAddress(ipAddress) {
    const result = await this.equipmentRepository.findByIpAddress(ipAddress, {
      includeRelations: true,
    });

    if (result) {
      return new EquipmentDto(result);
    }

    return null;
  }
  async findByMacAddress(macAddress) {
    const result = await this.equipmentRepository.findByMacAddress(macAddress, {
      includeRelations: true,
    });

    if (result) {
      return new EquipmentDto(result);
    }

    return null;
  }
}

module.exports = EquipmentService;
