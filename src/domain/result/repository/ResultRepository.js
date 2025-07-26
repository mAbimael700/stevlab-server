const BaseRepository = require("../../repository/BaseRepositories");

class ResultRepository extends BaseRepository {
    /**
     *
     * @param {PrismaClient} prisma
     */
    constructor(prisma) {
        super("Result", prisma);
    }

    /**
     * Verifica si existe un resultado con el folio especificado
     * @param {string} folio
     * @returns {Promise<boolean>}
     */
    async existByFolio(folio) {
        const result = await this.prisma.result.findFirst({
            where: {folio},
        });
        return result !== null;
    }

    /**
     * Verifica si existe un resultado con el folio especificado
     * @param {string} folio
     * @returns {Promise<import("@/infra/prisma/generated").Result | undefined>}
     */
    async findByFolio(folio) {
        return this.prisma.result.findFirst({
            where: {folio},
        });
    }

    /**
     * Verifica si existe un resultado con el folio especificado
     * @param {string} folio
     * @returns {Promise<import("@/infra/prisma/generated").Result | undefined>}
     */
    async findByFolioWithHistorial(folio) {
        return this.prisma.result.findFirst({
            where: {folio},
            ...this.buildIncludeOptions()
        });
    }

    /**
     * Verifica si existe un resultado con el folio especificado
     * @param {bigint} id
     * @returns {Promise<import("@/infra/prisma/generated").Result | undefined>}
     */
    async findByIdWithParameters(id) {
        return this.findById(id, this.buildIncludeOptions({activeOnly: true}));
    }


    async updateLastModifiedAt(id, date) {
        await this.update(id, {last_modified_at: date});
    }

    async findAllWithIncludeOptions() {
        return this.findAll(this.buildIncludeOptions({activeOnly: true}))
    }

    buildIncludeOptions({activeOnly = false}) {
        const includeOptions = {
            include: {
                parameters: {
                    include: {
                        equipment: true,
                        parameterDictionary: {
                            include: {
                                systemParamater: {
                                    include: true,
                                },
                            },
                        },
                    },
                },
            },
        };

        if (activeOnly) {
            includeOptions.include.parameters.where = {active: true};
        }

        return includeOptions;
    }
}

module.exports = ResultRepository;
