class ResultSavingService {
  constructor({ resultService }) {
    this.resultService = resultService;
  }

  async saveStreamReceivedResult(result, equipmentId) {
    try {
      return await this.resultService.save(
        result,
        equipmentId
      );
    } catch (error) {
      throw new Error(`Error saving stream received result: ${error.message}`);
    }
  }
}

module.exports = ResultSavingService;
