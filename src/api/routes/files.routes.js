const { Router } = require("express");
const filesRouter = Router();
const { FilesController } = require("../controllers/files.controller");

filesRouter.get("/", FilesController.getFiles);

module.exports = {
  filesRouter,
};
