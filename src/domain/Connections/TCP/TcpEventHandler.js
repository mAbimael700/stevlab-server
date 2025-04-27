const { Socket } = require("node:net");
const {
  BufferDataEmitter,
} = require("../../BufferStreamManagment/BufferDataEmitter");
const { ConnectionValidator } = require("./ConnectionValidator");
const { EquipmentManager } = require("../../EquipmentManager/EquimentManager");
const { TcpClient } = require("./TcpClient");
const { TcpSocketListener } = require('./TcpSocketListener')

class TcpEventsHandler {
  /**
   * @param {Socket} socket
   * @param {Equipment} equipment
   * @param  {ConnectionValidator} connectionValidator
   */
  constructor(socket, equipment = null, connectionValidator) {
    this.socket = socket;
    this.equipment = equipment;

    this.ipAddress = socket.remoteAddress;
    this.port = socket.remotePort;
    this.connectionValidator = connectionValidator;
    this.equipmentManager = EquipmentManager.getInstance();

    if (equipment) {
      this.bufferDataEmitter = new BufferDataEmitter(equipment);
    } else {
      this.bufferDataEmitter = null;
    }
  }


  async connect() {
    try {
      if (!this.equipment) {
        const result = await this.connectionValidator.validate(
          this.socket.remoteAddress
        );

        const equipmentOnServerMemory = this.equipmentManager.getEquipmentById(
          result.id
        );

        if (!equipmentOnServerMemory)
          throw new Error(`Equipo con ID ${result.id} no encontrado.`);

        this.equipment = equipmentOnServerMemory.data;
        this.bufferDataEmitter = new BufferDataEmitter(this.equipment);

        if (!equipmentOnServerMemory.connection) {
          equipmentOnServerMemory.setConnection(
            new TcpClient(this.equipment, this.socket, this)
          );
        }

      }

      console.log(
        `Conexión TCP/IP entrante del equipo ${this.equipment.name} con la dirección IPv4: ${this.equipment.configuration.ipAddress}:${this.socket.remotePort}`
      );
    } catch (error) {
      console.error("Error durante la conexión:", error.message);
      this.socket.destroy(); // Cierra el socket si hay un error
    }
  }

  /**
   * Maneja los datos entrantes del socket.
   * @param {Buffer} data
   */
  data(data) {
    try {
      if (!this.bufferDataEmitter) {
        throw new Error(
          "El equipo no se ha validado correctamente para procesar su información."
        );
      }

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

  close() { }

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
