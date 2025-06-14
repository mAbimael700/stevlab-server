const { EventEmitter } = require("node:events");
const EquipmentDto = require("../../domain/Equipment/EquipmentDto");

class BufferDataEmitter extends EventEmitter {
  constructor() {
    super();
  }

  static getInstance() {
    if (!BufferDataEmitter.instance) {
      BufferDataEmitter.instance = new BufferDataEmitter();
    }
    return BufferDataEmitter.instance;
  }

  /**
   * @param {'receivedMessage'} event
   * @param {*} args
   */
  emitEvent(event, ...args) {
    this.emit(event, ...args);
  }

  /**
   * @param {{message:string, equipment:EquipmentDto}} param0
   */
  emitReceivedMessage({ message, equipment }) {
    this.emitEvent("receivedMessage", { message, equipment });
  }
}

BufferDataEmitter.instance = null;

module.exports = BufferDataEmitter;