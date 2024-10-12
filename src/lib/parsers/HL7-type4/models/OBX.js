function OBX(segment) {
  const fields = segment.fields;

  return {
    clave: fields[14] ?? undefined,
    nombre: fields[4].replaceAll("^", " ") ?? "",
    valor: parseFloat(fields[5]).toFixed(2) ?? "",
    unidad_medida: fields[6] ?? "",
  };
}

module.exports = OBX;
