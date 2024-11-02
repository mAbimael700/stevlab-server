function parseData(data) {
    const lines = data.trim().split("\n");
    const parsedResults = [];
    let currentEntry = null;
    let currentFolio = null;
  
    lines.forEach(line => {
      const segments = line.split(/\s+/);
      const folio = segments[0];
      const nombre = [];
      let i = 1;
  

      console.log(segments);
      
      // Obtener el nombre del parámetro hasta encontrar "SER"
      while (segments[i] && segments[i] !== "SER") {
        nombre.push(segments[i]);
        i++;
      }
  
      const parametroNombre = nombre.join(" ");
      const valor = segments[i + 1];
      const unidad_medida = segments[i + 2];
      const fecha = segments[i + 3];
      const hora = segments[i + 4];
      const clave = `${fecha.split('/').reverse().join('')}${hora.replace(/:/g, '')}`;
  
      // Verificar si es un nuevo folio o la primera entrada
      if (folio !== currentFolio) {

        console.log(folio !== currentFolio);
        console.log("Folio: ",folio);
        console.log("Current Folio: ",currentFolio);
        
        
        
        // Guardar la entrada actual si existe
        if (currentEntry) parsedResults.push(currentEntry);
  
        // Crear nueva entrada para el nuevo folio
        currentEntry = {
          tipo: "R",
          id: folio,
          folio: folio,
          nombre_paciente: "",
          sexo: "O",
          parametros: []
        };
  
        // Actualizar el folio actual
        currentFolio = folio;
      }
  
      // Añadir el parámetro a la entrada actual
      currentEntry.parametros.push({
        clave,
        nombre: parametroNombre,
        valor,
        unidad_medida
      });
    });
  
    // Añadir la última entrada si existe
    if (currentEntry) parsedResults.push(currentEntry);
  
    return parsedResults;
  }
  
  // Ejemplo de uso
const rawData = `24030101000334 GLUCOSE SER 142 mg/dL 01/03/2024 14:15:29
24030101000334 UREA UV SER 29.6 mg/dL 01/03/2024 14:09:14
24030101000335 GLUCOSE SER 110 mg/dL 01/03/2024 21:17:22
24030101000335 UREA UV SER 31.9 mg/dL 01/03/2024 21:15:52`;
  
  console.log(JSON.stringify(parseData(rawData), null, 2));
  