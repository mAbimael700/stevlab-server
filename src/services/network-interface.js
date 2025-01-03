const os = require('node:os');

class NetworkInterface {

    static getNetworkInterfaces() {
        const interfacesOnDevices = os.networkInterfaces();
        const interfaces = Object.entries(interfacesOnDevices).map(([iface, protocols]) => {
            const protocol = protocols.find(p => p.family === "IPv4")
            return {
                interface: iface,
                ...protocol
            }
        })

        return interfaces
    }

    static getHostname() {
        return os.hostname();
    }
}

module.exports = {
    NetworkInterface
}