class ResultSendService {
    constructor(dependencies) {
        this.resultSendRepository = dependencies.resultSendRepository;
    }

    async saveSuccessful(data) {
        const resultSend = {
            result_id: data.result_id,
            send_by: data.send_by || null,
            send_at: new Date(),
            status: 'SUCCESS',
            payload: data.payload || null,
            response: data.response || null
        };

        return await this.resultSendRepository.create(resultSend);
    }

    async saveError(data, error) {
        const resultSend = {
            result_id: data.result_id,
            send_by: data.send_by || null,
            send_at: new Date(),
            status: 'ERROR',
            payload: data.payload || null,
            response: {
                error: error.message,
                stack: error.stack
            }
        };

        return await this.resultSendRepository.create(resultSend);
    }

    async savePending(resultSendData) {
        const resultSend = {
            result_id: resultSendData.result_id,
            send_by: resultSendData.send_by || null,
            send_at: new Date(),
            status: 'PENDING',
            payload: resultSendData.payload || null,
            response: null
        };

        return await this.resultSendRepository.create(resultSend);
    }

    async updateStatus(id, status, response = null) {
        return await this.resultSendRepository.update(id, {
            status,
            response,
            send_at: new Date()
        });
    }

    async getByResultId(resultId) {
        return await this.resultSendRepository.findByResultId(resultId);
    }

    async getById(id) {
        return await this.resultSendRepository.findById(id);
    }
}

module.exports = ResultSendService;