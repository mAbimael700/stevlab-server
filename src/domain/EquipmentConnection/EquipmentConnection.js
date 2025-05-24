const { ClientConnection } = require("../ClientConnection/ClientConnection.js");
const { EquipmentConfiguration } = require("../Equipment/EquipmentConfiguration.js");
const { EquipmentConnectionStatus } = require("../EquipmentConnectionStatus/EquipmentConnectionStatus.js");
const { EquipmentProfileConfiguration } = require("../EquipmentProfileConfiguration/EquipmentProfileConfiguration.js");

class EquipmentConnection {

    /**
     * 
     * @param {*} equipment 
     * @param {EquipmentProfileConfiguration} profileConfiguration 
     */
    constructor(equipment, profileConfiguration) {

        if (!equipment || !profileConfiguration) {
            throw new Error("Invalid parameters provided to Equipment constructor");
        }

        this.id = equipment.id
        this.name = equipment.name
        this.connectionStatus = new EquipmentConnectionStatus(equipment.connectionStatus)
        this.connection = null
        this.profileConfiguration = profileConfiguration
    }

    /**
     * 
     * @param {ClientConnection} connection 
     */
    setConnection(connection) {
        this.connection = connection
    }

}

module.exports = { EquipmentConnection };