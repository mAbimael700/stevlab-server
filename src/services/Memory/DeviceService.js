const { devicesAreas } = require("../../db/devices-areas");
const {
  writeEquipmentOnServer,
  deleteEquipmentOnServer,
} = require("../../middlewares/equipment/equiment-manager");
const {
  getEquipments,
} = require("../../middlewares/equipment/equipment-helpers");
const { validateDevice } = require("../../schemas/device-schema");
const { IDeviceService } = require("../IDeviceService");

class DeviceService extends IDeviceService {

  constructor() {
    super()

  }
  getDeviceProfiles() {
    const devices = Object.values(devicesAreas).flat()
    return new Promise((resolve) => resolve(devices))
  }

  getDevices() {
    return getEquipments();
  }
  /**
   *
   * @param {string} area
   */
  getDevicesByArea(area) {
    return devicesAreas[area];
  }

  /**
   *
   * @param {string} id
   */
  getDeviceById(id) {
    const device = getEquipments().find(e => e.id_device === id);
    return new Promise((resolve) => resolve(device))
  }

  async save(data) {
    const equipmentsOnServer = getEquipments();
    const result = validateDevice(data);

    if (!result.success) {
      throw new Error("Ocurrió un error en la validación de la información", {
        cause: result.error.errors,
      });
    }

    const existDevice = equipmentsOnServer.some(
      (equiptment) => equiptment.mac_address === result.data?.mac_address
    );

    if (existDevice) {
      throw new Error("Ya existe un equipo registrado con esa dirección MAC");
    }

    return new Promise((resolve) => {
      const savedData = writeEquipmentOnServer(result.data); // Operación síncrona
      resolve(savedData); // Resuelve con el resultado
    });
  }

  delete(id) {
    const equipmentsOnServer = getEquipments();
    if (equipmentsOnServer.some((equiptment) => equiptment.id_device === id)) {
      new Promise((resolve) => {
        deleteEquipmentOnServer(id);
        resolve();
      });
    } else {
      throw new Error("El equipo de laboratorio especificado no existe.");
    }
  }
}

module.exports = { DeviceService };
