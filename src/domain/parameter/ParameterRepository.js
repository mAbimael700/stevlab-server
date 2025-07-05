const BaseRepository = require("../repository/BaseRepositories");

class ParameterRepository extends BaseRepository {
    constructor(prisma) {
        super("Parameter", prisma)
    }

    /**
    * Busca todos los parámetros por descripción y result_id, ordenados por creation_date (más reciente primero)
    * @param {BigInt} resultId - ID del resultado
    * @param {string} description - Descripción del parámetro
    * @returns {Promise<Parameter[]>}
    */
    async findByDescription(resultId, description) {
        return this.prisma.parameter.findMany({
            where: {
                result_id: resultId,
                description: description
            },
            orderBy: {
                created_at: 'desc'
            }
        });
    }
}

module.exports = ParameterRepository