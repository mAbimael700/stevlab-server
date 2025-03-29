class ClientConnection {
  /**
   * @param {"TCP server" | "TCP client" | "RS-232" | "FTP server"} type - Tipo de conexión.
   */
  constructor(type) {
    this.equipment = null;
    this.type = type;
    this.client = null;
    this.connecting = false;
    this.closed = false;
    this.closing = false;
    this.destroyed = false;
  }

  /**
   * Inicializa la conexión.
   * @returns {Promise<void>}
   */
  async build() { }
  async connect() { }
  async reconnect() { }
  async close() { }




}

module.exports = { ClientConnection };

module.exports = {
  ClientConnection,
};
