const Equipment = require("../../models/Equipment.js");
const { EquipmentParsingConfiguration } = require("./EquipmentParsingConfiguration.js");

class EquipmentConnection extends Equipment {

    /**
     * 
     * @param {*} equipment 
     * @param {EquipmentParsingConfiguration} parsingConfiguration 
     * @param {ClientConnection} connection 
     */
    constructor(equipment, parsingConfiguration ,connection) {

        if (!equipment || !connection) {
            throw new Error("Invalid parameters provided to Equipment constructor");
        }

        super(equipment)
        this.connection = connection
        this.parsingConfiguration = parsingConfiguration
        this.directoryMonitor = null
    }

    setDirectoryMonitor(directoryMonitor){
        this.directoryMonitor = directoryMonitor
    }


}

module.exports = { EquipmentConnection };