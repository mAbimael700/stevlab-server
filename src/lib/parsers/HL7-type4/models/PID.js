function PID(segment) {
  const fields = segment.fields;

  return {
    id: fields[1]?.trim(),
    folio: fields[3] === "" ? "Indefinido" : fields[3]?.trim(),
    nombre_paciente: fields[5]?.replaceAll("^", " ")?.trim(),
    sexo: fields[8]?.trim() ?? "O",
  };
}

module.exports = PID;
