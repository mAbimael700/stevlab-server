const { EquipmentConfiguration } = require("./EquipmentConfiguration");
const { EquipmentConnectionStatus } = require("./EquipmentConnectionStatus");
const { EquipmentParsingConfiguration } = require("./EquipmentParsingConfiguration");

class Equipment {
    constructor(equipment, clientConnection) {
        this.id = equipment.id;
        this.name = equipment.name;
        this.equipmentID = equipment.equipmentID
        this.brand = equipment.brand;
        this.area = equipment.area;
        this.status = new EquipmentConnectionStatus()
        this.configuration = new EquipmentConfiguration(equipment.configuration)
        this.parsingConfiguration = EquipmentParsingConfiguration(equipment.parsingConfiguration)

    }
}

module.exports = { Equipment }