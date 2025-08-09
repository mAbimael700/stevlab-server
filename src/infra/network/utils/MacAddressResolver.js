const {exec} = require("node:child_process");
const os = require("os");

class MacAddressResolver {
    /**
     * Resuelve la dirección MAC para una IP dada
     * @param {string} ipAddress - Dirección IP
     * @returns {Promise<string>} MAC address normalizada
     */
    async resolve(ipAddress) {
        try {
            return await this.getRemoteMacAddress(ipAddress);
        } catch (error) {
            // Fallback a MAC local si no se puede obtener la remota
            const localMac = this.getLocalMacAddress();
            if (!localMac) {
                throw new Error(`No se pudo resolver MAC address para IP: ${ipAddress}`);
            }
            return localMac;
        }
    }

    /**
     * Obtiene la MAC address de un dispositivo remoto usando ARP
     * @param {string} ipAddress
     * @returns {Promise<string>}
     */
    getRemoteMacAddress(ipAddress) {
        return new Promise((resolve, reject) => {
            exec(`arp -a ${ipAddress}`, (error, stdout, stderr) => {
                if (error) {
                    reject(new Error(`Error ejecutando ARP: ${error.message}`));
                    return;
                }

                const macMatch = stdout.match(/([0-9a-f]{2}[:-]){5}([0-9a-f]{2})/i);

                if (macMatch) {
                    const normalizedMac = this.normalizeMacAddress(macMatch[0]);
                    resolve(normalizedMac);
                } else {
                    reject(new Error("MAC address no encontrada en tabla ARP"));
                }
            });
        });
    }

    /**
     * Obtiene la MAC address de la interfaz de red local
     * Prioriza Ethernet sobre Wi-Fi
     * @returns {string|null}
     */
    getLocalMacAddress() {
        const networkInterfaces = os.networkInterfaces();

        // Prioridad: Ethernet
        const ethernetMac = this.findMacByInterfaceType(networkInterfaces, "ethernet");
        if (ethernetMac) return ethernetMac;

        // Fallback: Wi-Fi
        const wifiMac = this.findMacByInterfaceType(networkInterfaces, "wi-fi");
        if (wifiMac) return wifiMac;

        return null;
    }

    /**
     * Busca MAC address por tipo de interfaz
     * @param {Object} networkInterfaces
     * @param {string} interfaceType
     * @returns {string|null}
     */
    findMacByInterfaceType(networkInterfaces, interfaceType) {
        for (const [interfaceName, interfaces] of Object.entries(networkInterfaces)) {
            if (!interfaceName.toLowerCase().includes(interfaceType)) continue;

            const validInterface = interfaces.find(iface =>
                iface.family === "IPv4" && !iface.internal
            );

            if (validInterface) {
                return this.normalizeMacAddress(validInterface.mac);
            }
        }
        return null;
    }

    /**
     * Normaliza formato de MAC address a mayúsculas con guiones
     * @param {string} macAddress
     * @returns {string}
     */
    normalizeMacAddress(macAddress) {
        return macAddress.toUpperCase().replace(/:/g, "-");
    }
}

module.exports = MacAddressResolver;