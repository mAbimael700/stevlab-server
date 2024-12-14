const { parse, format } = require('date-fns');

function MSH(segment) {

    if (segment.type !== "MSH") {
        throw new Error("El segmento no corresponde a este modelo.");
    }

    const fields = segment.fields;


    // La fecha original en formato 'yyyyMMddHHmmss'
    // const dateString = '20240928140413';

    // Convertir la cadena en un objeto Date
    const fecha = parse(fields[6], 'yyyyMMddHHmmss', new Date());

    return {
        fecha
    }
}

module.exports = MSH