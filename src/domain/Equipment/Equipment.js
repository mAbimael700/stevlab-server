const { ClientConnection } = require("../ClientConnection/ClientConnection.js");
const { EquipmentConfiguration } = require("./EquipmentConfiguration.js");
const { EquipmentConnectionStatus } = require("./EquipmentConnectionStatus.js");
const { EquipmentParsingConfiguration } = require("./EquipmentParsingConfiguration.js");

class Equipment {
    constructor(equipment, connectionType, configuration) {
        if (!equipment || !connectionType || !configuration) {
            throw new Error("Invalid parameters provided to Equipment constructor");
        }

        this.id = equipment.id;
        this.name = equipment.name;
        this.equipmentID = equipment.equipmentID
        this.brand = equipment.brand;
        this.area = new Area(equipment.area);
        this.status = new EquipmentConnectionStatus()
        this.configuration = new EquipmentConfiguration(configuration)
        this.parsingConfiguration = new EquipmentParsingConfiguration(this.equipmentID)
        this.parsingConfiguration.build()
        this.connection = new ClientConnection(this, connectionType)
        this.connection.build()
    }

    /**
     * 
     */
    setConnection(connection) {
        this.connection = connection
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
        return this.configuration.remoteDirectory;
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
        this.configuration.remoteDirectory = remoteDir;
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