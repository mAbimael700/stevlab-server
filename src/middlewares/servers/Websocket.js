const { Server } = require("socket.io");

let io;

function setIO(ioInstance) {
  io = ioInstance;
}

/**
 *
 * @returns {Server}
 */
function getIO() {
  return io;
}

/**
 * 
 * @param {string} event 
 * @param {*} message 
 */
function emitMessageToSocket(event, message) {
  const ioInstance = getIO();
  ioInstance.emit(event, JSON.stringify(message));
}

module.exports = {
  getIO,
  setIO,
  emitMessageToSocket,
};
