const TcpEventsHandler = require("./TcpEventHandler");
const { TcpSocketListener } = require("./TcpSocketListener");
const {
  BufferDataHandler,
} = require("@/infra/bufferdatahandler/BufferDataHandler");
const EquipmentDto = require("@/domain/equipment/dto/EquipmentDto");

class TcpClientConnectionCoreFactory {

  constructor(bufferDataEmitter) {
    this.bufferDataEmitter = bufferDataEmitter
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
   * Crea una instancia de TcpEventsHandler
   * @param {Socket} client
   * @param {EquipmentDto} equipment
   * @param {BufferDataHandler} dataHandler
   * @returns {TcpEventsHandler}
   */
  createEventsHandler(client, equipment, dataHandler) {
    return new TcpEventsHandler(client, equipment, dataHandler);
  }

  /**
   * Crea una instancia de TcpSocketListener
   * @param {Socket} client
   * @param {TcpEventsHandler} eventsHandler
   * @returns {TcpSocketListener}
   */
  createSocketListener(client, eventsHandler) {
    return new TcpSocketListener(client, eventsHandler);
  }
}

module.exports = TcpClientConnectionCoreFactory;
