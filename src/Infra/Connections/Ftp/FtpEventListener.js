const { FtpEventsEmitter } = require("./FtpEventsEmitter");
const { FtpEventsHandler } = require("./FtpEventsHandler");

/**
 *
 */
class FtpEventsListener {
  /**
   * @param {FtpEventsEmitter} ftpEventsEmitter 
   * @param {FtpEventsHandler} eventsHandler
   */
  constructor(ftpEventsEmitter, eventsHandler) {
    this.listener = ftpEventsEmitter;
    this.eventsHandler = eventsHandler;
    this._bindMethods()
    this.setup()
  }

  setup() {
    this.listener.on("connect", this.eventsHandler.connect)
    this.listener.on("addedFile", this.eventsHandler.addedFile);
    this.listener.on("data", this.eventsHandler.data)
    this.listener.on("close", this.eventsHandler.close);
    this.listener.on("end", this.eventsHandler.end);
    this.listener.on("stoppedMonitor", this.eventsHandler.stoppedMonitor)
    this.listener.on("error", this.eventsHandler.error);
    this.listener.on('monitoringStopped', this.eventsHandler.monitoringStopped);
  }

  _bindMethods() {
    const methods = ["connect", "addedFile", "data", "close", "end",
      "stoppedMonitor", "error", "monitoringStopped"]

    methods.forEach((method) => {
      if (typeof this.eventsHandler[method] === "function") {
        this.eventsHandler[method] = this.eventsHandler[method].bind(
          this.eventsHandler
        );
      }
    });
  }
}



module.exports = { FtpEventsListener };
