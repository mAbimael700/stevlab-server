const { Router } = require("express");
const devicesRouter = Router();

const { DevicesController } = require("../controllers/devices.controller,");

devicesRouter.get("/:area", DevicesController.getDevicesByArea);

module.exports = {
  devicesRouter,
};
