const { PrismaClient } = require("@prisma/client/extension");
const BaseRepository = require("../../Repositories/BaseRepositories");
const EquipmentSchema = require("./EquipmentSchema");

class EquipmentRepository extends BaseRepository {
  /**
   *
   * @param {PrismaClient} prisma
   */
  constructor(prisma) {
    super("Equipment", prisma);
  }

  async findAll({ includeRelations = false }) {
    const options = {};

    if (includeRelations) {
      options.include = {
        directoryHistorials: true,
        equipmentProfile: {
          include: {
            communicationProfile: true, // Incluir la relación anidada
          },
        },
        parameters: true,
      };
    }

    const equipments = await super.findAll(options);
    return equipments.map(EquipmentSchema.toDomain);
  }
}

module.exports = EquipmentRepository;
