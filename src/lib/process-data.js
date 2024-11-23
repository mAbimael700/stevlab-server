const { verifyDevices } = require("../middlewares/equipment-helpers");
const { validateResponse } = require("../schemas/response-schema");
const { emitResultsToWebSocket } = require("./emit-results-websocket");
const { getMacAddress } = require("./getMacAddress");
const { saveResultsToLocalData } = require("./save-results-data");
const { validateParser } = require("./validate-buffer");

async function processData(device, message) {
  //Obtenemos la dirección MAC del equipo conectado

  try {
    let currentRemoteMacAddress = await getMacAddress(device.ip_address);
    if (!currentRemoteMacAddress) {
      console.log(
        "No se encontró la dirección MAC, no se puede verificar el equipo."
      );
      return;
    }

    /*const existeEquipo = verifyDevices(device.mac_address)

    // Si el equipo en la conexión no está registrado termina el evento
     if (!existeEquipo) {
      console.warn(`El equipo con dirección IP ${device.ip_address} no registrado. Conexión cerrada`);
      return;
    } */

    // Devuelve la función parser que le corresponde al equipo y el carácter delimitador
    const { parser } = validateParser({
      id_device: device.id,
    });

    if (parser) {
      const results = parser(message);

      // Valida que el mensaje parseado sea correcto
      const resultValidated = validateResponse(results);

      //En caso de que el mensaje parseado sea válido lo guarda en un JSON
      if (resultValidated) {
        // Emite a través de Socket.io
        emitResultsToWebSocket(results);
        saveResultsToLocalData(results);
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  processData,
};
