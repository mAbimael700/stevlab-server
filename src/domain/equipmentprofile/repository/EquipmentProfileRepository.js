const BaseRepository = require("@/domain/repository/BaseRepositories");

class EquipmentProfileRepository extends BaseRepository {
    constructor({prisma}) {
        super("EquipmentProfile", {prisma});
        this.includeOptions = {
            include: {communicationProfile: true}
        }
    }

    async findAllWithIncludeOptions() {
        return super.findAll(this.includeOptions);
    }

}

module.exports = EquipmentProfileRepository;