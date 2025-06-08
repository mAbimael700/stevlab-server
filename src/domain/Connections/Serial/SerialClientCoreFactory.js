const { SerialPort } = require("serialport");
const SerialPortListener = require("./SerialPortListener");
const SerialEventsHandler = require("./SerialEventsHandler");

class SerialClientCoreFactory {
  /**
   * Crea una instancia de SerialPort
   * @param {*} equipment
   * @returns {SerialPort}
   */
  createSerialPort(equipment) {
    const { port, baudRate } = equipment.configuration;
    return new SerialPort({
      path: port,
      baudRate: baudRate ?? 9600,
    });
  }

  /**
   * Crea una instancia de SerialEventsHandler
   * @param {SerialPort} serialPort
   * @param {*} equipment
   * @returns {SerialEventsHandler}
   */
  createEventsHandler(serialPort, equipment) {
    return new SerialEventsHandler(serialPort, equipment);
  }

  /**
   * Crea una instancia de SerialPortListener
   * @param {SerialPort} serialPort
   * @param {SerialEventsHandler} eventsHandler
   * @returns {SerialPortListener}
   */
  createPortListener(serialPort, eventsHandler) {
    return new SerialPortListener(serialPort, eventsHandler);
  }
}

module.exports = SerialClientCoreFactory;
