let reconnectIntervals = {}; // Mapeo de intervalos de reconexión

/**
 * 
 * @param {String} idDevice 
 * @param {NodeJS.Timeout} interval 
 */
function setReconnectInterval(idDevice, interval) {
  reconnectIntervals[idDevice] = interval;
}

/**
 * 
 * @param {String} idDevice 
 * @returns {NodeJS.Timeout}
 */
function getReconnectInterval(idDevice) {
  return reconnectIntervals[idDevice];
}


function removeReconnectInterval(idDevice) {
  if (reconnectIntervals[idDevice]) {
    clearInterval(reconnectIntervals[idDevice]);
    delete reconnectIntervals[idDevice];
  }
}

module.exports = {
  setReconnectInterval,
  getReconnectInterval,
  removeReconnectInterval,
};
