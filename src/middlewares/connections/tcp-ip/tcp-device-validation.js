const { getMacAddress } = require("../../../lib/getMacAddress");
const { validateParser } = require("../../../lib/validate-parser");
const { verifyDeviceRegistered } = require("../../equipment/equipment-helpers");
const net = require("node:net");

/**
 * Valida si el equipo está registrado en el servidor LIS.
 * @param {net.Socket} socket - El socket de conexión TCP/IP del equipo.
 * @returns {Promise<{data:{},parsingData:{parser:function, CHAR_DELIMITER: string},ipAddress: string,macAddress: string}> | null} Retorna los datos del equipo o cierra la conexión en caso de no encontrar el equipo
 */
async function deviceValidation(socket) {
  try {
    // Obtener dirección IP remota
    let currentRemoteIpAddress = socket.remoteAddress;

    // Verificar si es una dirección IPv6 mapeada a IPv4
    if (currentRemoteIpAddress.startsWith("::ffff:")) {
      currentRemoteIpAddress = currentRemoteIpAddress.split("::ffff:")[1];
    }

    // Obtener la dirección MAC utilizando la dirección IP remota
    let currentRemoteMacAddress;
    try {
      currentRemoteMacAddress = await getMacAddress(currentRemoteIpAddress);
    } catch (error) {
      console.error(
        `Error al obtener la dirección MAC para la IP ${currentRemoteIpAddress}: ${error.message}`
      );
      socket.destroy();
      return null;
    }

    if (!currentRemoteMacAddress) {
      console.warn(
        `No se encontró la dirección MAC para el equipo con la dirección IP ${currentRemoteIpAddress}. Cerrando conexión.`
      );
      socket.destroy();
      return null;
    }

    // Verificar si el dispositivo está registrado
    let registeredDevice;
    try {
      registeredDevice = verifyDeviceRegistered(currentRemoteMacAddress);
    } catch (error) {
      console.error(
        `Error al verificar el registro del dispositivo con MAC ${currentRemoteMacAddress}: ${error.message}`
      );
      socket.destroy();
      return null;
    }

    if (!registeredDevice) {
      console.warn("Equipo no registrado. Conexión cerrada.");
      socket.destroy();
      return null;
    }

    // Asignar dirección IP y puerto al dispositivo registrado
    registeredDevice.ip_address = currentRemoteIpAddress;
    registeredDevice.port = socket.remotePort;

    // Validar el parser del dispositivo
    let deviceParsingData;
    try {
      deviceParsingData = validateParser({
        id_device: registeredDevice.id,
      });
    } catch (error) {
      console.error(
        `Error al validar el parser para el dispositivo con ID ${registeredDevice.id}: ${error.message}`
      );
      socket.destroy();
      return null;
    }

    if (!deviceParsingData) {
      console.warn("El equipo no tiene un parser registrado. Conexión cerrada.");
      socket.destroy();
      return null;
    }

    // Retornar los datos del dispositivo
    return {
      data: registeredDevice,
      parsingData: deviceParsingData,
      ipAddress: currentRemoteIpAddress,
      macAddress: currentRemoteMacAddress,
    };
  } catch (error) {
    // Manejo de errores inesperados
    console.error(`Error inesperado en deviceValidation: ${error.message}`);
    socket.destroy();
    return null;
  }
}

module.exports = {
  deviceValidation,
};
