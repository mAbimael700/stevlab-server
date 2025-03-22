const { EquipmentParsingConfiguration } = require("./EquipmentParsingConfiguration.js");

class EquipmentConnection {

    /**
     * 
     * @param {string} equipmentID 
     * @param {ClientConnection} clientConnection 
     */
    constructor(equipmentID, clientConnection) {
        if (!equipmentID || !clientConnection) {
            throw new Error("Invalid parameters provided to Equipment constructor");
        }

        this.equipmentID = equipmentID; // Solo necesitas el ID, no toda la clase Equipment
        this.connection = clientConnection
        this.connection.build()
    }

}

module.exports = { EquipmentConnection };