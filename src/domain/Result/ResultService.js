const { error } = require("winston");
const { ResultSchema } = require("./ResultSchema");

class ResultService {
  constructor(resultRepository, parameterService, histogramResultService) {
    this.resultRepository = resultRepository;
    this.parameterService = parameterService
    this.histogramResultService = histogramResultService
  }

  async saveStreamReceivedResult(result, equipmentId) {
    try {
      const validationResponse = ResultSchema.safeValidate(result);


      if (!validationResponse.success) {
        throw new Error(`Result send is not valid`, error);
      }

      let responseResult = await this.resultRepository.existsByFolio(validationResponse.data.folio)

      if (!responseResult) {
        responseResult = await this.resultRepository.save(validationResponse.data);
      }

      if (validationResponse.histogramResults) {
        await this.histogramResultService.save(validationResponse.data.histogramResults, responseResult.id, equipmentId)
      }

      await this.parameterService.save(validationResponse.parameters, responseResult.id, equipmentId)
      await this.resultRepository.updateLastModifiedAt(responseResult.id, new Date())
    } catch (error) {
      throw new Error(`Ocurrió un error al guardar los resultados ${error.message}`, error);
    }
  }


}

module.exports = ResultService;
