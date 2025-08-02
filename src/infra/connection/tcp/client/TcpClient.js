const net = require("node:net");
const ClientConnection = require("@/infra/clientconnection/entity/ClientConnection");
class TcpClient extends ClientConnection {
  /**
   *
   * @param {net.Socket} client
   * @param {'TcpInBound' | 'TcpOutBound'} type
   */
  constructor(client = new net.Socket(), type) {
    super(type);
    this.client = client;
    this.closed = this.client.closed;
    this.destroyed = this.client.destroyed;
    this.connecting = this.client.connecting;
    this.dataHandler = null;
    this.eventsHandler = null;
    this.socketListener = null;
  }

  /**
   *
   */
  reconnect() {
    this.client.connecting = true;
  }
}

module.exports = { TcpClient };
