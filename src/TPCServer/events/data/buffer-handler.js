function handleBuffer(data, parsingData) {
    const { parser, CHAR_DELIMITER } = parsingData;
  
    if (!parser || !CHAR_DELIMITER) {
      throw new Error("Parser o delimitador no definidos para el equipo");
    }
  
    const delimiterIndex = data.indexOf(CHAR_DELIMITER);
    if (delimiterIndex === -1) {
      return null; // No hay un mensaje completo
    }
  
    const completeMessage = data.slice(0, delimiterIndex + 1);
    const consumedBytes = Buffer.byteLength(completeMessage, "utf-8");
  
    console.log("Mensaje completo recibido: \n", completeMessage);
  
    const results = parser(completeMessage);
    if (!results) {
      throw new Error("El parser devolvió resultados inválidos");
    }
  
    return { results, consumedBytes };
  }
  
  function clearProcessedBuffer(bufferList, consumedBytes) {
    bufferList.consume(consumedBytes);
  }
  
  module.exports = {
    handleBuffer,
    clearProcessedBuffer,
  };
  