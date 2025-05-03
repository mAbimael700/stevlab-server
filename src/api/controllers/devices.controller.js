const { IDeviceService } = require("../../services/IDeviceService");

class DevicesController {
  /**
   *
   * @param {IDeviceService} deviceService
   */
  constructor(deviceService) {
    this.service = deviceService;
    this.configureController()
  }

  async getDeviceProfiles(req, res) {
    try {
      const devices = await this.service.getDeviceProfiles()
      return res.status(200).json({
        status: 200,
        body: { data: devices },
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "Hubo un error al consultar todos los equipos.",
      });
    }
  }

  async getDevicesByArea(req, res) {
    const { area } = req.params;

    if (area) {
      const devices = this.service.getDeviceProfiles();

      if (!devices) {
        return res.status(404).json({
          status: 404,
          message: "No se encontraron equipos en esta area.",
        });
      }

      return res.status(200).json({
        status: 200,
        body: { data: devices },
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: "No se especificó ningún area.",
      });
    }
  }

  async getDeviceById(req, res) {
    const { id } = req.params

    try {
      const device = await this.service.getDeviceById(id)
      
      return res.status(200).json({
        status: 200,
        body: { data: device },
      });
    } catch (error) {
      return res.status(404).json({
        status: 404,
        message: "No se encontró el equipo con esa Id",
      });
    }
  }

  getDevicesOnServer(req, res) {
    const equipmentsOnServer = this.service.getDevices();

    if (equipmentsOnServer.length > 0) {
      return res.status(200).json({
        status: 200,
        body: {
          data: equipmentsOnServer,
        },
      });
    }

    return res.status(404).json({
      status: 404,
      message: "No se encontrarón equipos registrados en el servidor.",
    });
  };

  async save(req, res) {
    const { data } = req.body;

    try {
      const result = await this.service.save(data);

      return res.status(201).json({
        status: 201,
        message: "El equipo de laboratorio se ha registrado con éxito.",
        body: result,
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        error: error.message,
        cause: error.cause,
      });
    }
  }

  async remove(req, res) {
    const { id } = req.params;

    try {
      await this.service.delete(id);
      return res.status(200).json({
        status: 200,
        message: "El equipo de laboratorio se ha eliminado con éxito.",
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: error.message,
      });
    }
  }


  configureController() {
    this.getDevicesOnServer = this.getDevicesOnServer.bind(this);
    this.getDeviceProfiles = this.getDeviceProfiles.bind(this);
    this.getDevicesByArea = this.getDevicesByArea.bind(this);
    this.getDeviceById = this.getDeviceById.bind(this);
    this.save = this.save.bind(this);
    this.remove = this.remove.bind(this);
  }
}

module.exports = {
  DevicesController,
};
