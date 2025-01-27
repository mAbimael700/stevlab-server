let timeoutHandler = null;

function setupTimeout(lastMessageTime, callback, delay = 5000) {
  if (timeoutHandler) clearTimeout(timeoutHandler);

  timeoutHandler = setTimeout(() => {
    if (Date.now() - lastMessageTime >= delay) {
      callback();
    }
  }, delay);
}

function clearTimeoutHandler() {
  if (timeoutHandler) clearTimeout(timeoutHandler);
  timeoutHandler = null;
}

module.exports = {
  setupTimeout,
  clearTimeoutHandler,
};
