let reconnectIntervals = {}; // Mapeo de intervalos de reconexión

function setReconnectInterval(macAddress, interval) {
  reconnectIntervals[macAddress] = interval;
}

function getReconnectInterval(macAddress) {
  return reconnectIntervals[macAddress];
}

function removeReconnectInterval(macAddress) {
  if (reconnectIntervals[macAddress]) {
    clearInterval(reconnectIntervals[macAddress]);
    delete reconnectIntervals[macAddress];
  }
}

module.exports = {
  setReconnectInterval,
  getReconnectInterval,
  removeReconnectInterval,
};
