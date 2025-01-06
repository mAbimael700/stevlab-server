const { CONFIG_DIR } = require("../constants/CONFIG_DIR")
const { readFile } = require("../lib/read-file")
const { NetworkInterface } = require("./NetworkInterface")

class Server {

    static status = "inactivo"
    static domain = ""
    static hostname = ""
    static netInterface
    
    static setStatus(newStatus) {
        this.status = newStatus
    }

    static async getInitialServerConfiguration() {
        const json = await readFile(CONFIG_DIR, "server.json")
        const { domain, interface: netInterface } = JSON.parse(json)

        if (!domain) {
            console.warn("No se ha ajustado el dominio personalizado del servidor LIS");
        }

        if (!netInterface) {
            console.warn("No se ha configurado la interfaz de red del servidor LIS");
        }

        this.domain = domain ?? "test.stevlabsoftware.com"
        this.netInterface = netInterface
        this.hostname = NetworkInterface.getHostname()
    }

    static getServerDomain() {
        return this.domain
    }
    static getServerInterface() {
        return this.netInterface
    }

    static getServerData() {
        return {
            status: this.status,
            domain: this.domain,
            hostname: this.hostname,
            interface: this.netInterface,
        }
    }

    static setServerData(){}
}

module.exports = { Server }