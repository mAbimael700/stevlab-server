const { SerialPort, ReadlineParser } = require("serialport");
const bl = require("bl");
const { dataEvent } = require("../../../lib/data-handler/data-event");
const { validateParser } = require("../../../lib/validate-parser");
const { emitStatusDevice } = require("../../../lib/websocket/emit-device-status");

function createSerialConnection(device) {


  const port = new SerialPort({
    path: device.port, // Cambia al 'COM#' por el puerto donde está conectado el dispositivo
    baudRate: device.baud_rate ?? 9600, // Velocidad de transmisión (ajústalo según las especificaciones del equipo)
  });

  // Agregar un parser para leer datos de forma más fácil (opcional)
  const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));

  // Manejo de errores
  port.on("error", (err) => {
    console.error("Error en el puerto serial:", err.message);
    //throw new Error("Error en el puerto serial:", err.message);
  });

  // Evento cuando el puerto está abierto
  port.on("open", () => {
    console.log(
      `Puerto serial abierto para el equipo ${device.name} en el puerto ${device.port}`
    );
    // Enviar un mensaje al equipo (opcional)
    port.write("Comando de prueba\n", (err) => {
      if (err) {
        const msg = `Error al enviar datos al equipo ${device.name} en el puerto ${device.port}: ${err.message}`

        emitStatusDevice({
          connection_status: "disconnected",
        }, device,
          msg,
          true
        )
        return console.error(msg);
      }

      emitStatusDevice({
        connection_status: "connected",
        last_connection: new Date()
      }, device,
        `Conexión exitosa con el equipo ${device.name} en el puerto ${device.port}.`
      )

      console.info(`Conexión exitosa con ${device.name} en el puerto ${device.port}.`);
    });
  });

  const parsingData = validateParser({
    id_device: device.id,
  });

  const bufferList = new bl();
  // Leer datos recibidos del equipo

  parser.on("data", (data) => {
    //console.log("Datos recibidos:", data.toString());
    dataEvent(
      port,
      data,
      parsingData,
      bufferList
    );
  });

  // Evento para detectar cierre del puerto
  port.on("close", () => {

    const msg = `El puerto ${device.port} del equipo ${device.name} ha sido cerrado`
    console.info(msg);
    emitStatusDevice({
      connection_status: "disconnected",
    }, device,
      msg,
      true
    )
  });

  return port;
}

module.exports = {
  createSerialConnection,
};
