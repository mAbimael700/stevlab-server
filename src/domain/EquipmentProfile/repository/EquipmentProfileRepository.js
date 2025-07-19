const BaseRepository = require("@/domain/repository/BaseRepositories");

class EquipmentProfileRepository extends BaseRepository {
    constructor(prisma) {
        super("EquipmentProfile", prisma);
    }
}

module.exports = EquipmentProfileRepository;