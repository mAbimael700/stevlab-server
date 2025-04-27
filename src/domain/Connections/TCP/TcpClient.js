const net = require("node:net");
const { ClientConnection } = require("../../ClientConnection/ClientConnection");
class TcpClient extends ClientConnection {
  /**
   *
   * @param {net.Socket} socket
   * @param {string} type
   */
  constructor(socket = new net.Socket(), type) {
    super(type);
    this.socket = socket;
    this.closed = this.socket.closed;
    this.destroyed = this.socket.destroyed;
    this.connecting = this.socket.connecting;
  }

  /**
   *
   */
  reconnect() {
    this.socket.connecting = true;
  }
}

module.exports = { TcpClient };
