const { exec } = require("node:child_process");

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
                const macAddress = macAddressMatch[0]
                    .toUpperCase()
                    .split("-")
                    .join(""); // Convertir a mayúsculas y quitar guiones
                resolve(macAddress);
            } else {
                console.log("No se encontró la dirección MAC.");
                reject(new Error("No se encontró la dirección MAC."));
            
            }
        });
    });
}

module.exports = {
    getMacAddress
};
