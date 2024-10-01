function OBR(segment){
    
    if(segment.type !== "OBR"){
        throw new Error('El segmento no corresponde a este modelo.')
    }

    const fields = segment.fields;

    return {
        clave: fields[6] ?? undefined,
    }

}

module.exports = OBR;