
class BufferDataListener {
  constructor(bufferDataEmitter, bufferDataEvents) {
    this.dataEmitter = bufferDataEmitter;
    this.dataEvents = bufferDataEvents;
  }

  setup() {
    this.dataEmitter.on("receivedMessage", this.dataEvents.receivedMessage);
  }
}

module.exports = { BufferDataListener };
