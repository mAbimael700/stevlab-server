const { EventEmitter } = require("node:events");

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
   * @param {AnyRest} args
   */
  emitEvent(event, ...args) {
    this.emit(event, ...args);
  }

  /**
   *
   * @param {*} param0
   */
  emitReceivedMessage({ message, equipment }) {
    this.emitEvent("receivedMessage", { message, equipment });
  }
}

// Inicializar la instancia singleton
BufferDataEmitter.instance = null;

module.exports = { BufferDataEmitter };
