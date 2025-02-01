const { XMLParser } = require("fast-xml-parser");
const { DYMIND } = require("../../../constants/dictionaries/DYMIND");

/**
 * 
 * @param {string} message 
 * @param {Object} dictionary 
 * @returns 
 */
const parser = (message, dictionary = DYMIND) => {

  const parser = new XMLParser();
  let xmlMsgParser = parser.parse(message)

  /* try {
    xmlMsgParser = parser.parse(message);
  } catch (error) {
    console.error("Error al parsear el XML dado:", error.message);
    throw new Error(`Error al parsear el XML dado: ${error.message}`);
  }

  // Validar que el resultado del parseo no sea nulo o indefinido
  if (!xmlMsgParser) {
    console.error("El XML parseado está vacío o es inválido.");
    throw new Error("El XML parseado está vacío o es inválido.");
  }

  // Validar la existencia del nodo 'sample'
  if (!xmlMsgParser.sample) {
    console.error("La estructura del XML no contiene un nodo 'sample'. XML recibido:", JSON.stringify(xmlMsgParser, null, 2));
    throw new Error("La estructura del XML no contiene un nodo 'sample'.");
  }  */

  const { sample } = xmlMsgParser


  let fecha,
    id,
    nombre_paciente,
    parametros = [];

  Object.entries(sample).forEach(([key, value]) => {
    const { p: parameters } = value;

    switch (key) {
      case "smpinfo":
        fecha = parameters.find((p) => p.n === "DATE")?.v || null;
        id = parameters.find((p) => p.n === "ID")?.v || null;
        nombre_paciente = parameters.find((p) => p.n === "ID2")?.v || null;
        break;

      case "smpresults":
        parametros = parameters.map((parameter) => ({
          clave_sistema: dictionary[parameter.n],
          nombre: parameter.n,
          valor: parameter.v?.toString(),
          rango_min: parameter.l || null,
          rango_max: parameter.h || null,
        }));
        break;

      default:
        //console.warn(`Clave no reconocida: ${key}`);
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
