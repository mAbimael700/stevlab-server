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

    async save(data) {
        const equipmentProfile = await this.equipmentProfileRepository
            .findById(data.equipmentProfileId);

        if (equipmentProfile) {

            await this.validateConfiguration(equipmentProfile, data);

            return this.equipmentRepository.create(data);
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
    }

    async validateConfiguration(equipmentProfile, data) {
        const {macAddress, ipAddress, port, baudRate, remoteDirectory} = data.equipmentConfiguration;

        switch (equipmentProfile.communication_type) {
            case 'TcpInbound':
                if (!(macAddress && ipAddress)) {
                    throw new Error("IP address and port are required");
                }
                break;

            case 'TcpOutbound':
                if (!(macAddress && ipAddress && port)) {
                    throw new Error("IP address, port and macAddress are required");
                }
                break;

            case 'Serial':
                if (!baudRate) {
                    throw new Error("Baud rate is required");
                }
                break;

            case 'Ftp':
                if (!(ipAddress && port && remoteDirectory)) {
                    throw new Error("IP address, port and remote directory are required");
                }
                break;

            default:
                throw new Error("Invalid communication type: " + equipmentProfile.communication_type)

        }
    }
}

module.exports = EquipmentService;
