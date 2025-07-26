class ResultResponse {
    /**
     * @param {import("@/infra/prisma/generated").Result} result
     */
    constructor(result) {
        this.id = Number(result.id);
        this.createdAt = result.created_at;
        this.folio = result.folio;
        this.sampleId = result.sample_id;
    }
}

module.exports = ResultResponse;
