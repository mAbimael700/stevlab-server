const { parse } = require("date-fns");

function MSH(segment) {
  if (segment.type !== "MSH") {
    throw new Error("El segmento no corresponde a este modelo.");
  }

  const fields = segment.fields;
  // Convertir la cadena en un objeto Date
  const fecha = parse(fields[6], "yyyyMMddHHmmss", new Date());
  return {
    fecha,
  };
}

module.exports = MSH;
