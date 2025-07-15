const { SerialPort, ReadlineParser } = require("serialport");
const SerialEventsHandler = require("./SerialEventsHandler");

class SerialPortListener {
  /**
   *
   * @param {SerialPort<Buffer>} port
   * @param {SerialEventsHandler} eventsHandler
   */
  constructor(port, eventsHandler) {
    this.serialPort = port;
    this.parser = this.serialPort.pipe(new ReadlineParser({ delimiter: "\n" }));
    this.eventsHandler = eventsHandler;
    this._bindHandlers();
  }

  setup() {
    // Evento cuando el puerto está abierto
    this.serialPort.on("open", this.eventsHandler.open);

    // Leer datos recibidos del equipo
    this.parser.on("data", this.eventsHandler.data);

    // Evento para detectar cierre del puerto
    this.serialPort.on("close", this.eventsHandler.close);

    // Manejo de errores
    this.serialPort.on("error", this.eventsHandler.error);
  }

  _bindHandlers() {
    const methods = ["open", "data", "close", "error"];

    methods.forEach((method) => {
      if (typeof this.eventsHandler[method] === "function") {
        this.eventsHandler[method] = this.eventsHandler[method].bind(
          this.eventsHandler
        );
      }
    });
  }
}

module.exports = SerialPortListener;
