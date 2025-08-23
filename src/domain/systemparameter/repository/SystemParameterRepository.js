const BaseRepository = require("@/domain/repository/BaseRepositories");

class SystemParameterRepository extends BaseRepository {
  constructor({ prisma }) {
    super(prisma, "SystemParameter");
  }
}

module.exports = SystemParameterRepository;
