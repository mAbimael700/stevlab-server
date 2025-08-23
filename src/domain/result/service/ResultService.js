const {ResultSchema} = require("../schema/ResultSchema");

class ResultService {
    constructor({resultRepository, parameterService, histogramResultService}) {
        this.resultRepository = resultRepository;
        this.parameterService = parameterService;
        this.histogramResultService = histogramResultService;
    }

    /**
     *
     * @return {Promise<ResultWithParametersAndEquipment[]>}
     * */
    async getAll() {
        return await this.resultRepository.findAll();
    }

    /**
     *
     * @param id {bigint}
     * @return {Promise<Result[]>}
     */
    async getById(id) {
        return await this.resultRepository.findById(id);
    }

    /**
     *
     * @param folio {string}
     * @return {Promise<ResultWithParametersAndEquipment[]>}
     */
    async getByFolio(folio) {
        return await this.resultRepository.findByFolio(folio);
    }

    async getByIdWithParameters(id) {
        return await this.resultRepository.findByIdWithParameters(id)
    }

    async save(result, equipmentId) {
        try {
            let responseResult = await this.resultRepository.findByFolio(
                result.folio
            );

            if (!responseResult) {
                responseResult = await this.resultRepository.create({
                    created_at: result.created_at,
                    folio: result.folio,
                    sample_id: result.sample_id,
                    last_modified_at: new Date(),
                    active: true,
                });
            }

            if (result.histogramResults) {
                await this.histogramResultService.create(
                    result.histogramResults,
                    responseResult.id,
                    equipmentId
                );
            }

            const parametersResult = await Promise.allSettled(
                result.parameters.map(
                    async (parameter) =>
                        await this.parameterService.save(
                            parameter,
                            equipmentId,
                            responseResult.id)
                )
            );

            if (parametersResult.some(
                (pr) => pr.status === "rejected")) {
                console.error("Parametros no subidos de forma completa");
            }

            await this.resultRepository.updateLastModifiedAt(
                responseResult.id,
                new Date()
            );

        } catch (error) {
            console.log(error)
            throw new Error(`Ocurrió un error al guardar los resultados ${error.message}`);
        }
    }

}

module.exports = ResultService;
