const { SerialPort } = require("serialport");
const { SerialPortListener } = require("./SerialPortListener");
const { ClientConnection } = require("../../ClientConnection/ClientConnection");
const { SerialEventsHandler } = require("./SerialEventsHandler");

class SerialClient extends ClientConnection {
  constructor(equipment) {
    super("Serial");
    this.equipment = equipment;
    const { port, baudRate } = this.equipment.configuration;
    this.socket = new SerialPort({
      path: port, // Cambia al 'COM' por el puerto donde está conectado el dispositivo
      baudRate: baudRate ?? 9600, // Velocidad de transmisión (ajústable según las especificaciones del equipo)
    });
    this.eventsHandler = new SerialEventsHandler(this.socket, this.equipment);
    this.serialPortListener = new SerialPortListener(
      this.socket,
      this.eventsHandler
    );
  }

  build() {}
}

module.exports = { RS232Client };
