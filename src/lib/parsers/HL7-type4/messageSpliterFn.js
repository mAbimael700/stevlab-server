const { generateAckDate } = require("../generate-ack-date");

/**
 * Divide el mensaje hl7 por renglones por saltos de línea (Solo contempla los segmentos MSH|PID|PV1|OBR|OBX )
 * @param {string} message
 * @returns Retorna un array de los segmentos por cada tipo de mensaje
 */
function getSegments(message) {
  return message.trim().split(/(?=MSH|PID|PV1|OBR|OBX)/);
}

/**
 *
 * @param {string} fieldSeparator
 * @param {string} segment
 * @returns
 */
function getFieldsSegment(fieldSeparator, segment) {
  //Divide un segmento por sus datos dependiendo del separador definido
  let fields = segment.split(fieldSeparator);

  //Devuelve un objeto con el nombre del segmento y ssu fields
  return { type: fields[0], fields };
}

/**
 *
 * @param {string} data
 * @returns
 */
function getFieldSeparator(data) {
  //Se busca el segmento Message header
  const mshSegment = getSegments(data).find((segment) =>
    segment.startsWith("MSH")
  );

  //Devuelve la posición del segmento dónde está definido el separador de segmentos
  return mshSegment ? mshSegment.charAt(3) : "|";
}

/**
 * @param {string} message
 * @param {'MSH'|'PID'|'OBR'|'OBX'} segment
 * @param {number} position
 * @returns
 */
function getFieldDataByPosition(message, segment, position) {
  //Se busca el segmento Message header
  const mshSegment = getSegments(message, segment);

  //Devuelve la posición del segmento dónde está definido el separador de segmentos
  return mshSegment ? mshSegment.charAt(position) : null;
}

/**
 *
 * @param {string} message
 * @param {'MSH'|'PID'|'OBR'|'OBX'} segment
 * @returns
 */
function getHl7Field(message, segment) {
  return getSegments(message).find((s) => s.startsWith(segment));
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
/**
 *
 * @param {string} data
 * @param {number} position
 */
function getOBRSegmentDataPosition(data, position) {
  return getHl7Field(data, "OBR").split("|").at(position);
}

/**
 *
 * @param {string} data
 * @param {number} position
 */
function getPIDSegmentDataPosition(data, position) {
  return getHl7Field(data, "PID")
    ?.split("|")
    .at(position)
    ?.replaceAll("\n", "");
}

module.exports = {
  getSegments,
  getFieldSeparator,
  getFieldsSegment,
  getFieldDataByPosition,
  getOBRSegmentDataPosition,
  getPIDSegmentDataPosition,
  generateHl7Ack,
};
