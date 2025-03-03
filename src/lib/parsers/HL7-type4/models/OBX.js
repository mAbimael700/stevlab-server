/**
 * Formatea el nombre del parametros
 * @param {string} name
 * @returns
 */
function formatName(name) {
  const newName = name.split("^").at(1);
  return newName ? newName : name.replaceAll("^", " ");
}

/**
 * Extrae el valor numérico de una cadena en formato "Negativo(0.78)" o "Positivo(0.78)",
 * si el valor es solo el número solo lo castea a dato tipo numner
 * @param {string} value
 * @returns
 */
function extractNumericValue(value) {
  const regex = /(Negativo|Positivo)\(([-+]?\d*\.\d+|\d+)\)/;
  const match = value?.match(regex);
  return match ? parseFloat(match[2]) : parseFloat(value?.replace(",", "."));
}

// Lista de palabras que indican que el valor es un gráfico
const CHART_KEYWORDS = ["Histogram", "Line", "line"];

function OBX(segment, dictionary) {
  // Obtenemos las celdas
  const { fields } = segment;

  // Devuelve el nombre está en la celda 4, sino existe devuelve la tercera celda
  const nombre = formatName(fields[4] || fields[3]);

  // Formateamos el valor en caso de que esté en formato separados por comas
  const valor = extractNumericValue(fields[5]).toFixed(2);

  const [rango_min, rango_max] =
    fields[7]
      ?.split("-")
      .map((range) =>
        range ? parseFloat(range.replace(",", ".")) : undefined
      ) ?? [];

  // Determina si el segmento es un gráfico
  const isChart = CHART_KEYWORDS.some((word) => nombre.includes(word));

  // Si el valor es numérico y no es un gráfico, devuelve los datos del análisis
  if (!isNaN(valor) && !isChart) {
    return {
      clave_sistema: dictionary?.[nombre], // Este el diccionario del equipo en cuestión
      nombre: nombre,
      valor: valor,
      unidad_medida: fields[6],
      rango_min: rango_min,
      rango_max: rango_max,
    };
  }

  if (!isNaN(valor) && isChart) {
    return {
      isChart: true,
      nombre: nombre,
      valor,
    };
  }
}

module.exports = OBX;
