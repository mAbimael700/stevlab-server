

const { PrismaClient } = require('@prisma/client/extension');
const BaseRepository = require('../../Repositories/BaseRepositories');

class EquipmentRepository extends BaseRepository {
    /**
     * 
     * @param {PrismaClient} prisma 
     */
  constructor(prisma) {
    super('Equipment', prisma);
  }

}

module.exports = EquipmentRepository;