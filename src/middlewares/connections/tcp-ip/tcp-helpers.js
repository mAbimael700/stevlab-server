const { removeTCPConnection, getTCPConnection } = require("./tcp-manager");
const { createTCPConnection } = require("./tcp-connection");
const { removeReconnectInterval } = require("../reconnect-manager");
const {
  emitStatusDevice,
} = require("../../../lib/websocket/emit-device-status");
const { getEquipmentById } = require("../../equipment/equipment-helpers");

/**
 * Cierra y elimina una conexión TCP para un dispositivo específico.
 * @param {Object} device - Información del equipo de laboratorio
 */
function closeTCP(device) {
  console.log(device);

  const idDevice = device.id_device;

  if (getTCPConnection(idDevice)) {
    console.log(
      `Cerrando y eliminando conexión TCP para el equipo: ${device.name}.`
    );
    removeReconnectInterval(idDevice); // Limpia también los intentos de reconexión programados
    removeTCPConnection(idDevice); // Reutiliza la lógica de eliminación
    emitStatusDevice(
      { connection_status: "disconnected", last_connection: new Date() },
      device,
      `Conexión TCP cerrada para el equipo ${device.name}.`
    );
  } else {
    console.log(`No se encontró una conexión TCP activa para ${idDevice}.`);
    throw new Error(`No se encontró una conexión TCP activa para ${idDevice}.`);
  }
}

async function connectTCP(device) {
  const idDevice = device.id_device;


  try {
    if (getTCPConnection(idDevice)) {
      console.log(`Cerrando conexión existente para ${device.name}.`);
      emitStatusDevice(
        { connection_status: "disconnected", last_connection: new Date() },
        device,
        `Cerrando conexión existente para ${device.name} en ${host}:${port}.`
      );
      closeTCP(device);
    }

    await createTCPConnection(device);
  } catch (error) {
    console.error(error)
  }

}

/**
 * Verifica la conexión con un dispositivo TCP.
 * @param {string} id_device - El identificador del dispositivo TCP.
 * @returns {boolean} - Devuelve `true` si hay conexión, `false` si no la hay.
 */
function testTcpDevice(id_device) {
  const socket = getTCPConnection(id_device);
  const device = getEquipmentById(id_device)

  if (!socket) {
    console.warn("No se encontró una conexión TCP para el dispositivo:", id_device);
    return false;
  }

  const handlePortError = (error) => {
    console.error("Error en la conexión TCP:", error.message);
    throw new Error("Error en la conexión TCP: " + error.message);
  };

  // Escuchar eventos de error del socket
  socket.on("error", handlePortError);

  try {
    // Verifica si el socket está escribible (conectado)
    console.log(socket.connecting);

    if ((socket.writable || !socket.destroyed) && !socket.connecting) {
      console.info("El socket TCP está conectado.");
      return true;
    } else {
      console.warn("El socket TCP no está conectado. Intentando reconectar...");

      // Intenta reconectar si el socket no está conectado
      socket.connect(device.port, device.ip_address);

      // Envía un mensaje de prueba para verificar la conexión
      socket.write("Probando conexión con el equipo...", (err) => {
        if (err) {
          console.error("Error al enviar el mensaje de prueba:", err.message);
          return false;
        } else {
          console.info("Mensaje de prueba enviado correctamente.");
          return true;
        }
      });

      return false;
    }
  } catch (error) {
    console.error("Ocurrió un error al probar la conexión TCP:", error.message);
    return false;
  } finally {
    // Limpiar el listener de errores para evitar fugas de memoria
    socket.removeListener("error", handlePortError);
  }
}


module.exports = { connectTCP, closeTCP, testTcpDevice };
