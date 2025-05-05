const { parse: dateParse } = require("date-fns");

class SpU120BufferParser {
  /**
   *
   * @param {string} data
   */
  constructor(data) {
    this.data = data;
    this.splitedData = this.separate();
  }

  parse() {
    const folio = this.getFolio();
    const parametros = this.getParameters();
    const date = this.getDate();

    return { folio, date, parametros };
  }

  getParameters() {
    return this.splitedData.slice(3).map((line) => {
      const [nombre, indicador, valor, unidad_medida] = line
        .split(/\s+/)
        .filter(Boolean); // Filtra espacios vacíos

      // Decide cómo asignar los valores según la estructura de la línea
      return {
        nombre,
        valor: valor || indicador, // Si no hay 'valor', entonces 'indicador' es el valor
        unidad_medida: unidad_medida || undefined,
        indicador: valor ? indicador : undefined, // Si hay 'valor', entonces 'indicador' existe
      };
    });
  }

  getDate() {
    const dateStr = this.splitedData.at(0).split("Date")[1].trim(); // "21-04-2025 17:10"
    const parsedDate = dateParse(dateStr, ":dd-MM-yyyy HH:mm", new Date());

    return parsedDate;
  }

  getFolio() {
    return this.splitedData.at(2).split(".")[1];
  }

  separate() {
    return this.data.split("\n").map((l) => l.trim());
  }
}

module.exports = { SpU120BufferParser };
