const EventEmitter = require("node:events");
const { FileInfo } = require("basic-ftp");

class FtpEventsEmitter extends EventEmitter {
  constructor() { 
    super()
  }
  /**
   *
   * @param {'addedFile' | 'data' | 'error' | 'close' | 'end' | 'stop'} event
   * @param {AnyRest} args
   */
  emitEvent(event, ...args) {
    this.emit(event, ...args);
  }

  /**
   *
   * @param {FileInfo} fileContent
   */
  emitAddedFile(file) {
    this.emitEvent("addedFile", file);
  }
  /**
   *
   * @param {string} fileContent
   */
  emitData(fileContent) {
    this.emitEvent("data", fileContent);
  }

  emitClosed({ error }) {
    this.emitEvent("close", { error });
  }

  emitError(error) {
    this.emitEvent("error", error);
  }
  emitStoppedMonitor() {
    this.emitEvent('stoppedMonitor')
  }
}

module.exports = { FtpEventsEmitter };
