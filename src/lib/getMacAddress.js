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
  let macAddress = null;

  // Buscar la dirección MAC de Ethernet primero
  for (const interfaceName in networkInterfaces) {
    const interfaces = networkInterfaces[interfaceName];

    for (const iface of interfaces) {
      if (
        iface.family === "IPv4" &&
        !iface.internal &&
        interfaceName.toLowerCase().includes("ethernet")
      ) {
        macAddress = iface.mac.toUpperCase().split(":").join("");
        return macAddress; // Retorna inmediatamente si encuentra Ethernet
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
        macAddress = iface.mac.toUpperCase().split(":").join("");
        return macAddress; // Retorna inmediatamente si encuentra Wi-Fi
      }
    }
  }

  console.log("No se encontró la interfaz Ethernet o Wi-Fi con dirección MAC.");
  return macAddress; // Retorna null si no encuentra ninguna
}

module.exports = {
  getMacAddress,
};
