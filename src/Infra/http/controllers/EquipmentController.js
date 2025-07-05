class EquipmentController {
  /**
   *
   * @param {IEquipmentService} equipmentService
   */
  constructor(dependencies = {}) {

    this.equipmentService = dependencies.equipmentService;
    this.rawResultsService = dependencies.rawResultsService

    this.configureController();
  }

  async getAll(req, res) {
    try {
      const equipments = await this.equipmentService.getAll();
      return res.status(200).json({
        content: equipments,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Hubo un error al consultar todos los equipos.",
      });
    }
  }

  async save(req, res) {
    try {
      const data = req.body;
      const result = await this.equipmentService.save(data);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(403).json({
        error: error.message,
        cause: error.cause,
      });
    }
  }

  async getById(req, res) {
    const { id } = req.params;

    try {
      const equipment = await this.equipmentService.getById(id);

      return res.status(200).json(equipment);
    } catch (error) {
      return res.status(404).json({
        message: "No se encontró el equipo con esa Id",
      });
    }
  }


  async updateById(req, res) {
    const { id } = req.params;

    try {
      const result = await this.equipmentService.updateById(id);
      return res.status(200);
    } catch (error) {
      return res.status(403).json({
        error: error.message,
        cause: error.cause,
      });
    }
  }

  async deactivateById(req, res) {
    const { id } = req.params;

    try {
      await this.equipmentService.deactivate(id);
      return res.status(200);
    } catch (error) {
      return res.status(403).json({
        message: error.message,
      });
    }
  }


  async getRawResultsByEquipmentId(req, res) {
    try {
      const { id } = req.params
      const rawResults = await this.rawResultsService.getByEquipmentId(id);
      return res.status(200).json({
        content: rawResults,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Hubo un error al consultar todos los equipos.",
      });
    }
  }

  async getLatestRawResultsByEquipmentId(req, res) {
    try {
      const { id } = req.params
      const rawResults = await this.rawResultsService.getLatestRawResultsByEquipmentId(id);
      return res.status(200).json({
        content: rawResults,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Hubo un error al consultar todos los equipos.",
      });
    }
  }

  configureController() {
    this.getAll = this.getAll.bind(this);
    this.save = this.save.bind(this);
    this.getById = this.getById.bind(this);
    this.updateById = this.updateById.bind(this)
    this.deactivateById = this.deactivateById.bind(this);
    this.getRawResultsByEquipmentId = this.getRawResultsByEquipmentId.bind(this)
    this.getLatestRawResultsByEquipmentId = this.getLatestRawResultsByEquipmentId.bind(this)
  }
}

module.exports = EquipmentController;
