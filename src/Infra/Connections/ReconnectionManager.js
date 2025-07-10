class ReconnectionManager {
  /**
   * Mapeo de intervalos de reconexión de los clientes de conexión
   * @type {Map<string, NodeJS.Timeout>}
   */
  static reconnectIntervals = new Map();

  /** @type {ReconnectionManager | null} */
  static instance = null;

  constructor() {
    if (ReconnectionManager.instance) {
      return ReconnectionManager.instance;
    }

    ReconnectionManager.instance = this;
  }

  /**
   * Devuelve la única instancia de ReconnectionManager
   * @returns {ReconnectionManager}
   */
  static getInstance() {
    if (!ReconnectionManager.instance) {
      ReconnectionManager.instance = new ReconnectionManager();
    }
    return ReconnectionManager.instance;
  }

  /**
   * Agrega un intervalo de reconexión
   * @param {String} idDevice
   * @param {NodeJS.Timeout} interval
   */
  setReconnectInterval(idDevice, interval) {
    ReconnectionManager.reconnectIntervals.set(idDevice, interval);
  }

  /**
   * Obtiene un intervalo de reconexión
   * @param {String} idDevice
   * @returns {NodeJS.Timeout}
   */
  getReconnectInterval(idDevice) {
    return ReconnectionManager.reconnectIntervals.get(idDevice);
  }

  /**
   * Elimina un intervalo de reconexión
   * @param {string} idDevice
   */
  removeReconnectInterval(idDevice) {
    const interval = ReconnectionManager.reconnectIntervals.get(idDevice);
    if (interval) {
      clearInterval(interval);
      ReconnectionManager.reconnectIntervals.delete(idDevice);
    }
  }
}

module.exports = { ReconnectionManager };
