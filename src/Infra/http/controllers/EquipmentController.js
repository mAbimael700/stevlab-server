class EquipmentController {
  /**
   *
   * @param {IEquipmentService} equipmentService
   */
  constructor(equipmentService) {
    this.service = equipmentService;
    this.configureController();
  }

  async getAll(req, res) {
    try {
      const equipments = await this.service.getAll();
      return res.status(200).json({
        content: equipments,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Hubo un error al consultar todos los equipos.",
      });
    }
  }

  async getById(req, res) {
    const { id } = req.params;

    try {
      const equipment = await this.service.getById(id);

      return res.status(200).json(equipment);
    } catch (error) {
      return res.status(404).json({
        message: "No se encontró el equipo con esa Id",
      });
    }
  }

  async save(req, res) {
    const data = req.body;

    try {
      const result = await this.service.save(data);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(403).json({
        error: error.message,
        cause: error.cause,
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
    this.getDevicesOnServer = this.getDevicesOnServer.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getDevicesByArea = this.getDevicesByArea.bind(this);
    this.getById = this.getById.bind(this);
    this.save = this.save.bind(this);
    this.remove = this.remove.bind(this);
  }
}

module.exports = EquipmentController;
