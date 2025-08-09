const BaseRepository = require("@/domain/repository/BaseRepositories");

class EquipmentRepository extends BaseRepository {
    /**
     *
     * @param {PrismaClient} prisma
     */
    constructor(prisma) {
        super("Equipment", prisma);
    }

    /**
     * Get common include options for queries
     * @private
     */
    #getIncludeOptions() {
        return {
            equipmentProfile: {
                include: {
                    communicationProfile: true,
                },
            },
            equipmentConfiguration: true,
        };
    }

    /**
     * Build query options with optional relations
     * @private
     * @param {Object} baseOptions - Base query options
     * @param {boolean} includeRelations - Whether to include relations
     * @returns {Object} Complete query options
     */
    #buildOptions(baseOptions, includeRelations) {
        const options = {...baseOptions};

        if (includeRelations) {
            options.include = this.#getIncludeOptions();
        }

        return options;
    }

    async findAll({includeRelations = false} = {}) {
        const baseOptions = {
            where: {
                active: true,
            },
        };

        return await super.findAll(this.#buildOptions(baseOptions, includeRelations));
    }

    async findById(id, {includeRelations = false} = {}) {
        return await super.findById(id, this.#buildOptions({}, includeRelations));
    }

    async findByIpAddressAndMacAddress(ip, mac, {includeRelations = false} = {}) {
        const baseOptions = {
            where: {
                equipmentConfiguration: {
                    some: {
                        ip_address: ip,
                        mac_address: mac,
                    },
                },
            },
        };

        return this.prisma.equipment.findFirst(
            this.#buildOptions(baseOptions, includeRelations)
        );
    }

    async findByMacAddress(macAddress, {includeRelations = false} = {}) {
        const baseOptions = {
            where: {
                equipmentConfiguration: {
                    some: {
                        mac_address: macAddress,
                    },
                },
            },
        };

        return this.prisma.equipment.findFirst(
            this.#buildOptions(baseOptions, includeRelations)
        );
    }

    async findByIpAddress(ipAddress, {includeRelations = false} = {}) {
        const baseOptions = {
            where: {
                equipmentConfiguration: {
                    some: {
                        ip_address: ipAddress,
                    },
                },
            },
        };

        return this.prisma.equipment.findFirst(
            this.#buildOptions(baseOptions, includeRelations)
        );
    }
}

module.exports = EquipmentRepository;