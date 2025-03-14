const { SerialPort } = require("serialport");
const { Rs232PortListener } = require("./Rs232PortListener");

class RS232Client {
  constructor(equipment) {
    this.equipment = equipment;
    this.serialPort = null
    this.serialPortListener = null
  }

  build() {

    const { port, baudRate } = this.equipment.configuration

    this.serialPort = new SerialPort({
      path: port, // Cambia al 'COM' por el puerto donde está conectado el dispositivo
      baudRate: baudRate ?? 9600, // Velocidad de transmisión (ajústable según las especificaciones del equipo)
    });

    this.serialPortListener = new Rs232PortListener(this.serialPort, this.equipment)

    return this.serialPort;
  }
}

module.exports = { RS232Client };
