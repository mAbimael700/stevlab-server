const { SerialPort } = require("serialport");
const EquipmentDto = require("../../../domain/equipment/dto/EquipmentDto");

class SerialEventsHandler {
  /**
   *
   * @param {SerialPort<Buffer>} serialPort
   * @param {EquipmentDto} equipment
   */
  constructor(serialPort, equipment, dataHandler) {
    this.port = equipment.equipmentConfiguration.port
    this.serialPort = serialPort;
    this.equipment = equipment;
    this.dataHandler = dataHandler;
  }

  open() {
    console.log(
      `Puerto serial abierto para el equipo ${this.equipment.name} en el puerto ${this.port}`
    );
    // Enviar un mensaje al equipo (opcional)
    this.serialPort.write("Comando de prueba\n", (err) => {
      if (err) {
        const msg = `Error al enviar datos al equipo ${this.equipment.name} en el puerto ${this.port}: ${err.message}`;
        return console.error(msg);
      }

      console.info(
        `Conexión exitosa con ${this.equipment.name} en el puerto ${this.port}.`
      );
    });
  }

  /**
   *
   * @param {Buffer} data
   */
  data(data) {
    try {
      this.dataHandler.processBufferData(data);
    } catch (error) {
      throw new Error(
        `Hubó un error al procesar la información recibida del equipo en el puerto ${this.serialPort.path} de ${this.equipment.name}: ${error.message}`,
        error
      );
    }
  }

  error(error) {
    console.error(
      `Error en el puerto ${this.serialPort.path} de ${this.equipment.name}:`,
      error.message
    );
  }

  close() {
    console.info(
      `El puerto ${this.serialPort.path} del equipo ${this.equipment.name} ha sido cerrado.`
    );
  }
}

module.exports = SerialEventsHandler;
