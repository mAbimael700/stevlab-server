const { Socket } = require("node:net");
const { Equipment } = require("../../../domain/Equipment/Equipment");
const { DataEvent } = require("../../data-handler/DataEvent");
const {
  emitStatusDevice,
} = require("../../websocket/emit-device-status");
const { DataEvent } = require("../../data-handler/DataEvent");


class TcpEventHandler {
  /**
   * 
   * @param {Equipment} equipment 
   */
  constructor(equipment) {
    this.equipment = equipment
    this.dataEvent = new DataEvent(this.equipment);
  }

  /**
   * Maneja los datos entrantes del socket.
   * @param {Socket} socket
   * @param {Buffer} data
   */
  handleDataEvent(socket, data) {
    const filteredData = data.toString().replace(/\x02/g, "");
    
    if (filteredData.trim()) {
      emitStatusDevice(
        { lastConnection: new Date() },
        this.equipment,
        `Mensaje entrante del equipo ${this.equipment.name} ${this.equipment.getIpAddress() ? `con IPv4: ${this.equipment.getIpAddress()}` : ""
        } en el puerto ${this.equipment.getPort()}`
      );

      this.dataEvent.process(socket, data);
    }
  }

  /**
   * Maneja eventos de conexión (cierre o error).
   * @param {Socket} client - Cliente TCP.
   * @param {Equipment} equipment - Información del equipo.
   * @param {"close" | "error"} eventType - Tipo de evento ("close" o "error").
   * @param {(equipment: Equipment) => void} scheduleReconnect - Función para programar reconexión.
   * @param {Error} [error] - Detalle del error (solo para eventos "error").
   */
  handleConnectionEvent(client, equipment, eventType, scheduleReconnect, error) {
    const { name, getIpAddress, getPort } = equipment;
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

    scheduleReconnect(equipment);
  }
}

module.exports = TcpEventHandler;