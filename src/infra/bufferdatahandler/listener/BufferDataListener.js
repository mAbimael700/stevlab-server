class BufferDataListener {
  constructor({bufferDataEmitter, bufferDataEvents}) {
    this.dataEmitter = bufferDataEmitter;
    this.eventsHandler = bufferDataEvents;
    this._bindHandlers()
  }

  setup() {
    this.dataEmitter.on("receivedMessage", this.eventsHandler.receivedMessage);
  }

  _bindHandlers() {
    const methods = ["receivedMessage"];

    methods.forEach((method) => {
      if (typeof this.eventsHandler[method] === "function") {
        this.eventsHandler[method] = this.eventsHandler[method].bind(
          this.eventsHandler
        );
      }
    });
  }
}

module.exports = BufferDataListener;
