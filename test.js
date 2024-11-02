const MSH = require("./src/lib/parsers/HL7-type4/models/MSH.js");
const OBR = require("./src/lib/parsers/HL7-type4/models/OBR.js");
const OBX = require("./src/lib/parsers/HL7-type4/models/OBX.js");

const {
  getFieldSeparator,
  getFieldsSegment,
  getSegments,
} = require("./src/lib/parsers/HL7-type4/messageSpliterFn.js");
const PID = require("./src/lib/parsers/HL7-type4/models/PID.js");

function parseResultsData(hl7Message) {
  //console.log("Dictionary in parseResultsData: ", dictionary);
  
  
  //Divide el mensaje en sus segmentos
  const segments = getSegments(hl7Message);
  const separator = getFieldSeparator(hl7Message);

  //Creamos un objeto para retornarlo como resultado
  let result = {};

  //El arreglo de segmentos se recorre por cada uno de ellos, 
  //dependiento del tipo de mensaje se agrega a un atributo distinto del objeto resultado *

//   segments.forEach((segment) => {
//     //Devuelve un objeto con su tipo de mensaje y una lista de los datos por cada renglon (segmento)
//     const fieldsSegment = getFieldsSegment(separator, segment);

//     switch (fieldsSegment.type) {
//       //Por cada tipo de segmento, se llama una función parecida a un constructor de su modelo de tipo de mensaje HL7
//       case "OBR": {
//         result = { ...result, ...OBR(fieldsSegment) };
//         break;
//       }

//       case "OBX": {
//         if (!result.parametros) {
//           result.parametros = [];
//         }

//         const parametro = OBX(fieldsSegment, dictionary)
//         parametro && result.parametros.push(parametro);
//         break;
//       }

//       case "PID": {
//         result = {
//           ...result,
//           ...PID(fieldsSegment),
//         };
//         break;
//       }
//       /* case "MSH": {
//         result["MSH"] = {
//           message_type: "MSH",
//           segment_name: "Message Header",
//           ...MSH(fieldsSegment),
//         };
//         break;
//       } */

//       default: {
//         console.warn(`Message type '${fieldsSegment.type}' is not recognized`);
//       }
//     }
//   });

  //Devuelve el objeto con el mensaje HL7 parseado
  return [result].flat();
}



