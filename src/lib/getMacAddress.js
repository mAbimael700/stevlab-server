const { exec } = require("node:child_process");
const os = require("os");

/**
 * Obtiene la dirección MAC de un dispositivo remoto utilizando la dirección IP especificada.
 * Si no se encuentra la dirección MAC remota, intenta obtener la dirección MAC local.
 * @param {string} remoteIpAddress - Dirección IP del dispositivo remoto.
 * @returns {Promise<string>} Una promesa que resuelve con la dirección MAC en formato "XXXXXXXXXXXX" (mayúsculas y sin separadores).
 */
function getMacAddress(remoteIpAddress) {
  return new Promise((resolve, reject) => {
    exec(`arp -a ${remoteIpAddress}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error ejecutando arp: ${error.message}`);
        reject(error);
        return;
      }

      // Busca la dirección MAC en la salida del comando arp
      const macAddressMatch = stdout.match(/([0-9a-f]{2}[:-]){5}([0-9a-f]{2})/i);

      if (macAddressMatch) {
        const macAddress = macAddressMatch[0].toUpperCase().replace(/[:-]/g, ""); // Convertir a mayúsculas y quitar separadores
        resolve(macAddress);
      } else {
        const localMacAddress = getLocalMacAddress();

        if (!localMacAddress) {
          console.log("No se encontró la dirección MAC.");
          reject(new Error("No se encontró la dirección MAC."));
        } else {
          resolve(localMacAddress);
        }
      }
    });
  });
}

/**
 * Obtiene la dirección MAC de la interfaz de red local, dando prioridad a Ethernet y luego a Wi-Fi.
 * @returns {string|null} Dirección MAC en formato "XXXXXXXXXXXX" (mayúsculas y sin separadores), o null si no se encuentra.
 */
function getLocalMacAddress() {
  // Obtener las interfaces de red
  const networkInterfaces = os.networkInterfaces();

  // Buscar la dirección MAC de Ethernet primero
  for (const interfaceName in networkInterfaces) {
    const interfaces = networkInterfaces[interfaceName];

    for (const iface of interfaces) {
      if (
        iface.family === "IPv4" &&
        !iface.internal &&
        interfaceName.toLowerCase().includes("ethernet")
      ) {
        return iface.mac.toUpperCase().replace(/:/g, "");
      }
    }
  }

  // Si no encuentra Ethernet, busca Wi-Fi
  for (const interfaceName in networkInterfaces) {
    const interfaces = networkInterfaces[interfaceName];

    for (const iface of interfaces) {
      if (
        iface.family === "IPv4" &&
        !iface.internal &&
        interfaceName.toLowerCase().includes("wi-fi")
      ) {
        return iface.mac.toUpperCase().replace(/:/g, "");
      }
    }
  }

  console.log("No se encontró la interfaz Ethernet o Wi-Fi con dirección MAC.");
  return null; // Retorna null si no encuentra ninguna
}

module.exports = {
  getMacAddress,
};
