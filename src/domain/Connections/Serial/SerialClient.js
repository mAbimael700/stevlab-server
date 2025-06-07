const { SerialPort } = require("serialport");
const { SerialPortListener } = require("./SerialPortListener");
const { SerialEventsHandler } = require("./SerialEventsHandler");
const ClientOutBoundConnection = require("../../ClientConnection/ClientOutBoundConnection");

class SerialClient extends ClientOutBoundConnection {
  constructor(equipment) {
    super("Serial");
    this.equipment = equipment;
    const { path, baudRate } = this.equipment.configuration;
    this.socket = new SerialPort({
      path, // Cambia al 'COM' por el puerto donde está conectado el dispositivo
      baudRate: baudRate ?? 9600, // Velocidad de transmisión (ajústable según las especificaciones del equipo)
    });
    this.eventsHandler = new SerialEventsHandler(this.socket, this.equipment);
    this.serialPortListener = new SerialPortListener(
      this.socket,
      this.eventsHandler
    );
  }

  build() { }
}

module.exports = SerialClient;
