class HistogramResultService {
    constructor({histogramResultRepository}) {
        this.histogramResultRepository = histogramResultRepository
    }

    async save(histogramResult, resultId, equipmentId) {
        const data = {
            ...histogramResult,
            result_id: resultId,
            equipment_id: equipmentId
        }

        return await this.histogramResultRepository.save(data)
    }
}

module.exports = HistogramResultService