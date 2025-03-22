const { Socket } = require("node:net");
const { DataEvent } = require("../../BufferStreamManagment/DataEvent");
const { emitStatusDevice } = require("../../websocket/emit-device-status");

class TcpEventHandler {
  /**
   * @param {Socket} socket
   * @param {Equipment} equipment
   */
  constructor(socket, equipment) {
    this.socket = socket;
    this.equipment = equipment;
    this.dataEvent = new DataEvent(this.equipment.parsingConfiguration);
  }

  /**
   * Maneja los datos entrantes del socket.
   * @param {Buffer} data
   */
  data(data) {
    const filteredData = data.toString().replace(/\x02/g, "");

    if (filteredData.trim()) {
      emitStatusDevice(
        { lastConnection: new Date() },
        this.equipment,
        `Mensaje entrante del equipo ${this.equipment.name} con IPv4: ${this.equipment.configuration.ipAddress}:${this.equipment.configuration.port}`
      );

      this.dataEvent.process(this.socket, data);
    }
  }

  /**
   *
   * @param {Error} err
   * @param {*} scheduleReconnect
   */
  error(err) {
    this.handleConnectionEvent("error", err);
  }

  close() {
    this.handleConnectionEvent("close");
  }

  end() {
    console.log(
      `Conexión cerrada por el equipo ${equipment.name} con IPv4: ${equipment.configuration.ipAddress}:${socket.remotePort}`
    );

    emitStatusDevice(
      {
        last_connection: new Date(),
        connection_status: "disconnected",
      }
    );

    socket.destroy();
  }

  /**
   * Maneja eventos de conexión (cierre o error).
   * @param {"close" | "error"} eventType - Tipo de evento ("close" o "error").
   * @param {Error} [error] - Detalle del error (solo para eventos "error").
   */
  handleConnectionEvent(eventType, error) {
    const { name, configuration } = this.equipment;
    let { ipAddress, port } = configuration
    ipAddress = ipAddress ?? this.socket.remoteAddress;
    port = port ?? this.socket.remotePort;

    switch (eventType) {
      case "close":
        console.info(`Conexión cerrada por el equipo ${name}.`);
        break;

      case "error":
        let msg = "";
        switch (error.code) {
          case "ECONNREFUSED":
            msg = `Conexión rechazada a ${ipAddress}:${port}.`;
            break;
          case "ETIMEDOUT":
            msg = `Tiempo de espera agotado para ${ipAddress}:${port}.`;
            break;
          case "EHOSTUNREACH":
            msg = `No se puede alcanzar el host ${ipAddress} en el puerto ${port}.`;
            break;
          default:
            msg = `Hubo un error en la conexión con el equipo ${name}: ${error.message}`;
        }

        msg += ` Verifica el equipo ${name}.`;
        console.error(msg);

        break;

      default:
        break;
    }


    emitStatusDevice(
      { connection_status: "disconnected", error: error.code },
      equipment,
      msg,
      error && true
    );
  }
}

module.exports = TcpEventHandler;
