const {ResultSchema} = require("../ResultSchema");

class ResultService {
    constructor(resultRepository, parameterService, histogramResultService) {
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
        return await this.resultRepository.findByFolioWithHistorial(folio);
    }

    async saveStreamReceivedResult(result, equipmentId) {
        try {
            const validationResponse = ResultSchema.safeValidate(result);

            if (!validationResponse.success) {
                throw new Error(`Result send is not valid`);
            }

            let responseResult = await this.resultRepository.findByFolio(
                validationResponse.data.folio
            );

            if (!responseResult) {
                responseResult = await this.resultRepository.create({
                    created_at: validationResponse.data.created_at,
                    folio: validationResponse.data.folio,
                    sample_id: validationResponse.data.sample_id,
                    last_modified_at: new Date(),
                    active: true,
                });
            }

            if (validationResponse.data.histogramResults) {
                await this.histogramResultService.create(
                    validationResponse.data.histogramResults,
                    responseResult.id,
                    equipmentId
                );
            }

            const parametersResult = await Promise.allSettled(
                validationResponse.data.parameters.map(
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
            throw new Error(`Ocurrió un error al guardar los resultados ${error.message}`);
        }
    }

}

module.exports = ResultService;
