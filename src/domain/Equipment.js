const { EquipmentConfiguration } = require("./EquipmentConfiguration");
const { EquipmentConnection } = require("./EquipmentConnection");
const { EquipmentConnectionStatus } = require("./EquipmentConnectionStatus");

class Equipment {
    constructor(name, id, connectionType, brand, configuration) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.area = new Area();
        this.status = new EquipmentConnectionStatus()
        this.configuration = new EquipmentConfiguration(configuration)
        this.connection = new EquipmentConnection(this, connectionType)
        this.parsingConfiguration = new EquipmentParsingConfiguration(this.name)
    }


    /**
     * 
     * @returns {string}
     */
    getName() {
        return this.name;
    }

    /**
     * 
     * @returns {string}
     */
    getId() {
        return this.id;
    }


    /**
     * 
     * @returns {"TCP server" | "RS-232" | "FTP server" |"TCP client"}
     */
    getConnectionType() {
        return this.connection.type;
    }

    /**
     * 
     * @returns {string}
     */
    getBrand() {
        return this.brand;
    }

    /**
     * 
     * @returns {string}
     */
    getRemoteDir() {
        return this.configuration.remoteDir;
    }

    /**
     * 
     * @returns {number}
     */
    getBaudRate() {
        return this.configuration.baudRate;
    }

    /**
     * 
     * @returns {string}
     */
    getIpAddress() {
        return this.configuration.ipAddress;
    }

    /**
     * 
     * @returns {string}
     */
    getPort() {
        return this.configuration.port;
    }


    /**
     * 
     * @returns 
     */
    getMacAddress() {
        return this.configuration.macAddress;
    }

    /**
     * 
     * @returns 
     */
    getArea() {
        return this.area;
    }


    /**
     * 
     * @param {string} name 
     */
    // Setters
    setName(name) {
        this.name = name;
    }

    /**
     * 
     * @param {string} id 
     */
    setId(id) {
        this.id = id;
    }

    /**
     * 
     * @param {"TCP server" | "RS-232" | "FTP server | "TCP client"} connectionType 
     */

    setConnectionType(connectionType) {
        this.connectionType = connectionType;
    }

    /**
     * 
     * @param {string} brand 
     */
    setBrand(brand) {
        this.brand = brand;
    }

    /**
     * 
     * @param {string} remoteDir 
     */
    setRemoteDir(remoteDir) {
        this.configuration.remoteDir = remoteDir;
    }

    /**
     * 
     * @param {number} baudRate 
     */
    setBaudRate(baudRate) {
        this.configuration.baudRate = baudRate;
    }

    /**
     * 
     * @param {string} ipAddress 
     */
    setIpAddress(ipAddress) {
        this.configuration.ipAddress = ipAddress;
    }


    /**
     * 
     * @param {string} port 
     */
    setPort(port) {
        this.configuration.port = port;
    }

    /**
     * 
     * @param {string} macAddress 
     */

    setMacAddress(macAddress) {
        this.configuration.macAddress = macAddress;
    }


    setArea(area) {
        this.area = area;
    }
}

module.exports = { Equipment };