const { validateParser } = require("../../lib/validate-buffer");
const { getIO } = require("../../middlewares/websocket-server");

class MessageController {
  static saveMessage(req, res) {
    const io = getIO();
    try {
      if (!req.files) {
        return res
          .status(400)
          .json({ status: 400, message: "No se ha subido ningún archivo." });
      }

      try {
        Array.from(req.files).forEach((file) => {
          const { parser } = validateParser({ id_device: req.body.device });

          const fileBuffer = file.buffer;
          const fileName = file.originalname;

          const fileContent = fileBuffer.toString();
          const parsedContent = parser(fileContent);

          console.log("Resultados enviados...");
          if (io) {
            
            io.emit("labResultsMessage", { data: JSON.stringify(parsedContent) });
          }
        });
      } catch (error) {}
      res
        .status(200)
        .json({ status: 200, message: "Archivo recibido exitosamente." });
    } catch (error) {
      res.status(500).json({ status: 500, error: error.message });
    }
  }
}

module.exports = { MessageController };
