const { devicesAreas } = require("../../db/devices-areas");
const {
  equipmentsOnServer,
  getEquipments,
  deleteEquipmentOnServer,
  writeEquipmentOnServer,
} = require("../../middlewares/equiment-manager");

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

  static getDevicesOnServer(req, res) {
    const equipmentsOnServer = getEquipments();

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
  }

  static setDeviceToStorage(req, res) {
    const { data } = req.body;
    const equipmentsOnServer = getEquipments();
    if (
      equipmentsOnServer.some(
        (equiptment) => equiptment.mac_address === data.mac_address
      )
    ) {
      return res.status(400).json({
        status: 400,
        message: "El equipo de laboratorio ya está registrado",
      });
    }

    writeEquipmentOnServer(data);

    return res.status(201).json({
      status: 201,
      message: "El equipo de laboratorio se ha registrado con éxito.",
    });
  }

  static removeDeviceToStorage(req, res) {
    const { mac_address } = req.params;
    const equipmentsOnServer = getEquipments();
    if (
      equipmentsOnServer.some(
        (equiptment) => equiptment.mac_address === mac_address
      )
    ) {
      deleteEquipmentOnServer(mac_address);

      return res.status(200).json({
        status: 200,
        message: "El equipo de laboratorio se ha eliminado con éxito.",
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: "El equipo de laboratorio especificado no existe.",
      });
    }
  }
}

module.exports = {
  DevicesController,
};
