function parseMessage(message) {
  // Limpiamos los delimitadores ###
  const cleanMessage = message.trim();

  // Dividimos el mensaje por el carácter ";"
  const fields = cleanMessage.split(";");

  // Creamos la estructura base del resultado
  const result = {
    tipo: "R",
    estado: fields[8] === "OK" ? "NORMAL" : "ANORMAL", // Se interpreta OK como "NORMAL"
    fecha: fields[6], // Fecha del mensaje
    hora: fields[7], // Hora del mensaje
    folio: fields[2].trim(), // Folio
    id: fields[9], // ID
    parametros: [],
  };

  // Procesamos los parámetros de manera dinámica
  // Los parámetros empiezan desde el índice 11 en adelante
  for (let i = 10; i < fields.length; i += 3) {
    // Verificamos si los campos de este parámetro están completos
    if (fields[i] && fields[i + 1] && fields[i + 2]) {
      result.parametros.push({
        nombre: fields[i].trim(), // Nombre del parámetro
        valor: fields[i + 1].trim(), // Valor del parámetro
        unidad_medida: fields[i + 2].trim(), // Unidad del parámetro
      });
    }
  }

  return [result];
}



module.exports = {
    parseMessage
}