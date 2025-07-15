const { PrismaClient } = require("@/infra/Prisma/Generated");
class BaseRepository {
  /**
   *
   * @param {string} modelName
   * @param {PrismaClient} prisma
   */
  constructor(modelName, prisma) {
    this.model = modelName;
    this.prisma = prisma;
  }

  async create(data) {
    return this.prisma[this.model].create({ data });
  }

  async findById(id, options) {
    return this.prisma[this.model].findUnique({ where: { id }, ...options });
  }

  async findAll(options = {}) {
    return this.prisma[this.model].findMany(options);
  }

  async update(id, data) {
    return this.prisma[this.model].update({ where: { id }, data });
  }

  async delete(id) {
    return this.prisma[this.model].delete({ where: { id } });
  }
}

module.exports = BaseRepository;
