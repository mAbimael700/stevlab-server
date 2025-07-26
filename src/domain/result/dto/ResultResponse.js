class ResultResponse {
    /**
     * @param {import("@/infra/Prisma/Generated").Result} result
     */
    constructor(result) {
        this.id = result.id;
        this.createdAt = result.created_at;
        this.folio = result.folio;
        this.sampleId = result.sample_id;
    }
}

module.exports = ResultResponse;
