const {
  closeFTP,
} = require("../../middlewares/connections/ftp/ftp-connection");
const {
  getAvailableCOMPorts,
  testSerialDevice,
} = require("../../middlewares/connections/serial/serial-helpers");
const {
  testTcpDevice,
  closeTCP,
} = require("../../middlewares/connections/tcp-ip/tcp-helpers");

const {
  getEquipmentById,
} = require("../../middlewares/equipment/equipment-helpers");
const { IDeviceService } = require("../../services/IDeviceService");

class DevicesController {
  /**
   *
   * @param {IDeviceService} deviceService
   */
  constructor(deviceService) {
    this.service = deviceService;
  }

  getDevicesByArea(req, res) {
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

  getDevicesOnServer = (req, res) => {
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

  static async closeConnection(req, res) {
    const { id_device } = req.params;

    const device = getEquipmentById(id_device);
    if (device) {
      try {
        if (device.require_ftp_conn) {
          closeFTP(device.mac_address);
        } else if (device.require_serial_conn) {
        } else {
          closeTCP(device);
        }

        return res.status(200).json({
          status: 200,
          body: {
            message:
              "La conexión del dispositivo ha sido cerrada satisfactoriamente del servidor",
          },
        });
      } catch (error) {
        console.log(error);

        return res.status(400).json({
          status: 400,
          body: { message: error.message },
        });
      }
    } else {
      return res.status(404).json({
        status: 404,
        body: { message: "No existe el equipo proporcionado" },
      });
    }
  }
}

module.exports = {
  DevicesController,
};
