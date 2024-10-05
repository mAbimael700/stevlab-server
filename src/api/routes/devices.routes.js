const { Router } = require("express");
const devicesRouter = Router();

const { DevicesController } = require("../controllers/devices.controller,");

devicesRouter.get("/:area", DevicesController.getDevicesByArea);
devicesRouter.patch("/", DevicesController.setDeviceToStorage)
devicesRouter.delete("/:mac_address", DevicesController.removeDeviceToStorage)
module.exports = {
  devicesRouter,
};
