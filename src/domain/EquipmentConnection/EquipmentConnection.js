const { ClientConnection } = require("../ClientConnection/ClientConnection.js");
const { EquipmentConnectionStatus } = require("../EquipmentConnectionStatus/EquipmentConnectionStatus.js");
const { EquipmentProfile } = require("../EquipmentProfile/EquipmentProfile.js");

class EquipmentConnection {

    /**
     * 
     * @param {*} equipment 
     * @param {EquipmentProfile} equipmentProfile 
     */
    constructor(equipment, equipmentProfile) {

        if (!equipment || !equipmentProfile) {
            throw new Error("Invalid parameters provided to Equipment constructor");
        }

        this.id = equipment.id
        this.name = equipment.name
        this.connectionStatus = new EquipmentConnectionStatus(equipment.connectionStatus)
        this.connection = null
        this.profile = equipmentProfile
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