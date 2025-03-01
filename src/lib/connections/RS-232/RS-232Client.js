const { SerialPort, ReadlineParser } = require("serialport");
const {
  emitStatusDevice,
} = require("../../../lib/websocket/emit-device-status");
const { DataEvent } = require("../../data-handler/DataEvent");

class RS232Client {
  constructor(equipment) {
    this.equipment = equipment;
    this.dataHandler = new DataEvent(equipment.parsingConfiguration);
  }

  build() {
    const port = new SerialPort({
      path: this.equipment.configuration.port, // Cambia al 'COM' por el puerto donde está conectado el dispositivo
      baudRate: this.equipment.configuration.baudRate ?? 9600, // Velocidad de transmisión (ajústable según las especificaciones del equipo)
    });

    // Agregar un parser para leer datos de forma más fácil (opcional)
    const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));

    // Manejo de errores
    port.on("error", (err) => {
      console.error("Error en el puerto serial:", err.message);
      throw new Error("Error en el puerto serial:", err.message);
    });

    // Evento cuando el puerto está abierto
    port.on("open", () => {
      console.log(
        `Puerto serial abierto para el equipo ${this.equipment.name} en el puerto ${this.equipment.configuration.port}`
      );
      // Enviar un mensaje al equipo (opcional)
      port.write("Comando de prueba\n", (err) => {
        if (err) {
          const msg = `Error al enviar datos al equipo ${this.equipment.name} en el puerto ${this.equipment.configuration.port}: ${err.message}`;

          emitStatusDevice(
            {
              connection_status: "disconnected",
            },
            this.equipment,
            msg,
            true
          );
          return console.error(msg);
        }

        emitStatusDevice(
          {
            connection_status: "connected",
            last_connection: new Date(),
          },
          this.equipment,
          `Conexión exitosa con el equipo ${this.equipment.name} en el puerto ${this.equipment.configuration.port}.`
        );

        console.info(
          `Conexión exitosa con ${this.equipment.name} en el puerto ${this.equipment.configuration.port}.`
        );
      });
    });

    // Leer datos recibidos del equipo

    parser.on("data", (data) => {
      this.dataHandler.process(port, data);
    });

    // Evento para detectar cierre del puerto
    port.on("close", () => {
      console.info(
        `El puerto ${device.port} del equipo ${device.name} ha sido cerrado`
      );
      emitStatusDevice(
        {
          connection_status: "disconnected",
        },
        device,
        msg,
        true
      );
    });

    return port;
  }
}

module.exports = { RS232Client };
