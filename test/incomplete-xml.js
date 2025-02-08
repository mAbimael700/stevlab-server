const cheerio = require('cheerio');

// XML mal formateado
const xmlData = `
<smpresults>
<p><n>HCT</n><v>64.3</v><l>35.0</l><h>55.0</h></p>
<pe><n>MCH</n><v>30.0</v><l>25.5</l><h>35.0</h></p
<p><n>HCT</n><v>64.3</v><l>35.0</l><h>55.0</h></p>
</smpresults>
`;

// Cargar el XML en cheerio
const $ = cheerio.load(xmlData, { xmlMode: true });

// Objeto para almacenar los resultados
const results = [];

// Recorrer cada elemento <p>
$('p').each((index, element) => {
  const name = $(element).find('n').text().trim(); // Obtener el valor de <n>
  const value = $(element).find('v').text().trim(); // Obtener el valor de <v>
  const low = $(element).find('l').text().trim(); // Obtener el valor de <l>
  const high = $(element).find('h').text().trim(); // Obtener el valor de <h>

  // Agregar al array de resultados
  results.push({
    name,
    value: parseFloat(value), // Convertir a número
    low: parseFloat(low), // Convertir a número
    high: parseFloat(high), // Convertir a número
  });
});

// Mostrar los resultados
console.log(results);