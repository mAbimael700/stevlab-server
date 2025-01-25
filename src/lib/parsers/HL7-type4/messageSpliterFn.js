const { generateAckDate } = require("../generate-ack-date");

function getSegments(hl7Message) {
  //Divide el mensaje hl7 por renglones por saltos de línea
  //Retorna un array de segmentos por cada tipo de mensaje
  return hl7Message.trim().split(/(?=MSH|PID|PV1|OBR|OBX)/);
}

function getFieldsSegment(fieldSeparator, segment) {
  //Divide un segmento por sus datos dependiendo del separador definido
  let fields = segment.split(fieldSeparator);

  //Devuelve un objeto con el nombre del segmento y ssu fields
  return { type: fields[0], fields };
}

function getFieldSeparator(hl7Message) {
  //Se busca el segmento Message header
  const mshSegment = getSegments(hl7Message).find((segment) =>
    segment.startsWith("MSH")
  );

  //Devuelve la posición del segmento dónde está definido el separador de segmentos
  return mshSegment ? mshSegment.charAt(3) : "|";
}

function getFieldDataByPosition(message, segment, position) {
  //Se busca el segmento Message header
  const mshSegment = getSegments(message).find((s) => s.startsWith(segment));

  //Devuelve la posición del segmento dónde está definido el separador de segmentos
  return mshSegment ? mshSegment.charAt(position) : null;
}

// Función para generar un mensaje ACK
function generateHl7Ack(messageId, status = "AA") {
  const dateTime = generateAckDate(); // Formato HL7
  return `MSH|^~\\&|StevlabInterfaz|ReceivingFacility|StevlabServer|Laboratorio|${dateTime}||ACK|${messageId}|P|2.5\rMSA|AA|${messageId}\r
  MSA|${status}|${messageId}|Resultado procesado correctamente!|`;
}

module.exports = {
  getSegments,
  getFieldSeparator,
  getFieldsSegment,
  getFieldDataByPosition,
  generateHl7Ack,
};
