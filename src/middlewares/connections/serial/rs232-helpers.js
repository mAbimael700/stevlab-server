const { SerialPort, ReadlineParser } = require("serialport");

let rs232Connections = {};

function getRs232Connections() {
  return rs232Connections;
}

function addSerialConn(device) {
  // Configuración del puerto serie
  const port = new SerialPort({
    path: device.port, // Cambia al 'COM#' por el puerto donde está conectado el dispositivo
    baudRate: device.baud_rate, // Velocidad de transmisión (ajústalo según las especificaciones del equipo)
  });

  // Agregar un parser para leer datos de forma más fácil (opcional)
  const parser = port.pipe(new ReadlineParser({ delimiter: device.delimiter }));

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

  // Leer datos recibidos del equipo
  parser.on("data", (data) => {
    console.log("Datos recibidos:", data);

  });

  // Evento para detectar cierre del puerto
  port.on("close", () => {
    console.log("Puerto serial cerrado");
  });

  rs232Connections[device.mac_address] = port;
}
