const { BufferList } = require("bl/BufferList");
const { saveFile } = require("../save-file");

/**
 *
 * @param {string} data
 * @param {{parser: ()=> object, CHAR_DELIMITER: string}} parsingData
 * @returns {{completeMessage: string, consumedBytes: number, messageId: string} | null}
 */
function handleBuffer(data, parsingData) {
  try {
    const { CHAR_DELIMITER } = parsingData;

    if (!CHAR_DELIMITER) {
      throw new Error("Parser o delimitador no definidos para el equipo");
    }

    // Crear la expresión regular
    const delimiterRegex = new RegExp(CHAR_DELIMITER, "g");

    // Buscar el índice del delimitador
    const delimiterIndex = data.search(delimiterRegex);

    if (delimiterIndex !== -1) {
      const match = data.match(delimiterRegex);
      const matchLength = match ? match[0].length : 0;

      const completeMessage = data.slice(0, delimiterIndex + matchLength);
      const consumedBytes = Buffer.byteLength(completeMessage, "utf-8");

      // Extraer el ID del mensaje (MSH-10)
      const messageId = completeMessage.match(
        /MSH\|.*?\|.*?\|.*?\|.*?\|.*?\|.*?\|.*?\|.*?\|(.*?)\|/
      )?.[1];

      const filePath = saveFile(completeMessage);
      console.log(
        "¡Mensaje completo recibido!. Mensaje guardado en la ruta:\n",
        filePath
      );

      return { completeMessage, consumedBytes, messageId };
    }

    return null;
  } catch (error) {
    console.error("Error al manejar el stream del buffer", error.message);
  }
}
/**
 * @param {string} message
 * @param {{parser: ()=> object, CHAR_DELIMITER: string}} parsingConfig
 * @returns {Object[]}
 */
function parseMessage(message, parsingConfig) {
  try {
    const { parser } = parsingConfig;

    if (!parser) {
      throw new Error("Parser no definido para el equipo");
    }

    const results = parser(message);

    if (!results) {
      throw new Error("El parseo del mensaje no devolvió resultados");
    }

    return [results].flat();
  } catch (error) {
    console.error("Error al parsear el mensaje:", error.message);
  }
}

/**
 *
 * @param {BufferList} bufferList
 * @param {number} consumedBytes
 */
function clearProcessedBuffer(bufferList, consumedBytes) {
  if (consumedBytes > 0 && consumedBytes <= bufferList.length) {
    bufferList.consume(consumedBytes);
  } else {
    console.error("Error: consumedBytes no válido:", consumedBytes); // Depuración
    console.warn(
      "Datos a eliminar después del consumo: ",
      bufferList.toString("utf-8")
    );
    console.warn(
      "Datos a eliminar después del consumo: ",
      bufferList.toString("utf-8")
    );
    bufferList.consume(bufferList.length);
  }
}

module.exports = {
  handleBuffer,
  parseMessage,
  clearProcessedBuffer,
};
