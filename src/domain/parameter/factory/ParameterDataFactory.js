class ParameterDataFactory {
    static createParameterData(parameterData, equipmentId, resultId, options = {}) {
        const { active = true, created_at = new Date() } = options;

        return {
            ...parameterData,
            equipment: { connect: { id: equipmentId } },
            result: { connect: { id: resultId } },
            active,
            created_at: parameterData.created_at || created_at,
        };
    }
}

module.exports = ParameterDataFactory;