const { Socket } = require("node:net");
const { Client } = require("basic-ftp");
const { SerialPort } = require("serialport");

class ClientConnection {
  /**
   * @param {"TCP server" | "TCP client" | "RS-232" | "FTP server"} type - Tipo de conexión.
   */
  constructor(type) {
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
  async build() {}
  async connect() {}
  async reconnect() {}
  async close() {}

  /**
   *
   * @param {Socket | SerialPort | Client} client
   */
  setClient(client) {
    this.client = client;
  }
}

module.exports = { ClientConnection };

module.exports = {
  ClientConnection,
};
