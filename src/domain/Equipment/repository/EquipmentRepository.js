const BaseRepository = require("../../repository/BaseRepositories");

class EquipmentRepository extends BaseRepository {
  /**
   *
   * @param {PrismaClient} prisma
   */
  constructor(prisma) {
    super("Equipment", prisma);
  }

  async findAll({ includeRelations = false }) {
    const options = {
      where: {
        active: true,
      },
    };

    if (includeRelations) {
      options.include = {
        equipmentProfile: {
          include: {
            communicationProfile: true, // Incluir la relación anidada
          },
        },
        equipmentConfiguration: true,
      };
    }

    const equipments = await super.findAll(options);
    return equipments;
  }

  async findById({ includeRelations = false }) {
    const options = {};

    if (includeRelations) {
      options.include = {
        equipmentProfile: {
          include: {
            communicationProfile: true, // Incluir la relación anidada
          },
        },
        equipmentConfiguration: true,
      };
    }
    const equipment = await super.findById(options);
    return equipment;
  }

  // Función para buscar por MAC Address
  async findByMacAddress(macAddress, { includeRelations = false } = {}) {
    const options = {
      where: {
        equipmentConfiguration: {
          some: {
            mac_address: macAddress,
          },
        },
      },
    };

    if (includeRelations) {
      options.include = {
        equipmentProfile: {
          include: {
            communicationProfile: true, // Incluir la relación anidada
          },
        },
        equipmentConfiguration: true,
      };
    }

    const equipment = await this.prisma.equipment.findFirst(options);
    return equipment;
  }

  // Función para buscar por IP Address
  async findByIpAddress(ipAddress, { includeRelations = false } = {}) {
    const options = {
      where: {
        equipmentConfiguration: {
          some: {
            ip_address: ipAddress,
          },
        },
      },
    };

    if (includeRelations) {
      options.include = {
        equipmentProfile: {
          include: {
            communicationProfile: true, // Incluir la relación anidada
          },
        },
        equipmentConfiguration: true,
      };
    }

    const equipment = await this.prisma.equipment.findFirst(options);
    return equipment;
  }
}

module.exports = EquipmentRepository;
