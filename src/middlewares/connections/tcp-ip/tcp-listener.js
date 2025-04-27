const { Socket } = require("node:net");
const { deviceValidation } = require("./tcp-device-validation");
const { setTCPConnection, removeTCPConnection } = require("./tcp-manager");
/* const {
  emitStatusDevice,
} = require("../../../lib/websocket/emit-device-status"); */
const bl = require("bl");
const {
  handleDataEvent,
  handleConnectionEvent,
} = require("./tcp-events-handler");

/**
 *
 * @param {Socket} socket
 */
async function tcpSocketListener(socket) {
  // Obtenemos la ip del socket (equipo) en la conexión
  const device = await deviceValidation(socket);

  if (!device) {
    console.warn(
      "Conexión cerrada debido a un problema de validación del equipo."
    );
    socket.destroy();
    return; // Detener ejecución si el dispositivo no es válido
  }

  setTCPConnection(device.data.id_device, socket);

  console.log(
    `Conexión TCP/IP entrante del equipo ${device.data.name} con la dirección IPv4: ${device.ipAddress}:${socket.remotePort}`
  );

  /* emitStatusDevice(
    {
      ip_address: device.ipAddress,
      port: socket.remotePort.toString(),
      connection_status: "connected",
    },
    device.data
  ); */

  // Establece un timeout más largo para la conexión
  socket.setTimeout(60000); // 60 segundos

  const bufferList = new bl();

  socket.on("data", async (data) => {
     handleDataEvent(socket, data, device.data, device.parsingData, bufferList); 
  });

  socket.on("end", () => {
    console.log(
      `Conexión cerrada por el equipo ${device.data.name} con IPv4: ${device.ipAddress}:${socket.remotePort}`
    );

    /* emitStatusDevice(
      {
        last_connection: new Date(),
        connection_status: "disconnected",
      },
      device.data
    ); */

    socket.destroy();
  });

  // Manejador de errores
  socket.on("error", (err) =>
    handleConnectionEvent(socket, device, "error", () => {}, err)
  );

  socket.on("close", () => {
    console.log("Conexión cerrada");
    socket.destroy();
    removeTCPConnection(device.data.id_device);
    /* emitStatusDevice(
      {
        last_connection: new Date(),
        connection_status: "disconnected",
      },
      device.data
    ); */
  });
}

module.exports = { tcpSocketListener };
