const { generateAckDate } = require("../generate-ack-date");

/**
 * Divide el mensaje hl7 por renglones por saltos de línea (Solo contempla los segmentos MSH|PID|PV1|OBR|OBX )
 * @param {string} message 
 * @returns Retorna un array de los segmentos por cada tipo de mensaje
 */
function getSegments(message) {
  return message.trim().split(/(?=MSH|PID|PV1|OBR|OBX)/);
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
function generateHl7Ack(
  messageId,
  emisor = "Mindray",
  receptor = "BS-120",
  status = "AA"
) {
  const timestamp = generateAckDate(); // Formato HL7
  const mshSegment = `MSH|^~\\&|||${emisor}|${receptor}|${timestamp}||ACK^R01|${messageId}|P|2.3.1||||0||ASCII|||`;
  const msaSegment = `MSA|${status}|${messageId}|Message accepted|||0|`;

  const ackMessage = `\x0B${mshSegment}\r${msaSegment}\r\x1C\x0D`;
  return ackMessage;
}

module.exports = {
  getSegments,
  getFieldSeparator,
  getFieldsSegment,
  getFieldDataByPosition,
  generateHl7Ack,
};
