const { z } = require("zod");
const { getPacienteByFolioMuestra } = require("../services/paciente-api");

const responseSchema = z.array(
  z.object({
    tipo: z.enum("R").optional(),
    id: z.string().min(1),
    folio: z.string(), // Marcar como optional
    nombre_paciente: z.string().optional(),
    sexo: z.enum(["O", "F", "M", '']).optional().default("O"),
    hora: z.string().optional(),
    fecha: z.date().optional().default(new Date()),
    parametros: z.array(
      // Añadir z.object a la definición del array
      z.object({
        clave: z.string().optional(),
        clave_sistema: z.string().optional(),
        nombre: z.string(),
        valor: z.string(),
        unidad_medida: z.string(),
        unidad: z.string().optional(),
        rango_min: z.string().optional(),
        rango_max: z.string().optional(),
        indicador: z.string().optional(),

        //Estos datos vienen de la API
        tipo_resultado: z.string().optional(),
        descripcion: z.string().optional()
      })
    ),
    chart: z.array(
      z.object({
        nombre: z.string(),
        valor: z.number().refine((s) => !isNaN(s), {
          message: "El valor no es un número",
          path: "chart"
        }).transform((s) => parseInt(s)),

      })
    ).optional(),
    paciente: z.object(
      {
        nombre: z.string(),
        edad: z.number().optional(),
        sexo: z.string(),
        fecha_nacimiento: z.string().optional(),
      }
    ).optional(),
    estudio: z.object(
      {
        clave: z.string(),
        descripcion: z.string()
      }
    ).optional(),
    area: z.string().optional()
  })
);



// Función para manejar errores de la API
async function fetchPacienteData(folio) {
  try {
    const { recepcions } = await getPacienteByFolioMuestra(folio);

    if (!recepcions || !recepcions[folio]) {
      throw new Error(`Datos de recepción no encontrados para el folio ${folio}`);
    }

    return recepcions[folio];
  } catch (error) {
    console.error(`Error al obtener datos del paciente: ${error.message}`);
    return null; // Devuelve null si falla
  }
}



// Función para transformar datos
async function transformData(obj) {
  const { folio } = obj;
  const data = await fetchPacienteData(folio);

  if (!data) {
    throw new Error("No se pudieron transformar los datos por falta de información");
  }

  const { recepcion, paciente: p, areas: a, estudios: e, analitos } = data;

  console.log(data);

  const [paciente] = p
  const [areas] = a
  const [estudios] = e


  return {
    ...obj,
    paciente: {
      nombre: paciente.paciente,
      edad: parseInt(paciente.edad),
      sexo: paciente.sexo,
      fecha_nacimiento: paciente.nacimiento,
    },
    area: areas.descripcion,
    estudio: {
      clave: estudios.clave,
      descripcion: estudios.descripcion,
    },
    parametros: obj.parametros.map((param) => {
      const analito = analitos.find((a) => a.clave === param.nombre);
      return {
        ...param,
        descripcion: analito ? analito.descripcion : param.descripcion,
      };
    }),
  };
}


async function validateResponse(parsedResult) {
  const validation = await responseSchema.safeParseAsync(parsedResult);


  if (!validation.success) {
    console.log("Datos que llegaron ");
    console.log(parsedResult);
    console.error("Errores de validación:", validation.error.errors);
    return { success: false, errors: validation.error.errors };
  }

  const results = await Promise.all(
    validation.data.map(async (obj) => {
      try {
        return await transformData(obj);
      } catch (error) {
        console.warn(`Error transformando el objeto con id ${obj.id}: ${error.message}`);
        return obj; // Retorna el objeto original si falla la transformación
      }
    })
  );

  return { success: true, data: results }; // Siempre retorna success
}

module.exports = {
  validateResponse,
};
