const { Socket } = require("node:net")
const { Device } = require("../../../domain/Device")
const { dataEvent } = require("../../../lib/data-handler/data-event");
const { removeTCPConnection } = require("./tcp-manager");
const { emitStatusDevice } = require("../../../lib/websocket/emit-device-status");

function handleDataEvent(socket, data, device, parsingData, bufferList) {
  dataEvent(data, device, bufferList, parsingData, socket);
}

/**
 * Maneja eventos de conexión (cierre o error).
 * @param {Socket} client - Cliente TCP.
 * @param {Device} equipment - Información del equipo.
 * @param {"close" | "error"} eventType - Tipo de evento ("close" o "error").
 * @param {(equipment: Device) => void} scheduleReconnect - Función para programar reconexión.
 * @param {Error} [error] - Detalle del error (solo para eventos "error").
 */
function handleConnectionEvent(
  client,
  equipment,
  eventType,
  scheduleReconnect,
  error
) {
  switch (eventType) {
    case "close":
      console.info(`Conexión cerrada con ${equipment.name}.`);
      break;

    case "error":
      let msg = ``;

      switch (error.code) {
        case "ECONNREFUSED":
          msg = `Conexión rechazada a ${host}:${port}.`;
          break;
        case "ETIMEDOUT":
          msg = `Tiempo de espera agotado para ${host}:${port}.`;
          break;
        case "EHOSTUNREACH":
          msg = `No se puede alcanzar el host ${host}.`;
          break;
        default:
          msg = `Hubo un error en la conexión con el equipo ${equipment.name}: ${err.message}`;
      }

      msg += ` Verifica el equipo ${equipment.name}.`

      console.error(msg);
      emitStatusDevice(
        { connection_status: "disconnected", error: err.code },
        equipment,
        msg,
        true
      );
      break;

    default:
      break;
  }

  removeTCPConnection(equipment.id_device);
  scheduleReconnect(equipment);
}
module.exports = {
  handleDataEvent,
  handleConnectionEvent,
};
