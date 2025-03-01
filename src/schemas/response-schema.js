const { z } = require("zod");
const { transformData } = require("../lib/transform-result/transform-result");

const parameterSchema = z.object({
  clave: z.string().optional(),
  clave_sistema: z.string().nullable().optional(),
  nombre: z.string(),
  valor: z.string(),
  unidad_medida: z.string().optional(),
  unidad: z.string().optional(),
  rango_min: z.number().optional().nullable(),
  rango_max: z.number().optional().nullable(),
  indicador: z.string().optional(),
  //Estos datos vienen de la API
  tipo_resultado: z.string().optional(),
  descripcion: z.string().optional(),
});

const pacienteSchema = z.object({
  nombre: z.string(),
  edad: z.number().optional(),
  sexo: z.string(),
  fecha_nacimiento: z.string().optional(),
});

const chartSchema = z.object({
  nombre: z.string(),
  valor: z
    .number()
    .refine((s) => !isNaN(s), {
      message: "El valor no es un número",
      path: ["chart"],
    })
    .transform((s) => parseInt(s)),
});

const estudioSchema = z.object({
  clave: z.string(),
  descripcion: z.string(),
});

const resultSchema = z.object({
  tipo: z.enum("R").optional(),
  id: z.string().min(1),
  folio: z.string(), // Marcar como optional
  nombre_paciente: z.any().optional(),
  sexo: z.enum(["O", "F", "M", ""]).optional().default("O"),
  hora: z.string().optional(),
  fecha: z.date().optional().default(new Date()),
  parametros: z.array(parameterSchema),
  chart: z.array(chartSchema).optional(),
  paciente: pacienteSchema.optional(),
  estudio: estudioSchema.optional(),
  area: z.string().optional(),
});

const responseSchema = z.array(resultSchema);

/**
 * Valida que el resultado parseado sea el correcto y consulta la información en la API
 * del sistema Stevlab para obtener la información del paciente con el folio dado.
 * @param {*} parsedResult
 * @returns
 */
async function validateResponse(parsedResult) {
  const validation = responseSchema.safeParse(parsedResult);

  if (!validation.success) {
    console.warn(
      "¡Los datos parseados proporcionados no son validos!: ",
      JSON.stringify(parsedResult, null, 2)
    );
    return { success: false, errors: validation.error.errors };
  }

  const results = await Promise.all(
    validation.data.map(async (obj) => {
      try {
        return await transformData(obj);
      } catch (error) {
        console.warn(
          `Error transformando el resultado con el folio ${obj.folio}: ${error.message}`
        );
        return obj; // Retorna el objeto original si falla la transformación
      }
    })
  );

  return { success: true, data: results }; // Siempre retorna success
}

module.exports = {
  validateResponse,
  parameterSchema
};
