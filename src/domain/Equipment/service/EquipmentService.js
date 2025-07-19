const EquipmentDto = require("../dto/EquipmentDto");

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
        const equipmentProfile = await this.equipmentProfileRepository
            .findById(data.equipmentProfileId);

        if (equipmentProfile) {
            return await this.equipmentRepository.create(data);
        }

        throw new Error("Equipment profile does not exist");

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


    async updateLastConnection(equipmentId, lastConnection) {
        const result = this.getById(equipmentId);

        if (result) {
            re
        }
    }
}

module.exports = EquipmentService;
