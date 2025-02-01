const { Router } = require("express");
const devicesRouter = Router();

const { DevicesController } = require("../controllers/devices.controller");

devicesRouter.get("/", DevicesController.getDevicesOnServer);
devicesRouter.get("/ports/com", DevicesController.getSerialCOMPorts);
devicesRouter.get("/:area", DevicesController.getDevicesByArea);
devicesRouter.patch("/", DevicesController.setDeviceToStorage);
devicesRouter.delete("/:mac_address", DevicesController.removeDeviceToStorage);
devicesRouter.get("/test/:id_device", DevicesController.testDeviceOnNetwork);
module.exports = {
  devicesRouter,
};
