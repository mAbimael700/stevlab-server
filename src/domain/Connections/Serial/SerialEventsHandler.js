const { SerialPort } = require("serialport");
const {
  BufferDataEmitter,
} = require("../../BufferStreamManagment/BufferDataEmitter");

class SerialEventsHandler {
  /**
   *
   * @param {SerialPort<Buffer>} serialPort
   * @param {*} equipment
   */
  constructor(serialPort, equipment) {
    this.serialPort = serialPort;
    this.equipment = equipment;
    this.bufferDataEmitter = new BufferDataEmitter(equipment);
  }

  open() {
    console.log(
      `Puerto serial abierto para el equipo ${this.equipment.name} en el puerto ${this.equipment.configuration.port}`
    );
    // Enviar un mensaje al equipo (opcional)
    this.serialPort.write("Comando de prueba\n", (err) => {
      if (err) {
        const msg = `Error al enviar datos al equipo ${this.equipment.name} en el puerto ${this.equipment.configuration.port}: ${err.message}`;
        return console.error(msg);
      }

      console.info(
        `Conexión exitosa con ${this.equipment.name} en el puerto ${this.equipment.configuration.port}.`
      );
    });
  }

  /**
   *
   * @param {Buffer} data
   */
  data(data) {
    try {
      this.bufferDataEmitter.processBufferData(data);
    } catch (error) {
      throw new Error(
        `Hubó un error al procesar la información recibida del equipo en el puerto ${this.serialPort.path} de ${this.equipment.name}:`,
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

module.exports = { SerialEventsHandler };
