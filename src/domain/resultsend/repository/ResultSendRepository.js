const BaseRepository = require("@/domain/repository/BaseRepositories");

class ResultSendRepository extends BaseRepository {
    constructor({prisma}) {
        super("ResultSend", prisma);
    }

    async findByResultId(resultId) {
        return this.prisma.resultSend.findMany({
            where: {result_id: resultId}
        })
    }
}

module.exports = ResultSendRepository