const { SerialPort } = require("serialport");
const SerialPortListener = require("../listener/SerialPortListener");
const SerialEventsHandler = require("../events/SerialEventsHandler");
const EquipmentDto = require("@/domain/equipment/dto/EquipmentDto");
const { BufferDataHandler } = require("@/infra/bufferdatahandler/handler/BufferDataHandler");

class SerialClientCoreFactory {
  constructor(bufferDataEmitter) {
    this.bufferDataEmitter = bufferDataEmitter;
  }
  /**
   * Crea una instancia de SerialPort
   * @param {EquipmentDto} equipment
   * @returns {SerialPort}
   */
  createSerialPort(equipment) {
    const { port, baudRate } = equipment.equipmentConfiguration;
    return new SerialPort({
      path: port,
      baudRate: baudRate ?? 9600,
    });
  }

  /**
   * Crea una instancia de SerialEventsHandler
   * @param {SerialPort} serialPort
   * @param {*} equipment
   * @param {*} dataHandler
   * @returns {SerialEventsHandler}
   */
  createEventsHandler(serialPort, equipment, dataHandler) {
    return new SerialEventsHandler(serialPort, equipment, dataHandler);
  }

  /**
   * Crea una instancia de BufferDataHandler
   * @param {EquipmentDto} equipment
   * @returns {BufferDataHandler}
   */
  createBufferDataHandler(equipment) {
    return new BufferDataHandler(equipment, this.bufferDataEmitter);
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
