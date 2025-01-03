const { SERVER } = require("../constants/CONFIG_DIR")
const { readFile } = require("../lib/read-file")
const { NetworkInterface } = require("./network-interface")

class Server {

    static domain = ""
    static hostname = ""
    static interface
    static netmask

    static getInitialServerConfiguration() {
        const json = readFile(SERVER)
        const { domain, interface } = JSON.parse(json)

        if (!domain) {
            console.log("No se ha ajustado el dominio personalizado del servidor LIS");
        }

        if (!interface) {
            console.log("No se ha configurado la interfaz de red del servidor LIS");
        }

        this.domain = domain ?? "test.stevlabsoftware.com"
        this.interface = interface
        this.hostname = NetworkInterface.getHostname()

        //this.hostname = hostname
        //this.netmask = netmask
    }

    static getServerDomain() {
        return this.domain
    }
    static getServerInterface() {
        return this.interface
    }
}

module.exports = { Server }