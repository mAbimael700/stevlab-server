const BaseRepository = require("../../repository/BaseRepositories");

class ParameterRepository extends BaseRepository {
    constructor(prisma) {
        super("Parameter", prisma)
        this.includeOptions = {
            include: {
                equipment: true,
                parameterDictionary: {
                    include: {
                        systemParameter: {include: true},
                    },
                },
            }
        }

    }

    /**
     * Busca todos los parámetros por descripción y result_id, ordenados por creation_date (más reciente primero)
     * @param {BigInt} resultId - ID del resultado
     * @param {string} description - Descripción del parámetro
     * @returns {Promise<Parameter[]>}
     */
    async findByResultIdAndDescription(resultId, description) {
        return this.prisma.parameter.findMany({
            where: {result_id: resultId, description},
            orderBy: {created_at: 'desc'},
            ...this.includeOptions
        });
    }

    /**
     *
     * @param resultId
     * @return {Promise<ParametersWithEquipmentAndParameterDictionaryAndSystemParameter[]>}
     */
    async findByResultId(resultId) {
        return this.prisma.parameter.findFirst({
            where: {result_id: resultId},
            ...this.includeOptions
        });
    }

    /**
     *
     * @param resultId
     * @return {Promise<ParametersWithEquipmentAndParameterDictionaryAndSystemParameter[]>}
     */
    async findByResultIdAndActive(resultId) {
        return this.prisma.parameter.findMany({
            where: {result_id: resultId, active: true},
            ...this.includeOptions
        });
    }
}

module.exports = ParameterRepository