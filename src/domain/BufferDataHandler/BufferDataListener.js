const { BufferDataEmitter } = require("./BufferDataEmitter");

class BufferDataListener {

  constructor() {
    this.dataEmitter = new BufferDataEmitter();
    this.dataEvents = new BufferDataEvents();
  }

  setup() {
    this.dataEmitter.on("receivedMessage", ({ equipment, message }) => {
      this.r
    });
  }
}

module.exports = { BufferDataListener };
