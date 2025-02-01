const { devicesAreas } = require("../../db/devices-areas");
const {
  getAvailableCOMPorts,
  testSerialDevice,
} = require("../../middlewares/connections/serial/serial-helpers");
const {
  testTcpDevice,
} = require("../../middlewares/connections/tcp-ip/tcp-helpers");
const {
  getEquipments,
  deleteEquipmentOnServer,
  writeEquipmentOnServer,
} = require("../../middlewares/equipment/equiment-manager");
const {
  getEquipmetEmitter,
} = require("../../middlewares/equipment/equipment-events");
const {
  getEquipmentById,
} = require("../../middlewares/equipment/equipment-helpers");
const { validateDevice } = require("../../schemas/device-schema");

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

    const result = validateDevice(data);
    const existDevice = equipmentsOnServer.some(
      (equiptment) => equiptment.mac_address === result.data?.mac_address
    );

    if (!result.success) {
      return res.status(400).json({
        status: 400,
        error: result.error.errors,
      });
    }

    if (existDevice) {
      return res.status(400).json({
        status: 400,
        error: "El equipo de laboratorio ya está registrado",
      });
    }

    writeEquipmentOnServer(result.data);

    return res.status(201).json({
      status: 201,
      message: "El equipo de laboratorio se ha registrado con éxito.",
      body: result.data,
    });
  }

  static removeDeviceToStorage(req, res) {
    const { id_device } = req.params;
    const equipmentsOnServer = getEquipments();
    if (
      equipmentsOnServer.some(
        (equiptment) => equiptment.id_device === id_device
      )
    ) {
      deleteEquipmentOnServer(id_device);

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

  static getSerialCOMPorts(req, res) {
    // Uso de la función
    getAvailableCOMPorts()
      .then((ports) => {
        if (ports.length === 0) {
          return res.status(400).json({
            status: 400,
            message: "No se encontraron puertos COM disponibles",
          });
        } else {
          return res.status(200).json({
            status: 200,
            body: {
              data: ports,
            },
          });
        }
      })
      .catch((err) =>
        res.status(400).json({
          status: 400,
          error:
            "Hubo un error al consultar los puertos COM del equipo: " +
            err.message,
        })
      );
  }

  static async testDeviceOnNetwork(req, res) {
    const { id_device } = req.params;
    const deviceFounded = getEquipmentById(id_device);
    let hasConnection = false;

    try {
      if (deviceFounded) {
        const { require_serial_conn, require_ftp_conn } = deviceFounded;

        if (require_serial_conn) {
          hasConnection = await testSerialDevice(id_device);
        } else if (require_ftp_conn) {
        } else {
          hasConnection = testTcpDevice(id_device);
        }

        if (hasConnection) {
          return res.status(200).json({
            status: 200,
            body: { message: "El dispositivo tiene conexión con el servidor" },
          });
        }

        return res.status(400).json({
          status: 400,
          body: { message: "El dispositivo no tiene conexión con el servidor" },
        });
      } else {
        return res.status(404).json({
          status: 404,
          error:
            "El dispositivo proporcionado no está registrado en el servidor.",
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }
}

module.exports = {
  DevicesController,
};
