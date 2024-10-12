function PID(segment) {
  const fields = segment.fields;

  return {
    id: fields[1] ?? undefined,
    folio: fields[3] === "" ? "Indefinido" : fields[3],
    nombre_paciente: fields[5].replaceAll("^", " ") ?? undefined,
    sexo: fields[8] ?? undefined,
    //unidad_medida: fields[6] ?? undefined,
  };
}

module.exports = PID;
