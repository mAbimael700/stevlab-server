const { z } = require("zod");
class ResultSchema {
  static parameterSchema = z.object({
    description: z.string(),
    value: z.string(),
    unit_measurement: z.string().optional(),
    min_range: z.number().optional().nullable(),
    max_range: z.number().optional().nullable(),
    created_at: z.date().optional().default(new Date()),
    active: z.boolean().optional()
  });

  static histogramResultSchema = z.object({
    description: z.string(),
    value: z
      .number()
      .refine((s) => !isNaN(s), {
        message: "El valor no es un número",
        path: ["chart"],
      })
      .transform((s) => parseInt(s)),
    created_at: z.date().optional().default(new Date()),
  });

  static estudioSchema = z.object({
    clave: z.string(),
    descripcion: z.string(),
  });

  static resultSchema = z.object({
    sample_id: z.string().min(1),
    folio: z.string(), // Marcar como optional
    created_at: z.date().optional().default(new Date()),
    parameters: z.array(this.parameterSchema),
    histogramResults: z.array(this.histogramResultSchema).optional(),
    modified_at: z.date().optional().default(new Date()),
    active: z.boolean().optional()
  });

  /**
   * Valida que el resultado parseado sea el correcto y consulta la información en la API
   * del sistema Stevlab para obtener la información del paciente con el folio dado.
   * @param {*} parsedResult
   * @returns
   */
  static safeValidate(result) {
    return this.resultSchema.safeParse(result);
  }

  /**
   * Valida que el resultado parseado sea el correcto y consulta la información en la API
   * del sistema Stevlab para obtener la información del paciente con el folio dado.
   * @param {*} parsedResult
   * @returns
   */
  static validate(result) {
    return this.resultSchema.parse(result);
  }
}
module.exports = {
  ResultSchema,
};
