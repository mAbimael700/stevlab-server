/**
 * Mapeo de intervalos de reconexión de los clientes TCP
 *  @type {Map<string, NodeJS.Timeout>}
 */
let reconnectIntervals = new Map(); // 

/**
 * 
 * @param {String} idDevice 
 * @param {NodeJS.Timeout} interval 
 */
function setReconnectInterval(idDevice, interval) {
  reconnectIntervals.set(idDevice, interval);
}

/**
 * 
 * @param {String} idDevice 
 * @returns {NodeJS.Timeout}
 */
function getReconnectInterval(idDevice) {
  return reconnectIntervals.get(idDevice);
}

/**
 * 
 * @param {string} idDevice 
 */
function removeReconnectInterval(idDevice) {
  const interval = reconnectIntervals.get(idDevice);
  if (interval) {
    clearInterval(interval);
    reconnectIntervals.delete(idDevice);
  }
}

module.exports = {
  setReconnectInterval,
  getReconnectInterval,
  removeReconnectInterval,
};