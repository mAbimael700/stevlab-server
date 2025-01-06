const { SerialPort, ReadlineParser } = require("serialport");
const bl = require("bl");
const { dataEvent } = require("../../../lib/data-handler/data-event");
const { validateParser } = require("../../../lib/validate-parser");
const { equipmentsParsers } = require("../../../constants/parser-models/EQUIPMENT_PARSERS");

function createSerialConnection(device) {
  const port = new SerialPort({
    path: device.port, // Cambia al 'COM#' por el puerto donde está conectado el dispositivo
    baudRate: device.baud_rate ?? 9600, // Velocidad de transmisión (ajústalo según las especificaciones del equipo)
  });

  // Agregar un parser para leer datos de forma más fácil (opcional)
  /* const parser = port.pipe(new ReadlineParser({
    delimiter:
      equipmentsParsers[device.id]?.CHAR_DELIMITER
  })); */

  // Manejo de errores
  port.on("error", (err) => {
    console.error("Error en el puerto serial:", err.message);
  });

  // Evento cuando el puerto está abierto
  port.on("open", () => {
    console.log(
      `Puerto serial abierto para el equipo ${device.name} en el puerto ${device.port}`
    );

    // Enviar un mensaje al equipo (opcional)
    port.write("Comando de prueba\n", (err) => {
      if (err) {
        return console.error(
          `Error al enviar datos al equipo ${device.name} en el puerto ${device.port}:`,
          err.message
        );
      }
      console.log("Comando enviado");
    });
  });

  const parsingData = validateParser({
    id_device: device.id,
  });

  const bufferList = new bl();
  // Leer datos recibidos del equipo
  /* parser.on("data", (data) => {
    console.log("Datos recibidos:", data);
    dataEvent(data, device, bufferList, parsingData);
  }); */

  port.on("data", (data) => {
    console.log("Datos recibidos:", data);
    dataEvent(data, device, bufferList, parsingData);
  })

  // Evento para detectar cierre del puerto
  port.on("close", () => {
    console.log("Puerto serial cerrado");
  });

  return port
}

module.exports = {
  createSerialConnection
}