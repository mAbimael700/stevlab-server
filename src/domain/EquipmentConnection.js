const { ClientConnection } = require("./ClientConnection/ClientConnection")


class EquipmentConnection {

    /**
     * @param {*} equipment 
     * @param {string} connectionType 
     */
    constructor(equipment, connectionType) {
        this.type = connectionType
        this.client = new ClientConnection(equipment).create(this.type)
    }

}

module.exports = {
    EquipmentConnection
}