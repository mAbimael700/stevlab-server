const { Router } = require("express");
const devicesRouter = Router();

const { DevicesController } = require("../controllers/devices.controller");
const { DeviceService } = require("../../services/Memory/DeviceService");
const { CommunicationController } = require("../controllers/communication.controller");

const service = new DeviceService();
const controller = new DevicesController(service);

devicesRouter.get("/", controller.getDevicesOnServer);
devicesRouter.get("/profiles", controller.getDeviceProfiles)
devicesRouter.get("/:id", controller.getDeviceById);
devicesRouter.patch("/", controller.save);
devicesRouter.delete("/:id", controller.remove);

devicesRouter.get("/ports/com", CommunicationController.getSerialCOMPorts);
devicesRouter.get("/test/:id_device", CommunicationController.testDeviceOnNetwork);
devicesRouter.delete(
  "/connection/:id_device",
  CommunicationController.closeConnection
);

module.exports = {
  devicesRouter,
};
