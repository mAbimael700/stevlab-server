const { ClientConnection } = require("../ClientConnection/ClientConnection.js");
const { EquipmentConfiguration } = require("../Equipment/EquipmentConfiguration.js");
const { EquipmentConnectionStatus } = require("../EquipmentConnectionStatus/EquipmentConnectionStatus.js");
const { EquipmentParsingProfileConfiguration } = require("../EquipmentCommunicationProfileConfiguration/EquipmentCommunicationProfileConfiguration.js");

class EquipmentConnection {

    /**
     * 
     * @param {*} equipment 
     * @param {EquipmentParsingProfileConfiguration} parsingProfileConfiguration 
     */
    constructor(equipment, parsingProfileConfiguration) {

        if (!equipment || !parsingProfileConfiguration) {
            throw new Error("Invalid parameters provided to Equipment constructor");
        }

        this.id = equipment.id
        this.name = equipment.name
        this.profile = equipment.profile
        this.configuration = new EquipmentConfiguration(equipment.configuration)
        this.connectionStatus = new EquipmentConnectionStatus(equipment.connectionStatus)
        this.connection = null
        this.parsingConfiguration = parsingProfileConfiguration
    }

    /**
     * 
     * @param {ClientConnection} connection 
     */
    setConnection(connection) {
        this.connection = connection
    }

    build(){
        switch (this.configuration.connectionType) {
            case value:
                
                break;
        
            default:
                break;
        }
    }
}

module.exports = { EquipmentConnection };