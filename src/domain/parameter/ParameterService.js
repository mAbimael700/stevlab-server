class ParameterService {
    constructor(parameterRepository) {
        this.parameterRepository = parameterRepository
    }

    async save(parameterData, equipmentId, resultId) {
        const active = true
        const parameterResponse = await this.parameterRepository
            .existByDescription(
                resultId,
                parameterData.description
            );


        if (parameterResponse) {
            if (parameterResponse.creation_date < parameterData.creation_date) {
                await this.parameterRepository.update(parameterResponse.id, { active: false })
            } else {
                active = false
            }
        }

        const data = {
            ...parameterData,
            equipment_id: equipmentId,
            result_id: resultId,
            active
        }

        return await this.parameterRepository.save(data)
    }
}

module.exports = ParameterService