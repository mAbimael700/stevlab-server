const { exec } = require("node:child_process");
const os = require("os");

function getMacAddress(remoteIpAddress) {
  return new Promise((resolve, reject) => {
    exec(`arp -a ${remoteIpAddress}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error ejecutando arp: ${error.message}`);
        reject(error);
        return;
      }

      // Busca la dirección MAC en la salida del comando arp
      const macAddressMatch = stdout.match(
        /([0-9a-f]{2}[:-]){5}([0-9a-f]{2})/i
      );

      if (macAddressMatch) {
        const macAddress = macAddressMatch[0].toUpperCase().split("-").join(""); // Convertir a mayúsculas y quitar guiones
        resolve(macAddress);
      } else {
        const localMacAddress = getLocalMacAddress();

        if (!localMacAddress) {
          console.log("No se encontró la dirección MAC.");
          reject(new Error("No se encontró la dirección MAC."));
        }

        resolve(localMacAddress);
      }
    });
  });
}

function getLocalMacAddress() {
  // Obtener las interfaces de red
  const networkInterfaces = os.networkInterfaces();

  // Buscar la dirección MAC de la interfaz Wi-Fi
  for (const interfaceName in networkInterfaces) {
    const interfaces = networkInterfaces[interfaceName];

    for (const iface of interfaces) {
      // Filtrar solo la dirección IPv4 y que no sea interna
      if (
        iface.family === "IPv4" &&
        !iface.internal &&
        interfaceName.includes("Ethernet")
      ) {
        // Retornar la dirección MAC en formato sin ":", en mayúsculas
        return iface.mac.toUpperCase().split(":").join("");
      }
    }
  }

  console.log("No se encontró la interfaz Wi-Fi o no tiene dirección MAC.");
  return null; // Retornar null si no se encuentra la dirección MAC
}

module.exports = {
  getMacAddress,
};
