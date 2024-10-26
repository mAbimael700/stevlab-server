//Formatea el nombre
function formatName(name) {
  const newName = name.split("^").at(1);
  return newName ? newName : name.replaceAll("^", " ");
}

const wordsNotAdmitted = ["Histogram", "Line", "line"]

function OBX(segment, dictionary) {

  // Obtenemos las celdas
  const fields = segment.fields;

  // Devuelve el nombre está en la celda 4, sino existe devuelve la tercera celda
  const nombre = formatName(fields[4] || fields[3]);

  // Formateamos el valor en caso de que esté en formato separados por comas
  const valor = parseFloat(fields[5].replace(",", ".")).toFixed(2);

  // Si valor del segmento es un número y su nombre no es parte de los analítos lo devuelve
  if (!isNaN(valor) && !wordsNotAdmitted.some(word => nombre.includes(word))) {
    return {
      clave: fields[14],
      clave_sistema: dictionary?.[nombre], // Este el diccionario del equipo en cuestión 
      nombre: nombre ?? "",
      valor,
      unidad_medida: fields[6] ?? "",
    };
  }

}

module.exports = OBX;
