const { equipmentsParsers } = require("../middlewares/equiment-manager");

function validateParser({ id_device }) {

    const currentParser = equipmentsParsers[id_device]
    if (currentParser) {
        return currentParser
    }
    return false
}
module.exports = {
    validateParser
}