const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

const { format } = require("date-fns");
const { verifyDevices } = require("../../lib/verify-devices");
const { getMacAddress } = require("../../lib/getMacAddress");
const { validateParser } = require("../../lib/validate-buffer");
const { validateResponse } = require("../../schemas/response-schema");
const { emitResultsToWebSocket } = require("../../lib/emit-results-websocket");
const { saveResultsToLocalData } = require("../../lib/save-results-data");
const { FILE_UPLOADS_DIR } = require("../../constants/CONFIG_DIR");


const MAX_DATA_SIZE = 1e6; // 1MB máximo por paquete

async function dataEvent(data, ip_address, bufferList) {
  let currentRemoteMacAddress;
  bufferList.append(data);

  //Formatea la fecha para guardarla en el nombre del archivo json
  const timestamp = format(new Date(), "ddMMyyyy-HHmmss");
  const filePath = path.join(FILE_UPLOADS_DIR, `resultados-${timestamp}.txt`);

  console.log("Mensaje entrante de: " + ip_address);

  try {
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
      while (true) {
        // Convierte el buffer acumulado a string con encoding utf-8 sin perder formato
        const accumulatedData = bufferList.toString("utf-8");

        // Verifica si el acumulador contiene el delimitador
        const delimiterIndex = accumulatedData.indexOf(CHAR_DELIMITER);

        if (delimiterIndex !== -1) {
          // Extraemos el mensaje completo hasta el delimitador, respetando el formato de saltos de línea
          const completeMessage = accumulatedData.slice(0, delimiterIndex + 1);

          try {
            console.log("Mensaje completo recibido:");
            console.log(completeMessage); // Mostrar el mensaje completo con sus saltos de línea
            fs.appendFileSync(filePath, completeMessage);
            console.log(`Datos crudos guardados en la ruta: ${filePath}`);

            // Procesa el mensaje con el parser
            const results = parser(completeMessage);

            if (results) {
              console.log("Resultados del parser:", results);
              // Aquí podrías guardar o emitir resultados según sea necesario

              const isValidated = validateResponse(results);

              if (isValidated) {
                saveResultsToLocalData(results);
                emitResultsToWebSocket(results);
              }
            } else {
              console.warn("Parser devolvió resultados inválidos");
            }
          } catch (error) {
            console.error("Error al procesar el mensaje:", error.message);
          }

          // Limpia el buffer eliminando los datos procesados hasta el delimitador
          bufferList.consume(Buffer.byteLength(completeMessage, "utf-8"));
        } else {
          // Si no se encuentra el delimitador, salir del loop porque no hay más mensajes completoss
          break;
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
