const Equipment = require("../../models/Equipment.js");
const { EquipmentParsingConfiguration } = require("./EquipmentParsingConfiguration.js");

class EquipmentConnection extends Equipment {
    constructor(equipment, clientConnection) {

        if (!equipment) {
            throw new Error("Invalid parameters provided to Equipment constructor");
        }

        super(equipment)
        this.parsingConfiguration = new EquipmentParsingConfiguration(this.equipmentID)
        this.parsingConfiguration.build()
        this.connection = clientConnection
        this.connection.build()
    }


}

module.exports = { EquipmentConnection };