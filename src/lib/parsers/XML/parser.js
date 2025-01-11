const { XMLParser } = require("fast-xml-parser");
const { DYMIND } = require("../../../constants/dictionaries/DYMIND");

const parser = (message, dictionary = DYMIND) => {
  const parser = new XMLParser();
  const resultParsed = parser.parse(message);

  const { sample } = resultParsed;

  if (!sample) {
    throw new Error("La estructura del XML no contiene un nodo 'sample'.");
  }

  let fecha,
    id,
    nombre_paciente,
    parametros = [];

  Object.entries(sample).forEach(([key, value]) => {
    const { p: values } = value;

    switch (key) {
      case "smpinfo":
        fecha = values.find((p) => p.n === "DATE")?.v || null;
        id = values.find((p) => p.n === "ID")?.v || null;
        nombre_paciente = values.find((p) => p.n === "ID2")?.v || null;
        break;

      case "smpresults":
        parametros = values.map((p) => ({
          clave_sistema: dictionary[p.n] || "Clave desconocida",
          nombre: p.n,
          valor: p.v.toString(),
          rango_min: p.l || null,
          rango_max: p.h || null,
        }));
        break;

      default:
        console.warn(`Clave no reconocida: ${key}`);
        break;
    }
  });

  return [
    {
      id: id.toString(),
      folio: id.toString(),
      fecha: fecha ? new Date(fecha) : null,
      nombre_paciente,
      parametros,
    },
  ];
};

module.exports = { parser };
