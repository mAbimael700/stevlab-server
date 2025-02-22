const parametroRegex =
  /!(\d{3}[fh])([A-Za-z+-]+)\s*(\d+\.?\d*)\s*([a-zA-Z/%]*)\s*([A-Za-z0-9]+)/;
  
function parser(message) {
  const lineRegex = /!(\d{3}[afhc])[^!]+/g;

  const lines = message.match(lineRegex) || [];
  console.log(lines);
  let currentResult = null;

  lines.forEach((line) => {
    if (line.startsWith("!000a")) {
      parseHeader(line);
    } else if (parametroRegex.test(line)) {
      parseParameter(line);
    } else if (line.startsWith("!001c")) {
      parsePatientInfo(line);
    } else {
      console.warn("La siguiente linea no válida", line);
    }
  });

  return [currentResult];

  function parseHeader(line) {
    const header = line.split(" ").filter((e) => e.trim() !== "");

    const hour = header[1].slice(0, 2); // Hora
    const minute = header[1].slice(2, 4); // Minutos
    const second = header[1].slice(4, 6); // Segundos
    const yearShort = header[1].slice(6, 8); // Últimos dos dígitos del año
    const month = header[1].slice(8, 10) - 1; // Mes (diciembre, base 0)
    const day = header[1].slice(10, 12); // Día

    const year =
      yearShort < 50 ? 2000 + parseInt(yearShort) : 1900 + parseInt(yearShort);

    const date = new Date(year, month, day, hour, minute, second);

    currentResult = {
      tipo: "R",
      id: header[1].slice(12),
      folio: header[1].slice(12),
      fecha: date,
      parametros: [],
    };
  }

  function parseParameter(line) {
    const parts = line.match(parametroRegex);
    if (parts) {
      const [_, clave, nombre, valorRaw, unidadMedida, otroCampo] = parts;

      // Si la unidad de medida está pegada al valor, separarla
      let valor = parseFloat(valorRaw);
      let unidad = unidadMedida;
      if (!unidadMedida) {
        const match = valorRaw.match(/(\d+\.?\d*)([a-zA-Z/%]+)/);
        if (match) {
          valor = parseFloat(match[1]);
          unidad = match[2];
        }
      }

      currentResult.parametros.push({
        clave: nombre,
        nombre,
        valor: valor.toFixed(2),
        unidad_medida: unidad || "N/A",
      });
    }
  }

  function parsePatientInfo(line) {
    const nameParts = line.match(/!001c([A-Za-z\s]+)/);
    if (nameParts) {
      const pacientInfo = nameParts[1]
        .trim()
        .split(" ")
        .filter((e) => e.trim() !== "");
      currentResult.nombre_paciente = pacientInfo.join(" ");
      currentResult.sexo = pacientInfo.at(-1) || "O";
    }
  }
}

module.exports = {
  parser,
};
