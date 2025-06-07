const { ClientConnection } = require("../ClientConnection/ClientConnection.js");
const EquipmentDto = require("../Equipment/EquipmentDto.js");
const { EquipmentConnectionStatus } = require("../EquipmentConnectionStatus/EquipmentConnectionStatus.js");
const EquipmentProfile = require("../EquipmentProfile/EquipmentProfile.js");
const EquipmentConnectionFactory = require("./EquipmentConnectionFactory.js");

class EquipmentConnection {

    /**
     * 
     * @param {EquipmentDto} equipment 
     */
    constructor(equipment) {

        if (!equipment) {
            throw new Error("Invalid parameters provided to Equipment constructor");
        }

        this.id = equipment.id
        this.name = equipment.name
        this.connectionStatus = new EquipmentConnectionStatus(equipment.connectionStatus)
        this.profile = new EquipmentProfile(equipment.equipmentProfile)
        this.connection = EquipmentConnectionFactory.create(equipment.equipmentProfile.communicationType)

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