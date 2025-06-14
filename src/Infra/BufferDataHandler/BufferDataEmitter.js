const { EventEmitter } = require("node:events");
const EquipmentDto = require("../../domain/Equipment/EquipmentDto");

class BufferDataEmitter extends EventEmitter {
  constructor() {
    if (BufferDataEmitter.instance) {
      return BufferDataEmitter.instance;
    }
    super();
    BufferDataEmitter.instance = this;
  }

  /**
   *
   * @param {'receivedMessage'} event
   * @param {*} args
   */
  emitEvent(event, ...args) {
    this.emit(event, ...args);
  }

  /**
   *
   * @param {{message:string, equipment:EquipmentDto}} param0
   */
  emitReceivedMessage({ message, equipment }) {
    this.emitEvent("receivedMessage", { message, equipment });
  }

}

// Inicializar la instancia singleton
BufferDataEmitter.instance = null;

module.exports = BufferDataEmitter;
