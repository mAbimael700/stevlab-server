const BaseRepository = require("@/domain/repository/BaseRepositories");

class EquipmentConfigurationRepository extends BaseRepository {

    constructor(prisma) {
        super("EquipmentConfiguration", prisma);
    }

}

module.exports = EquipmentConfigurationRepository