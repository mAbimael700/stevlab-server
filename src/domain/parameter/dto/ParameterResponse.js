class ParameterResponse {
    /**
     *
     * @param {ParametersWithEquipmentAndParameterDictionaryAndSystemParameter} parameter
     */
    constructor(parameter) {

        this.id = Number(parameter.id),
        this.description = parameter.description
        this.active = parameter.active
        this.createdAt = parameter.created_at
        this.modifiedAt = parameter.modified_at
        this.unit = parameter.unit_measurement
        this.value = parameter.value
        this.maxRange = parameter.max_range
        this.minRange = parameter.min_range
        this.equipment = {
            id: Number(parameter.equipment.id),
            name: parameter.equipment.name,
        }
        this.dictionary = parameter
            .parameterDictionary
            .systemParameter.value
    }
}

module.exports = ParameterResponse;