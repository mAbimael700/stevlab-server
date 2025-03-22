const { Socket } = require("node:net");
const { FTPClient } = require("../Connections/FTP/FtpClient");
const { TCPClient } = require("../Connections/TCP/TcpClient");
const {
  ReconnectionManager,
} = require("../Connections/ReconnectionManager");
const { EquipmentRepository } = require("../Equipment/EquipmentRepository");
const { RS232Client } = require("../Connections/RS-232/Rs-232Client.js");
const { Client } = require("basic-ftp");
const { SerialPort } = require("serialport");
const { FTPMonitor } = require("../Connections/FTP/FtpMonitor.js");

class ClientConnection {
  /**
   * @param {Equipment} equipment - Equipo asociado a la conexión.
   * @param {"TCP server" | "TCP client" | "RS-232" | "FTP server"} type - Tipo de conexión.
   */
  constructor(type) {
    this.equipment = equipment;
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


  /**
   * Asigna manualmente un cliente de conexión.
   * @param {Socket | Client | SerialPort} client - Cliente de conexión.
   */
  setClient(client) {
    this.client = client;
  }

}

module.exports = { ClientConnection };

module.exports = {
  ClientConnection,
};
