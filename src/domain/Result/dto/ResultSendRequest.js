class ResultSendRequest {
  /**
   * @param {ResultWithParametersAndEquipment} result
   */
  constructor(result) {
    this.folio = result.folio;
    this.fecha = result.created_at;
    this.id = result.sample_id;
    this.parametros = result.parameters.map((p) => {
      return {
        nombre: p.description,
        valor: p.value,
        unidad_medida: p.unit_measurement,
        rango_min: p.min_range,
        rango_max: p.max_range,
        clave_sistema: p.parameterDictionary.systemParameter.value,
      };
    });
  }
}
