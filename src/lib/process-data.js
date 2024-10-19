const { validateParser } = require("./validate-buffer");

function processData(devideId, bufferList) {
  // Devuelve la función parser que le corresponde al equipo y el carácter delimitador
  const { parser, CHAR_DELIMITER } = validateParser({
    id_device: devideId.id,
  });

  // Comprueba que exista el parser y el carácter delimitador en ese equipo
  if (parser && CHAR_DELIMITER) {
    // Buscar el índice del carácter delimitador
  
      //Parsea los datos en un objeto
      const results = parser(message);

      return results;
    
  }
}
