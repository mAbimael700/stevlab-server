class ResultController {
  /**
   *
   * @param {IEquipmentService} resultService
   */
  constructor(dependencies = {}) {
    this.resultService = dependencies.resultService;
    this.parameterService = dependencies.parameterService
    this.senderService = dependencies.senderService
    this.configureController();
  }

  async getAll(req, res) {
    try {
      const results = await this.resultService.getAll();
      return res.status(200).json({
        content: results,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Hubo un error al consultar todos los resultados.",
      });
    }
  }

  async getLatest(req, res) {
    try {
      const results = await this.resultService.getLatests();
      return res.status(200).json({
        content: results,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Hubo un error al consultar todos los resultados.",
      });
    }
  }


  async getById(req, res) {
    const { resultId } = req.params;

    try {
      const result = await this.resultService.getById(resultId);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).json({
        message: "No se encontró el resultado con esa Id",
      });
    }
  }


  async getResultParametersByResultId(req, res) {
    const { resultId } = req.params;

    try {
      const parameters = await this.resultService.getParametersByResultId(resultId);

      return res.status(200).json({ content: parameters });
    } catch (error) {
      return res.status(404).json({
        message: "No se encontró el resultado con esa Id",
      });
    }
  }


  async setResultParameterActive(req, res) {
    const { resultId } = req.params;

    try {
      await this.parameterService.activateByResultId(resultId);
      return res.status(200);
    } catch (error) {
      return res.status(403).json({
        message: error.message,
      });
    }
  }

  async setResultParameterInactive(req, res) {
    const { resultId } = req.params;

    try {
      await this.parameterService.deactivateByResultId(resultId);
      return res.status(200);
    } catch (error) {
      return res.status(403).json({
        message: error.message,
      });
    }
  }

  async sendResultById(req, res) {
    const { resultId } = req.params;

    try {
      await this.senderService.sendResultById(resultId);
      return res.status(200);
    } catch (error) {
      return res.status(403).json({
        message: error.message,
      });
    }
  }

  configureController() {
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.getLatest = this.getLatest.bind(this);
    this.getResultParametersByResultId = this.getResultParametersByResultId.bind(this)
    this.setResultParameterActive = this.setResultParameterActive.bind(this)
    this.setResultParameterInactive = this.setResultParameterInactive.bind(this)
    this.sendResultById = this.sendResultById.bind(this)
  }
}

module.exports = ResultController;
