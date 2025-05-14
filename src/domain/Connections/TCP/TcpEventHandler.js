const { Socket } = require("node:net");
const {
  BufferStreamDataEmitter,
} = require("../../BufferStreamManagment/BufferStreamDataEmitter");
class TcpEventsHandler {
  /**
   * 
   * @param {Socket} socket 
   * @param {*} equipment 
   */
  constructor(socket, equipment) {
    this.socket = socket;
    this.equipment = equipment;
    this.bufferDataEmitter = new BufferStreamDataEmitter(equipment);
    this.ipAddress = socket.remoteAddress;
    this.port = socket.remotePort;
  }

  connect() {
    console.log(
      `Conexión TCP/IP entrante del equipo ${this.equipment.name} con la dirección IPv4: ${this.socket.remoteAddress}:${this.socket.remotePort}`
    );
  }
  /**
   * Maneja los datos entrantes del socket.
   * @param {Buffer} data
   */
  data(data) {
    try {
      this.bufferDataEmitter.processBufferData(data);
    } catch (error) {
      throw new Error(
        `Hubó un error al procesar la información recibida del equipo con dirección Ipv4 ${this.ipAddress}:${this.port}:`,
        error
      );
    }
  }

  /**
   *
   * @param {Error} err
   * @param {*} scheduleReconnect
   */
  error(err) {
    const errorMessage = TcpEventsHandler.generateErrorMessage(err);
  }

  close() {}

  end() {
    console.log(
      `Conexión cerrada por el equipo con IPv4: ${this.ipAddress}:${this.port}`
    );

    if (!this.socket.destroyed) {
      this.socket.destroy();
    }
  }

  timeout() {
    this.socket.end(); // O this.socket.destroy()
  }

  /**
   *
   * @param {Error} error
   * @param {string} ipAddress
   * @param {number | null} port
   * @returns
   */
  generateErrorMessage(error) {
    let msg;
    switch (error.code) {
      case "ECONNREFUSED":
        msg = `Conexión rechazada a ${this.ipAddress}:${this.port}.`;
        break;
      case "ETIMEDOUT":
        msg = `Tiempo de espera agotado para ${this.ipAddress}:${this.port}.`;
        break;
      case "EHOSTUNREACH":
        msg = `No se puede alcanzar el host ${this.ipAddress} en el puerto ${this.port}.`;
        break;
      default:
        msg = `Hubo un error en de conexión: ${error.message}`;
    }

    return msg;
  }
}

module.exports = TcpEventsHandler;
