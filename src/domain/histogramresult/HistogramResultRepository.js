const BaseRepository = require("../repository/BaseRepositories");

class HistogramResultRepository extends BaseRepository {
    constructor(prisma) {
        super("HistogramResult", {prisma})
    }
}

module.exports = HistogramResultRepository