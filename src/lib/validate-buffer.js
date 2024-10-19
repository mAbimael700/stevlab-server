const { equipmentsParsers } = require("../middlewares/equiment-manager");


// Función que decide el parser correspondiente del equipo
function validateParser({ id_device }) {

    //Selecciona la función que parsea ese equipo con el ID del equipo
    const currentParser = equipmentsParsers[id_device]    
    if (currentParser) {
        return currentParser
    }

    //En caso de no existir un parser para ese equipo, retorna falso
    return false
}
module.exports = {
    validateParser
}