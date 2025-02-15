const { DeviceConnectionStatus } = require("./DeviceConnectionStatus");

class Device {
    constructor(name, id, connectionType) {
        this.name = name;
        this.id = id;
        this.connectionType = connectionType;
        this.brand = null;
        this.remoteDir = null;
        this.baudRate = null;
        this.ipAddress = null;
        this.port = null;
        this.macAddress = null;
        this.area = { ID: null, NombreArea: null };
        this.status = new DeviceConnectionStatus()
    }

    // Getters


    getStatus() {
        return this.status
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
     * @returns {"TCP server" | "RS-232" | "FTP server"}
     */
    getConnectionType() {
        return this.connectionType;
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
        return this.remoteDir;
    }

    /**
     * 
     * @returns {number}
     */
    getBaudRate() {
        return this.baudRate;
    }

    /**
     * 
     * @returns {string}
     */
    getIpAddress() {
        return this.ipAddress;
    }

    /**
     * 
     * @returns {string}
     */
    getPort() {
        return this.port;
    }

    /**
     * 
     * @returns 
     */
    getRequireTcpServerConn() {
        return this.requireTcpServerConn;
    }

    /**
     * 
     * @returns 
     */
    getRequireFtpConn() {
        return this.requireFtpConn;
    }

    /**
     * 
     * @returns 
     */
    getRequireSerialConn() {
        return this.requireSerialConn;
    }

    /**
     * 
     * @returns 
     */
    getMacAddress() {
        return this.macAddress;
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
     * @param {"TCP server" | "RS-232" | "FTP server"} connectionType 
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
        this.remoteDir = remoteDir;
    }

    /**
     * 
     * @param {number} baudRate 
     */
    setBaudRate(baudRate) {
        this.baudRate = baudRate;
    }

    /**
     * 
     * @param {string} ipAddress 
     */
    setIpAddress(ipAddress) {
        this.ipAddress = ipAddress;
    }


    /**
     * 
     * @param {string} port 
     */
    setPort(port) {
        this.port = port;
    }

    /**
     * 
     * @param {string} macAddress 
     */

    setMacAddress(macAddress) {
        this.macAddress = macAddress;
    }


    setArea(area) {
        this.area = area;
    }
}

module.exports = { Device };