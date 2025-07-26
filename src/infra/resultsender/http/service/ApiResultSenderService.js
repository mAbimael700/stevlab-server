const httpClient = require("@/infra/resultsender/http/client/HttpClient");

class ApiResultSenderService {

    constructor() {
        this.endpoint = '/msg-parse';
    }

    static getInstance() {
        if (!ApiResultSenderService.instance) {
            ApiResultSenderService.instance = new ApiResultSenderService();
        }
        return ApiResultSenderService.instance;
    }

    async sendResult(resultRequest) {
        return await httpClient.post(this.endpoint, {body: {data: resultRequest}});
    }
}

module.exports = ApiResultSenderService.getInstance();