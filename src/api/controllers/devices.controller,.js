const { devicesAreas } = require("../../db/devices-areas");

class DevicesController {
  static getDevicesByArea(req, res) {
    const { area } = req.params;

    if (area) {
      const devices = devicesAreas[area];

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
}

module.exports = {
  DevicesController,
};
