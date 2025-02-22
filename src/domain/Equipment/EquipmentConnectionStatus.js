class EquipmentConnectionStatus {
    constructor() {
        this.lastConnection = null
        this.connectionStatus = null
    }

    /**
     * 
     * @returns {Date}
     */
    getlastConnection() {
        return this.lastConnection;
    }

    /**
     * 
     * @returns {"connected" | "connecting" | "disconnected" | "reconnecting"}
     */
    getconnectionStatus() {
        return this.connectionStatus;
    }

    /**
     * 
     * @param {Date} date 
     */
    setLastConnection(date) {
        this.lastConnection = date
    }

    /**
     * 
     * @param {"connected" | "connecting" | "disconnected" | "reconnecting"} status 
     */
    setConnectionStatus(status) {
        this.connectionStatus = status
    }

}

module.exports = {
    EquipmentConnectionStatus
}