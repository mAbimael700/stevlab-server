class ParameterResponse {
    /**
     *
     * @param {ParametersWithEquipmentAndParameterDictionaryAndSystemParameter} parameter
     */
    constructor(parameter) {
        this.id = parameter.id
        this.description = parameter.description
        this.active = parameter.active
        this.createdAt = parameter.created_at
        this.modifiedAt = parameter.modified_at
        this.unit = parameter.unit_measurement
        this.value = parameter.value
        this.maxRange = parameter.max_range
        this.minRange = parameter.min_range
        this.equipment = {
            id: parameter.equipment.id,
            name: parameter.equipment.name,
        }
    }
}

module.exports = ParameterResponse;