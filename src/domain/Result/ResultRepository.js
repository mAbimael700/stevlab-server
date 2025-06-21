const { PrismaClient } = require("../../infra/Prisma/Generated");
const BaseRepository = require("../../Repositories/BaseRepositories");

class ResultRepository extends BaseRepository {
  /**
   *
   * @param {PrismaClient} prisma
   */
  constructor(prisma) {
    super("Result", prisma);
  }

  /**
   * Verifica si existe un resultado con el folio especificado
   * @param {string} folio
   * @returns {Promise<boolean>}
   */
  async existByFolio(folio) {
    const result = await this.prisma.result.findFirst({
      where: { folio },
    });
    return result !== null;
  }

  /**
   * Verifica si existe un resultado con el folio especificado
   * @param {string} folio
   * @returns {Promise<boolean>}
   */
  async findByFolio(folio) {
    const result = await this.prisma.result.findFirst({
      where: { folio },
    });
    return result;
  }

  async updateLastModifiedAt(id, date) {
    await this.update(id, { last_modified_at: date });
  }
}

module.exports = ResultRepository;
