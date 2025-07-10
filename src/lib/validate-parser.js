const { equipmentsParsers } = require("../lib/parser-models/EQUIPMENT_PARSERS");

/**
 * Valida si el equipo está registrado en el servidor LIS.
 * @param { object{id_device} } Equipo - La el id clave del equipo de laboratorio.
 * @returns { {parser: function, CHAR_DELIMITER:string }} | boolean } Retorna la función parser correspondiente del equipo
 *  o falso en caso de no encontrar el equipo.
 */
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