const { Socket } = require("node:net");
const { Client } = require("basic-ftp");
const { SerialPort } = require("serialport");


class ClientConnection {
  /**
   * @param {"TCP server" | "TCP client" | "RS-232" | "FTP server"} type - Tipo de conexión.
   */
  constructor(type) {
    this.type = type;
    this.socket = null;
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


  /**
   * Asigna manualmente un cliente de conexión.
   * @param {Socket | Client | SerialPort} client - Cliente de conexión.
   */
  setClient(client) {
    this.socket = client;
  }

}

module.exports = { ClientConnection };

module.exports = {
  ClientConnection,
};
