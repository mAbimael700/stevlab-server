const { A15 } = require("../src/constants/dictionaries/A15");
const { CM200 } = require("../src/constants/dictionaries/CM200");
const { CONTROLAB } = require("../src/constants/dictionaries/CONTROLAB");
const { DYMIND } = require("../src/constants/dictionaries/DYMIND");
const { FULLJIFILM_NX600_DICTIONARIO } = require("../src/constants/dictionaries/FULJIFILM_NX600");
const { MINDRAY_BS120 } = require("../src/constants/dictionaries/MINDRAY_BS120");
const Equipo = require("../src/schemas/device");

const equipos = {
    A15,
    CM200,
    CONTROLAB,
    DYMIND,
    FULLJIFILM_NX600: FULLJIFILM_NX600_DICTIONARIO,
    MINDRAY_BS120
}

async function cargarEquipos(analitosMap) {
    for (const [equipoName, analitos] of Object.entries(equipos)) {
        // Crear la relación de mapeos entre la nomenclatura del equipo y el nombre del analito
        const mapeos = Object.entries(analitos).map(([nomenclatura, code]) => {
            const currAnalito = analitosMap.find(e => e.code === code)
            return ({
                nomenclatura,
                // Buscamos el analito utilizando el código en el analitosMap
                analito: currAnalito ? currAnalito._id : null
            })
        }).filter(mapping => mapping.analito); // Filtramos los mapeos que no tienen analito asociado

        // Insertar el equipo con los mapeos de analitos
        await Equipo.create({ name: equipoName, mapeos });
    }
}


module.exports = { cargarEquipos, equipos }

