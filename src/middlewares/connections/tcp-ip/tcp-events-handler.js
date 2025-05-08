const { Socket } = require("node:net");
const { dataEvent } = require("../../../lib/data-handler/data-event");
const {
  emitStatusDevice,
} = require("../../../lib/websocket/emit-device-status");
const { SerialPort } = require("serialport");
const { BufferList } = require("bl/BufferList");

/**
 *
 * @param {Socket | SerialPort} socket
 * @param {Buffer} data
 * @param {Equipment} device
 * @param {*} parsingData
 * @param {BufferList} bufferList
 */
function handleDataEvent(socket, data, device, parsingData, bufferList) {
  try {
    const filteredData = data.toString().replace(/\x02/g, "");

    // Verificar si el chunk filtrado tiene datos útiles antes de imprimir
    if (filteredData.trim()) {
      emitStatusDevice(
        {
          last_connection: new Date(),
        },
        `Mensaje entrante del equipo ${device.name} ${device.ip_address && `con IPv4: ${device.ip_address}`
        } en el puerto ${device.port}`
      ); 

      console.log(
        `Mensaje entrante del equipo ${device.name} ${
          device.ip_address && `con IPv4: ${device.ip_address}`
        } en el puerto ${device.port}`
      );

      dataEvent(socket, data, parsingData, bufferList);
    }
  } catch (error) {
    console.error(error.message);
  }
}

/**
 * Maneja eventos de conexión (cierre o error).
 * @param {Socket} client - Cliente TCP.
 * @param {Equipment} equipment - Información del equipo.
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
  try {
    switch (eventType) {
      case "close":
        console.info(`Conexión cerrada con ${equipment.name}.`);
        break;

      case "error":
        let msg = ``;

        switch (error.code) {
          case "ECONNREFUSED":
            msg = `Conexión rechazada a ${equipment.ip_address}:${equipment.port}.`;
            break;
          case "ETIMEDOUT":
            msg = `Tiempo de espera agotado para ${equipment.ip_address}:${equipment.port}.`;
            break;
          case "EHOSTUNREACH":
            msg = `No se puede alcanzar el host ${equipment.ip_address} en el puerto ${equipment.port}.`;
            break;
          case "ECONNRESET":
            msg = `Conexión reiniciada inesperadamente con ${equipment.name}.`;
            break;
          default:
            msg = `Hubo un error en la conexión con el equipo ${equipment.name}: ${error.message}`;
        }

        msg += ` Verifica el equipo ${equipment.name}.`;

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
  } catch (error) {
    console.error(error.message);
  }
}
module.exports = {
  handleDataEvent,
  handleConnectionEvent,
};
