class TimeoutHandler {
  constructor() {
    this.timeoutHandler = null;
  }

  setupTimeout(lastMessageTime, callback, delay = 5000) {
    if (this.timeoutHandler) clearTimeout(this.timeoutHandler);
  
    this.timeoutHandler = setTimeout(() => {
      if (Date.now() - lastMessageTime >= delay) {
        callback();
      }
    }, delay);
  }

  clearTimeoutHandler() {
    if (timeoutHandler) clearTimeout(timeoutHandler);
    timeoutHandler = null;
  }
}






module.exports = {
  setupTimeout,
  clearTimeoutHandler,
};
