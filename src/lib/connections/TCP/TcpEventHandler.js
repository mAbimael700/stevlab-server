const { Socket } = require("node:net");
const { DataEvent } = require("../../DataManagment/DataEvent");
const { emitStatusDevice } = require("../../websocket/emit-device-status");

class TcpEventHandler {
  /**
   * @param {Socket} socket
   * @param {Equipment} equipment
   */
  constructor(socket, equipment) {
    this.socket = socket;
    this.equipment = equipment;
    this.dataEvent = new DataEvent(this.equipment);
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
        `Mensaje entrante del equipo ${this.equipment.name} ${
          this.equipment.getIpAddress()
            ? `con IPv4: ${this.equipment.getIpAddress()}`
            : ""
        } en el puerto ${this.equipment.getPort()}`
      );

      this.dataEvent.process(this.socket, data);
    }
  }

  /**
   *
   * @param {Error} err
   * @param {*} scheduleReconnect
   */
  error(err, scheduleReconnect) {
    this.handleConnectionEvent("error", scheduleReconnect, err);
  }

  close(scheduleReconnect) {
    this.handleConnectionEvent("close", scheduleReconnect);
  }

  end() {
    console.log(
      `Conexión cerrada por el equipo ${
        equipment.name
      } con IPv4: ${equipment.getIpAddress()}:${socket.remotePort}`
    );

    emitStatusDevice(
      {
        last_connection: new Date(),
        connection_status: "disconnected",
      },
      result.data
    );

    socket.destroy();
  }

  /**
   * Maneja eventos de conexión (cierre o error).
   * @param {"close" | "error"} eventType - Tipo de evento ("close" o "error").
   * @param {(equipment: Equipment) => void} scheduleReconnect - Función para programar reconexión.
   * @param {Error} [error] - Detalle del error (solo para eventos "error").
   */
  handleConnectionEvent(eventType, scheduleReconnect, error) {
    const { name, getIpAddress, getPort } = this.equipment;
    const ipAddress = getIpAddress();
    const port = getPort();

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
        emitStatusDevice(
          { connection_status: "disconnected", error: error.code },
          equipment,
          msg,
          true
        );
        break;

      default:
        break;
    }

    scheduleReconnect(this.equipment);
  }
}

module.exports = TcpEventHandler;
