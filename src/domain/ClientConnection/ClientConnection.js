const { Socket } = require("node:net");
const { FTPClient } = require("../../lib/connections/FTP/FtpClient");
const { TCPClient } = require("../../lib/connections/TCP/TcpClient");
const {
  ReconnectionManager,
} = require("../../lib/connections/ReconnectionManager");
const { EquipmentRepository } = require("../Equipment/EquipmentRepository");
const { RS232Client } = require("../../lib/connections/RS-232/Rs-232Client");

class ClientConnection {
    /**
     * @param {Equipment} equipment - Equipo asociado a la conexión.
     * @param {"TCP server" | "TCP client" | "RS-232" | "FTP server"} type - Tipo de conexión.
     */
    constructor(equipment, type) {
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
    async build() {
      const equipmentRepository = new EquipmentRepository();
  
      switch (this.type) {
        case "TCP server":
          return this.#setupTcpServer(equipmentRepository);
  
        case "TCP client":
          console.info("La conexión debe establecerse manualmente desde el equipo de laboratorio.");
          return;
  
        case "RS-232":
          return this.#setupRs232();
  
        case "FTP server":
          return this.#setupFtp();
  
        default:
          console.warn("Tipo de conexión no válido:", this.type);
      }
    }
  
    async #setupTcpServer(equipmentRepository) {
      const reconnectionManager = ReconnectionManager.getInstance();
      const tcpClient = new TCPClient(this.equipment, equipmentRepository, reconnectionManager);
      this.client = await tcpClient.build();
      this.#updateState(this.client);
    }
  
    async #setupRs232() {
      const rs232Client = new RS232Client(this.equipment);
      this.client = rs232Client.build();
      this.#updateState(this.client);
    }
  
    async #setupFtp() {
      const ftpClient = new FTPClient(this.equipment);
      this.client = await ftpClient.build();
      this.#updateState(this.client);
    }
  
    /**
     * Cierra la conexión.
     * @returns {Promise<void>}
     */
    async close() {
      if (!this.client) return;
  
      try {
        if (this.client.close) {
          await this.client.close();
        } else if (this.client.destroy) {
          this.client.destroy();
        }
        this.closing = true;
        this.closed = true;
      } catch (error) {
        console.error("Error al cerrar la conexión:", error);
      }
    }
  
    /**
     * Asigna manualmente un cliente en conexiones TCP.
     * @param {Socket} client - Cliente TCP.
     */
    setClient(client) {
      if (!(client instanceof Socket)) {
        throw new Error("El cliente proporcionado no es una instancia de net.Socket");
      }
  
      this.client = client;
      this.#updateState(client);
    }
  
    /**
     * Actualiza el estado de conexión en base al cliente.
     * @param {Object} client
     */
    #updateState(client) {
      this.connecting = client.connecting || false;
      this.closed = client.closed || false;
      this.closing = false;
      this.destroyed = client.destroyed || false;
    }
  }
  
  module.exports = { ClientConnection };

module.exports = {
  ClientConnection,
};
