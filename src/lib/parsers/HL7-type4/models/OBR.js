function OBR(segment) {
  if (segment.type !== "OBR") {
    throw new Error("El segmento no corresponde a este modelo.");
  }

  const fields = segment.fields;

  return {
    //clave: fields[6] ?? undefined,
    id: fields[3],
    folio: fields[3],
  };
}

module.exports = OBR;
