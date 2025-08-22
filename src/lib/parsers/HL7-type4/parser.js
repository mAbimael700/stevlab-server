const MSH = require("./models/MSH.js");
const OBR = require("./models/OBR.js");
const OBX = require("./models/OBX.js");

const {
  getFieldSeparator,
  getFieldsSegment,
  getSegments,
} = require("./messageSpliterFn.js");

const PID = require("./models/PID.js");

function parseResultsData(hl7Message, dictionary, options = {}) {
  const { positions = {} } = options; // Desestructura con un valor predeterminado

  // Divide el mensaje en sus segmentos
  const segments = getSegments(hl7Message);
  const separator = getFieldSeparator(hl7Message);

  // Creamos un objeto para retornarlo como resultado
  let result = {};

  /* El arreglo de segmentos se recorre por cada uno de ellos, 
  dependiento del tipo de mensaje se agrega a un atributo distinto del objeto resultado */
  segments.forEach((segment) => {
    // Devuelve un objeto con su tipo de mensaje y una lista de los datos por cada renglon (segmento)
    const fieldsSegment = getFieldsSegment(separator, segment);

    // Por cada tipo de segmento, se llama una función parecida a un constructor de su modelo de tipo de mensaje HL7
    switch (fieldsSegment.type) {
      case "OBR": {
        result = { ...result, ...OBR(fieldsSegment, positions["OBR"]) };
        break;
      }

      case "OBX": {
        if (!result.parametros) {
          result.parametros = [];
        }

        if (!result.chart) {
          result.chart = [];
        }

        const parametro = OBX(fieldsSegment, dictionary);
        if (parametro) {
          if (parametro.isChart) {
            result.chart.push(parametro);
          } else {
            result.parametros.push(parametro);
          }
        }

        break;
      }

      case "PID": {
        result = {
          ...result,
          ...PID(fieldsSegment),
        };
        break;
      }
      case "MSH": {
        result = { ...result, ...MSH(fieldsSegment) };
        break;
      }

      default: {
        console.warn(
          `Message type '${fieldsSegment.type}' is not recognized or declared`
        );
      }
    }
  });

  // Asegura que `parametros` sea un arreglo
  result.parametros = Array.isArray(result.parametros) ? result.parametros : [];
  //Devuelve el objeto con el mensaje HL7 parseado

  // Asegura que `parametros` siempre sea un arreglo
  if (!Array.isArray(result.parametros)) {
    console.error("Parámetros no es un arreglo válido:", result.parametros);
    result.parametros = []; // Reemplaza con un arreglo vacío si no es válido
  }

  // Validación adicional para el resultado
  if (!result.folio || !result.parametros.length) {
    console.error("El resultado no contiene datos válidos");

    if (!result.folio)
      console.error("El resultado recibido no tiene asignado un folio");
    if (!result.parametros?.length)
      console.error("El resultado recibido envió ningún parámetro");

    return []; // Devuelve un arreglo vacío si los datos no son válidos
  }

  return [result]; // Retorna un arreglo con el resultado
}

module.exports = {
  parser: parseResultsData,
};
