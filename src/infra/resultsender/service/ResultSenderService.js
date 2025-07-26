const ResultSendRequest = require("@/domain/result/dto/ResultSendRequest");
const apiResultSenderService = require("@/infra/resultsender/http/service/ApiResultSenderService");

class ResultSenderService {

    constructor(dependencies = {}) {
        this.resultSendService = dependencies.resultSendService;
        this.resultService = dependencies.resultService
        this.client = apiResultSenderService
    }

    async sendResultById(resultId) {
        let resultSendId;
        try {
            const result = await this.resultService.getByIdWithParameters(resultId)

            if (!result) {
                throw new Error("Does not exist result with id " + resultId);
            }

            const resultRequest = new ResultSendRequest(result)

            const pendingResultSend = await this.resultSendService.savePending({
                result_id: resultId,
                payload: resultRequest
            });

            resultSendId = pendingResultSend.id;

            const response = await this.client.sendResult(resultRequest)

            await this.resultSendService.updateStatus(
                resultSendId,
                'SUCCESS',
                response.data
            );

        } catch (e) {
            if (resultSendId) {
                await this.resultSendService.saveError({
                    result_id: resultId
                }, e);

            } else {
                // Si no se pudo crear el registro inicial, crear uno con error
                await this.resultSendService.saveError({
                    result_id: resultId,
                }, e);
            }

            throw new Error(`Error sending result with id ${resultId}: ${e.message}`);
        }
    }

}

module.exports = ResultSenderService;