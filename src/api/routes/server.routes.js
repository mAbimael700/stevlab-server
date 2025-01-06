const { Router } = require("express");
const serverRouter = Router();
const { ServerController } = require("../controllers/server.controller");

serverRouter.get("/", ServerController.getServerInformation);
serverRouter.get("/interfaces", ServerController.getNetworkInterfaces);

module.exports = {
    serverRouter,
};
