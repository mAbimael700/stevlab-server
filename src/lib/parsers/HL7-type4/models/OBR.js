function OBR(segment, positions) {
  const folio = positions?.folio ?? 3; // Usa el operador opcional y un valor predeterminado.
  
  if (segment.type !== "OBR") {
    throw new Error("El segmento no corresponde a este modelo.");
  }

  const fields = segment.fields;

  return {
    // clave: fields[6] ?? undefined,
    id: fields[3],
    folio: fields[folio],
  };
}

module.exports = OBR;
