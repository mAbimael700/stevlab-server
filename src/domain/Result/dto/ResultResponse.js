class ResultResponse {
  /**
   * @param {ResultWithParametersAndEquipment} result
   */
  constructor(result) {
    this.id = result.id;
    this.createdAt = result.created_at;
    this.folio = result.folio;
    this.sampleId = result.sample_id;

    // Si quieres acceder a parameters y equipment
    this.parameters = result.parameters.map((p) => {
      const {
        created_at,
        value,
        unit_measurement,
        id,
        description,
        max_range,
        min_range,
      } = p;

      const equipment = {
        id: p.equipment.id,
        name: p.equipment.name,
      };

      return {
        id,
        description,
        active,
        value,
        createdAt: created_at,
        unit: unit_measurement,
        maxRange: max_range,
        minRange: min_range,
        equipment,
      };
    });
  }
}

module.exports = ResultResponse;
