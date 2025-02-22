class EquipmentConfiguration {
    constructor() {
        this.port = null
        this.macAddress = null
        this.ipAddress = null
        this.baudRate = null
        this.remoteDirectory = null
    }

    setPort(port) {
        this.port = port
    }

    setMacAddress(macAddress) {
        this.macAddress = macAddress
    }

    setIpAddress(ipAddress) {
        this.ipAddress = ipAddress
    }

    setBaudRate(baudRate) {
        this.baudRate = baudRate
    }

    setRemoteDirectory(directory) {
        this.remoteDirectory = directory
    }
}

module.exports = { EquipmentConfiguration }