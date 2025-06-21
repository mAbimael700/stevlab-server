const BaseRepository = require("../../Repositories/BaseRepositories");

class ParameterRepository extends BaseRepository {
    constructor(prisma) {
        super("Parameter", prisma)
    }

    /**
    * Busca un parámetro por descripción y result_id, retorna el más reciente por creation_date
    * @param {BigInt} resultId - ID del resultado
    * @param {string} description - Descripción del parámetro
    * @returns {Promise<Parameter |null>}
    */
    async findByDescription(resultId, description) {
        return this.prisma.parameter.findFirst({
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