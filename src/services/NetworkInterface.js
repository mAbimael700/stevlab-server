const os = require('node:os');
const { SERVER } = require('../constants/CONFIG_DIR');
const { readFile } = require('../lib/read-file');

class NetworkInterface {

    static getNetworkInterfaces() {
        const interfacesOnDevice = os.networkInterfaces();
        const interfaces = Object.entries(interfacesOnDevice).map(([iface, protocols]) => {
            const protocol = protocols.find(p => p.family === "IPv4")
            return {
                interface: iface,
                ...protocol
            }
        })

        return interfaces
    }

    static getConfiguratedNetworkInterface() {
        const json = readFile(SERVER)
        const { interface: netInterface } = JSON.parse(json)
        return this.getNetworkInterfaceByName(netInterface)
    }


    static getNetworkInterfaceByName(name) {

        const interfacesOnDecive = os.networkInterfaces()
        const interfaceData = interfacesOnDecive[name]?.find(iface => iface.family === "IPv4")

        if (!interfaceData) {
            console.warn("No existe esta interfaz de red en el equipo");
            return null
        }

        return {
            name,
            ...interfaceData
        }
    }

    static getHostname() {
        return os.hostname();
    }
}

module.exports = {
    NetworkInterface
}