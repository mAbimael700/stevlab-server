const { Router } = require("express");
const messageRouter = Router();
const { MessageController } = require("../controllers/message.controller");
const { MulterInitializer } = require("../../middlewares/multer-initializer");

//Inicializacion de multer
const upload = MulterInitializer();

messageRouter.post("/", upload.array("file", 10), MessageController.saveMessage);

module.exports = {
  messageRouter,
};
