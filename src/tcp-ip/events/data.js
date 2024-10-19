const fs = require("node:fs");
const path = require("node:path");
const { format } = require("date-fns");
const bl = require("bl");
const { DATADIR } = require("../../constants/DATADIR");
const { verifyDevices } = require("../../lib/verify-devices");
const { getMacAddress } = require("../../lib/getMacAddress");
const { validateParser } = require("../../lib/validate-buffer");
const { validateResponse } = require("../../lib/parsers/response-model");

const MAX_DATA_SIZE = 1e6; // 1MB máximo por paquete

async function dataEvent(data, ip_address, webSocketServer, bufferList) {
  let currentRemoteMacAddress;
  bufferList.append(data);

  //Formatea la fecha para guardarla en el nombre del archivo json
  const timestamp = format(new Date(), "ddMMyyyy-HHmmss");
  const filePath = path.join(DATADIR, `resultados-${timestamp}`);
  const filePath2 = path.join(DATADIR, `resultados-${timestamp}.txt`);
  console.log("Mensaje entrante de: " + ip_address);

  // Verifica que exista el equipo registrado
  try {
    fs.appendFileSync(filePath2, data.toString());
    console.log(`Datos crudos guardados en la ruta: ${filePath2}`);

    if (data.length > MAX_DATA_SIZE) {
      console.warn(`Paquete demasiado grande recibido: ${data.length} bytes`);
      return;
    }

    //Obtenemos la dirección MAC del equipo conectado
    currentRemoteMacAddress = await getMacAddress(ip_address);
    if (!currentRemoteMacAddress) {
      console.log(
        "No se encontró la dirección MAC, no se puede verificar el equipo."
      );
      return;
    }

    //Valida si existe el equipo registrado en las configuraciones del sistema
    const existeEquipo = verifyDevices(currentRemoteMacAddress);

    //Si el equipo en la conexión no está registrado termina el evento
    if (!existeEquipo) {
      console.log("Equipo no registrado. Conexión cerrada.");
      return;
    }

    // Devuelve la función parser que le corresponde al equipo y el carácter delimitador
    const { parser, CHAR_DELIMITER } = validateParser({
      id_device: existeEquipo.id,
    });

    // Comprueba que exista el parser y el carácter delimitador en ese equipo
    if (parser && CHAR_DELIMITER) {
      // Buscar el índice del carácter delimitador
      let index;
      while ((index = bufferList.indexOf(CHAR_DELIMITER)) !== -1) {
        // Extraer el mensaje completo del buffer hasta el caracter delimitador
        const message = bufferList.slice(0, index + 1).toString();
        bufferList.consume(index + 1); // Consume el mensaje del buffer acumulado

        //Parsea los datos en un objeto
        const results = parser(message);

        // Valida que el mensaje parseado sea correcto
        const resultValidated = validateResponse(results);

        //En caso de que el mensaje parseado sea válido lo guarda en un JSON
        if (resultValidated.success && resultValidated.data.length > 0) {
          const jsonResults = JSON.stringify(results, null, 2);

          //Guarda el archivo en la ruta especificada con el JSON parseado
          fs.appendFileSync(
            filePath.concat(`-${results[0].folio}.json`),
            jsonResults
          );
          console.log(
            `Datos parseados guardados en la ruta: ${filePath.concat(
              `-${results[0].folio}.json`
            )}`
          );

          // Emite a través de Socket.io
          webSocketServer.emit("labResultsMessage", { data: jsonResults });
        }
      }
    }
  } catch (error) {
    console.error("Error al procesar datos:", error);
  }
}

module.exports = {
  dataEvent,
};
