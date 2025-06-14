const BaseRepository = require("../../Repositories/BaseRepositories");

class HistogramResultRepository extends BaseRepository {
    constructor(prisma) {
        super("HistogramResult", prisma)
    }
}

module.exports = HistogramResultRepository