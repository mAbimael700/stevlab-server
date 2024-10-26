
const { validateParser } = require("../../lib/validate-buffer");
const { saveResultsToLocalData } = require("../../lib/save-results-data");
const { emitResultsToWebSocket } = require("../../lib/emit-results-websocket");
const { validateResponse } = require("../../schemas/response-schema");


class MessageController {
  static saveMessage(req, res) {


    try {
      if (!req.files) {
        return res
          .status(400)
          .json({ status: 400, message: "No se ha subido ningún archivo." });
      }


      Array.from(req.files).forEach((file) => {
        const { parser } = validateParser({ id_device: req.body.device });

        const fileBuffer = file.buffer;

        const fileContent = fileBuffer.toString();
        const parsedContent = parser(fileContent);


        console.log("Resultados enviados...");

        const validatedResponse = validateResponse(parsedContent)

        if (validatedResponse) {
          saveResultsToLocalData(parsedContent);
          emitResultsToWebSocket(parsedContent)
        }
      });

      res
        .status(200)
        .json({ status: 200, message: "Archivo recibido exitosamente." });
    } catch (error) {
      res.status(500).json({ status: 500, error: error.message });
    }
  }
}

module.exports = { MessageController };
