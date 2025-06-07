const { PrismaClient } = require("@prisma/client/extension");
const BaseRepository = require("../../Repositories/BaseRepositories");

class EquipmentRepository extends BaseRepository {
  /**
   *
   * @param {PrismaClient} prisma
   */
  constructor(prisma) {
    super("Equipment", prisma);
  }

  async findAll({ includeRelations = false, }) {
    const options = {};

    if (includeRelations) {
      options.include = {
        equipmentProfile: {
          include: {
            communicationProfile: true, // Incluir la relación anidada
          },
        },
        equipmentConfiguration: true
      };

    }

    const equipments = await super.findAll(options);
    return equipments
  }


  async findById({ includeRelations = false, }) {
    const options = {};

    if (includeRelations) {
      options.include = {
        equipmentProfile: {
          include: {
            communicationProfile: true, // Incluir la relación anidada
          },
        },
        equipmentConfiguration: true
      };
    }
    const equipment = await super.findById(options);
    return equipment
  }
}

module.exports = EquipmentRepository;
