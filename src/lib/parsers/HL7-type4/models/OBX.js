
function OBX(segment, dictionary) {
  const fields = segment.fields;

  const nombre = fields[4].replaceAll("^", " ");
  const valor = parseFloat(fields[5]).toFixed(2);


  // Si valor es un número lo retorna
  if (!isNaN(valor)) {
    return {
      clave: fields[14] ?? undefined,
      clave_sistema: dictionary[nombre],
      nombre: nombre ?? "",
      valor,
      unidad_medida: fields[6] ?? "",
    };
  }

}

module.exports = OBX;
