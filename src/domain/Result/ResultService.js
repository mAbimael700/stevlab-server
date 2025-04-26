const { ResultSchema } = require("../Schema/ResultSchema");

class ResultService {
  constructor(resultRepository, parametrosRepository) {
    this.resultRepository = resultRepository;
    this.parametrosRepository = parametrosRepository;
  }

  async save(result) {
    try {
      const response = ResultSchema.validate(result);
      const savedResult = await this.resultRepository.save(response.data);
      await this.parametrosRepository.updateParametrosByResult(savedResult.id);
    } catch (error) {
      throw new Error("Ocurrió un error al guardar los resultados", error);
    }
  }
}

module.exports = {
  ResultService,
};
