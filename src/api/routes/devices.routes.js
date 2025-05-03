const { Router } = require("express");
const devicesRouter = Router();

const { DevicesController } = require("../controllers/devices.controller");
const { DeviceService } = require("../../services/Memory/DeviceService");

const service = new DeviceService();
const controller = new DevicesController(service);

devicesRouter.get("/", controller.getDevicesOnServer);
devicesRouter.get("/ports/com", DevicesController.getSerialCOMPorts);
devicesRouter.get("/:area", controller.getDevicesByArea);
devicesRouter.patch("/", controller.save);
devicesRouter.delete("/:id", controller.remove);
devicesRouter.get("/test/:id_device", DevicesController.testDeviceOnNetwork);
devicesRouter.delete(
  "/connection/:id_device",
  DevicesController.closeConnection
);

module.exports = {
  devicesRouter,
};
