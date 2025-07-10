const { getDevicesAreas } = require("../../db/devices-areas");

class EquipmentCommunicationProfileService {
    constructor() {

    }

    getAll() {
        const devices = getDevicesAreas()
        return new Promise((resolve) => resolve(devices));
    }
}

module.exports = { EquipmentCommunicationProfileService }