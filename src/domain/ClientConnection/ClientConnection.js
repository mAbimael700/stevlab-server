const { Socket } = require("node:net");
const { Client } = require("basic-ftp");
const { SerialPort } = require("serialport");

class ClientConnection {
  /**
   * @param {"TcpInBound" | "TcpOutBound" | "Serial" | "Ftp"} type - Tipo de conexión.
   */
  constructor(type) {
    this.type = type;
    this.socket = null;
    this.connecting = false;
    this.closed = false;
    this.closing = false;
    this.destroyed = false;
  }

  async reconnect() {}
  async close() {}

  /**
   *
   * @param {Socket | SerialPort | Client} client
   */
  setClient(client) {
    this.socket = client;
  }
}

module.exports = { ClientConnection };

module.exports = {
  ClientConnection,
};
