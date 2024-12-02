const fs = require("node:fs");
const path = require("node:path");

const { format } = require("date-fns");
const { validateResponse } = require("../../schemas/response-schema");
const { emitResultsToWebSocket } = require("../../lib/emit-results-websocket");
const { saveResultsToLocalData } = require("../../lib/save-results-data");
const { FILE_UPLOADS_DIR } = require("../../constants/CONFIG_DIR");

const MAX_DATA_SIZE = 1e6; // 1MB máximo por paquete
// Variables de control para manejar la lógica de espera
let lastFolio = null;
let resultsToSave = { parametros: [] };
let processTimeout = null;
const PROCESS_DELAY_MS = 20000; // 20 segundos
let lastMessageTime = null; // Momento en que llegó el último mensaje

async function dataEvent(data, ip_address, bufferList, parsingData) {
  bufferList.append(data);

  //Formatea la fecha para guardarla en el nombre del archivo json
  const timestamp = format(new Date(), "ddMMyyyy-HHmmss");
  const filePath = path.join(FILE_UPLOADS_DIR, `resultados-${timestamp}.txt`);

  console.log("Mensaje entrante de: " + ip_address);

  try {
    lastMessageTime = Date.now();

    if (data.length > MAX_DATA_SIZE) {
      console.warn(`Paquete demasiado grande recibido: ${data.length} bytes`);
      return;
    }

    // Devuelve la función parser que le corresponde al equipo y el carácter delimitador
    const { parser, CHAR_DELIMITER, sendsBySingleParameter } = parsingData;

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
            // Mostrar el mensaje completo con sus saltos de línea
            console.log("Mensaje completo recibido! \n", completeMessage);

            // Procesa el mensaje con el parser
            const results = parser(completeMessage);

            if (results) {
              // Aquí podrías guardar o emitir resultados según sea necesario
              const isValidated = validateResponse(results);
              const { folio, parametros } = results[0];

              if (isValidated) {
                if (sendsBySingleParameter) {
                  if (folio !== lastFolio) {
                    if (
                      resultsToSave.parametros.length > 0 &&
                      resultsToSave.folio
                    ) {
                      saveResultsToLocalData([resultsToSave]);
                      emitResultsToWebSocket([resultsToSave]);
                      console.log(
                        "Procesando resultados acumulados después de inactividad:"
                      );
                    }

                    lastFolio = folio;
                    resultsToSave = {
                      ...results[0],
                      parametros: [...parametros],
                    };
                  } else {
                    resultsToSave.parametros.push(...parametros);
                  }

                  console.log(resultsToSave);
                } else {
                  // Procesa todo el mensaje directamente
                  saveResultsToLocalData(results);
                  emitResultsToWebSocket(results);
                  console.log("Folio procesado directamente:", folio);
                }
              }
            } else {
              console.warn("Parser devolvió resultados inválidos");
            }
          } catch (error) {
            console.error("Error al procesar el mensaje:", error);
          }

          // Limpia el buffer eliminando los datos procesados hasta el delimitador
          bufferList.consume(Buffer.byteLength(completeMessage, "utf-8"));
        } else {
          // Si no se encuentra el delimitador, salir del loop porque no hay más mensajes completoss
          break;
        }
      }

      // Si no llegan más mensajes después de cierto tiempo, procesar lo acumulado

      if (processTimeout) clearTimeout(processTimeout);

      processTimeout = setTimeout(() => {
        if (
          lastMessageTime &&
          Date.now() - lastMessageTime > PROCESS_DELAY_MS
        ) {
          if (resultsToSave.parametros.length > 0) {
            saveResultsToLocalData([resultsToSave]);
            emitResultsToWebSocket([resultsToSave]);
            console.log(
              "Procesando resultados acumulados después de inactividad:"
            );
            console.log([resultsToSave]);
            resultsToSave = { parametros: [] };
          }
        }
      }, PROCESS_DELAY_MS);
    }
  } catch (error) {
    console.error("Error al procesar datos:", error);
  }
}

module.exports = {
  dataEvent,
};
