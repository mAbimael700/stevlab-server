const { ResultSchema } = require("./ResultSchema");

class ResultService {
  constructor(resultRepository) {
    this.resultRepository = resultRepository;
  }

  async save(result) {
    try {
      const response = ResultSchema.validate(result);
      const savedResult = await this.resultRepository.save(response.data);
      await this.resultRepository.updateParametrosByResultId(savedResult.id);
    } catch (error) {
      throw new Error("Ocurrió un error al guardar los resultados", error);
    }
  }
}

module.exports = {
  ResultService,
};
