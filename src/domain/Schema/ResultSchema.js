const { z } = require("zod");
class ResultSchema {
  static parameterSchema = z.object({
    clave: z.string().optional().nullable(),
    nombre: z.string(),
    valor: z.string(),
    unidad_medida: z.string().optional(),
    unidad: z.string().optional(),
    rango_min: z.number().optional().nullable(),
    rango_max: z.number().optional().nullable(),
    indicador: z.string().optional(),
  });

  static pacienteSchema = z.object({
    nombre: z.string(),
    edad: z.number().optional(),
    sexo: z.string(),
    fecha_nacimiento: z.string().optional(),
  });

  static chartSchema = z.object({
    nombre: z.string(),
    valor: z
      .number()
      .refine((s) => !isNaN(s), {
        message: "El valor no es un número",
        path: ["chart"],
      })
      .transform((s) => parseInt(s)),
  });

  static estudioSchema = z.object({
    clave: z.string(),
    descripcion: z.string(),
  });

  static resultSchema = z.object({
    tipo: z.enum("R").optional(),
    id: z.string().min(1),
    folio: z.string(), // Marcar como optional
    nombre_paciente: z.any().optional(),
    sexo: z.enum(["O", "F", "M", ""]).optional().default("O"),
    hora: z.string().optional(),
    fecha: z.date().optional().default(new Date()),
    parametros: z.array(this.parameterSchema),
    chart: z.array(this.chartSchema).optional(),
    paciente: this.pacienteSchema.optional(),
    estudio: this.estudioSchema.optional(),
    area: z.string().optional(),
  });

  /**
   * Valida que el resultado parseado sea el correcto y consulta la información en la API
   * del sistema Stevlab para obtener la información del paciente con el folio dado.
   * @param {*} parsedResult
   * @returns
   */
  static validate(result) {
    const validation = this.resultSchema.safeParse(result);

    if (!validation.success) {
        throw new Error("¡Los datos parseados proporcionados no son validos!: ", {
        cause: validation.error.errors,
      });
    }

    return validation;

  }
}
module.exports = {
  ResultSchema,
};
