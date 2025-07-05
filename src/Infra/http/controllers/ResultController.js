class ResultController {
  /**
   *
   * @param {IEquipmentService} resultService
   */
  constructor(resultService) {
    this.service = resultService;
    this.configureController();
  }

  async getAll(req, res) {
    try {
      const results = await this.service.getAll();
      return res.status(200).json({
        content: results,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Hubo un error al consultar todos los resultados.",
      });
    }
  }

async getLatests(req, res) {
    try {
      const results = await this.service.getLatests();
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
    const { id } = req.params;

    try {
      const result = await this.service.getById(id);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).json({
        message: "No se encontró el resultado con esa Id",
      });
    }
  }


  async remove(req, res) {
    const { id } = req.params;

    try {
      await this.service.delete(id);
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
    this.remove = this.remove.bind(this);
  }
}

module.exports = ResultController;
