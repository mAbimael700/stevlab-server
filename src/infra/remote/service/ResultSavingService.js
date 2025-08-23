class ResultSavingService {
  constructor({ httpResultRepository }) {
    this.resultRepository = httpResultRepository;
  }

  async saveStreamReceivedResult(result, equipmentId) {
    try {
      return await this.resultRepository.save({
        equipmentId,
        result,
      });
    } catch (error) {
      throw new Error(`[Result] Error saving stream received result: ${error.message}`);
    }
  }
}

module.exports = ResultSavingService;
