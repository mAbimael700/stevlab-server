const { FileInfo } = require("basic-ftp");
const EventEmitter = require("node:events");

class FtpEventsEmitter extends EventEmitter {
  constructor() {}
  /**
   *
   * @param {'addedFile' | 'data' | 'error' | 'close' | 'end'} event
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
}

module.exports = { FtpEventsEmitter };
