function OBX(segment) {
    const fields = segment.fields;
  
    return {
      clave: fields[14] ?? undefined,
      nombre: fields[4].replaceAll("^", " ") ?? undefined,
      resultado: parseFloat(fields[5]).toFixed(2) ?? undefined,
    };
  }

module.exports = OBX;
  
  