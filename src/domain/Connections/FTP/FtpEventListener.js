const { FtpEventsEmitter } = require("./FtpEventsEmitter");
const { FtpEventsHandler } = require("./FtpEventsHandler");

/**
 *
 */
class FtpEventsListener {
  /**
   *
   * @param {FtpEventsEmitter} ftpEventsEmmiter
   * @param {FtpEventsHandler} eventsHandler
   */
  constructor(ftpEventsEmitter, eventsHandler) {
    this.listener = { on: ftpEventsEmitter.on };
    this.eventsHandler = eventsHandler;
  }

  setup() {
    this.listener.on("addedFile", this.eventsHandler.addedFile);
    this.listener.on("error", this.eventsHandler.error);
    this.listener.on("close", this.eventsHandler.close);
    this.listener.on("end", this.eventsHandler.end);
  }
}

module.exports = {
  ftpEventEmmiter,
};

module.exports = { FtpEventsListener };
