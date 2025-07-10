const { XMLParser } = require("fast-xml-parser");
const { HEMATOLOGY } = require("../../../constants/dictionaries/HEMATOLOGY");

const options = {
  ignoreAttributes: false,
   allowBooleanAttributes: true, 
  parseTagValue: false,  // No parsear valores para evitar errores
  trimValues: true,
  /* stopNodes: ["*.p"],  */// Ignorar errores dentro de etiquetas <p>
}; 

/**
 *
 * @param {string} message
 * @param {Object} dictionary
 * @returns
 */
const parser = (message, dictionary = HEMATOLOGY) => {
  //const xmlParser = new xml2js.Parser({ explicitArray: false, trim: true }).parseString;
  const xmlParser = new XMLParser(options);
  let xmlMsgParsed;

  try {
    xmlMsgParsed = xmlParser.parse(message);
  } catch (error) {
    console.error("Error al parsear el XML dado:", error.message);
    throw new Error(`Error al parsear el XML dado: ${error.message}`);
  }

  // Validar que el resultado del parseo no sea nulo o indefinido
  if (!xmlMsgParsed) {
    console.error("El XML parseado está vacío o es inválido.");
    throw new Error("El XML parseado está vacío o es inválido.");
  }

  // Validar la existencia del nodo 'sample'
  if (!xmlMsgParsed.sample) {
    console.error(
      "La estructura del XML no contiene un nodo 'sample'. XML recibido:",
      JSON.stringify(xmlMsgParsed, null, 2)
    );
    throw new Error("La estructura del XML no contiene un nodo 'sample'.");
  }

  const { sample } = xmlMsgParsed;

  let fecha,
    id,
    nombre_paciente,
    parametros = [];

  Object.entries(sample).forEach(([key, value]) => {
    const { p: parameters } = value;

    switch (key) {
      case "smpinfo":
        fecha = parameters.find((p) => p.n === "DATE")?.v ;
        id = parameters.find((p) => p.n === "ID")?.v || null;
        nombre_paciente = parameters.find((p) => p.n === "ID2")?.v || null;
        break;

      case "smpresults":
        parametros = parameters.map((parameter) => ({
          clave_sistema: dictionary[parameter.n],
          nombre: parameter.n,
          valor: parameter.v?.toString(),
          rango_min: parseFloat(parameter.l) || null,
          rango_max: parseFloat(parameter.h) || null,
        }));
        break;

      default:
        //console.warn(`Clave no reconocida: ${key}`);
        break;
    }
  });

  return [
    {
      id: id?.toString(),
      folio: id?.toString(),
      fecha: fecha ? new Date(fecha) : null,
      nombre_paciente,
      parametros,
    },
  ];
};

module.exports = { parser };
