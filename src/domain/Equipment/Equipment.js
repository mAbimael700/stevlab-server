const { EquipmentConfiguration } = require("./EquipmentConfiguration");
const { EquipmentConnectionStatus } = require("./EquipmentConnectionStatus");

class Equipment {
    constructor(equipment) {
        this.id = equipment.id;
        this.name = equipment.name;
        this.equipmentID = equipment.equipmentID
        this.brand = equipment.brand;
        this.area = new Area(equipment.area);
        this.status = new EquipmentConnectionStatus()
        this.configuration = new EquipmentConfiguration(equipment.configuration)
    }
}

module.exports = { Equipment }