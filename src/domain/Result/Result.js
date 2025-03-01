class Result {
    constructor(values) {
        this.folio = values.folio
        this.id = values.id
        this.tipo = values.tipo
        this.sexo = values.sexo
        this.fecha = values.fecha
        this.area = values.area ?? null
        this.paciente = new Paciente(values.paciente)
        this.estudio = new Estudio(values.estudio)
        this.chart = new ChartData(values.chart)
        this.parametros = this.#buildParameters(values.parametros)
    }

    #buildParameters(parameters) {
        return parameters.map(p => new ResultParameter(p))
    }
}