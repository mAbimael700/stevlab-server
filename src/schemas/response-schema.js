const { z } = require("zod");

const responseSchema = z.array(
  z.object({
    tipo: z.enum("R").optional(),
    id: z.string().min(1),
    folio: z.string(), // Marcar como optional
    nombre_paciente: z.string().optional(),
    sexo: z.enum(["O", "F", "M", '']).optional().default("O"),
    hora: z.string().optional(),
    fecha: z.string().optional(),
    parametros: z.array(
      // Añadir z.object a la definición del array
      z.object({
        clave: z.string().optional(),
        nombre: z.string(),
        valor: z.string(),
        unidad_medida: z.string(),
        unidad: z.string().optional(),
        rango_min: z.string().optional(),
        rango_max: z.string().optional(),
        indicador: z.string().optional(),
      })
    ),
  })
);

function validateResponse(parsedResult) {
  const result = responseSchema.safeParse(parsedResult);

  if (result.error) {
    console.log("Datos que llegaron" + result.data);
    console.log(result.error.errors);
  }

  return result.success;
}

module.exports = {
  validateResponse,
};
