class BaseRepository {
    /**
     *
     * @param {string} modelName
     * @param {PrismaClient} prisma
     */
    constructor(modelName, {prisma}) {
        this.model = modelName;
        this.prisma = prisma;
    }

    async create(data) {
        try {
            return this.prisma[this.model].create({data});
        } catch (e) {
            throw new Error(`Error creating ${this.model}: ${e.message}`);
        }
    }

    async findById(id, options) {
        try {
            return this.prisma[this.model].findUnique({where: {id}, ...options});
        } catch (e) {
            throw new Error(`Error consulting ${this.model} with Id ${id}: ${e.message}`);
        }
    }

    async findAll(options = {}) {
        try {
            return this.prisma[this.model].findMany(options);
        } catch (e) {
            throw new Error(`Error consulting ${this.model}: ${e.message}`);
        }
    }

    async update(id, data) {
        try {
            return this.prisma[this.model].update({where: {id}, data});
        } catch (e) {
            throw new Error(`Error updating ${this.model} with Id ${id}: ${e.message}`);
        }
    }

    async delete(id) {
        try {
            return this.prisma[this.model].delete({where: {id}});
        } catch (e) {
            throw new Error(`Error deleting ${this.model} with Id ${id}: ${e.message}`);
        }
    }
}

module.exports = BaseRepository;
