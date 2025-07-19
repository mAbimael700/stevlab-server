const BaseRepository = require("@/domain/repository/BaseRepositories");

class ParameterDictionaryRepository extends BaseRepository {
    constructor(prisma) {
        super("ParameterDictionary", prisma);
    }

    findByParameterDescription(description) {
        return this.prisma.parameterDictionary.findFirst({
            where: {parameter_description: description},
            include: {systemParameter: true}
        })
    }

    findAll(options) {
        return super.findAll({include: {systemParameter: true}, ...options});
    }

    async create(description, systemParameterId) {
        return super.create({
            parameter_description: description,
            system_parameter_id: systemParameterId,
        });
    }
}

module.exports = ParameterDictionaryRepository;