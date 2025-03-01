const { parameterSchema } = require("../../schemas/response-schema");

class ResultParameter {
    constructor(values) {
        const validatedValues = parameterSchema.parse(values);

        this.clave = validatedValues.clave;
        this.claveSistema = validatedValues.clave_sistema;
        this.nombre = validatedValues.nombre;
        this.valor = validatedValues.valor;
        this.unidadMedida = validatedValues.unidad_medida;
        this.rangoMin = validatedValues.rango_min;
        this.rangoMax = validatedValues.rango_max;
        this.indicador = validatedValues.indicador;
        this.tipo = validatedValues.tipo_resultado;
        this.descripcion = validatedValues.descripcion;
    }

    // Método para obtener los valores en formato de objeto
    toObject() {
        return {
            clave: this.clave,
            claveSistema: this.claveSistema,
            nombre: this.nombre,
            valor: this.valor,
            unidadMedida: this.unidadMedida,
            rangoMin: this.rangoMin,
            rangoMax: this.rangoMax,
            indicador: this.indicador,
            tipo: this.tipo,
            descripcion: this.descripcion,
        };
    }


    // Método para validar datos externos
    static validate(values) {
        return parameterSchema.safeParse(values);
    }
}