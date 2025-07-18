class ParameterDictionaryService {
    constructor(dependencies) {
        this.parameterDictionaryRepository = dependencies.parameterDictionaryRepository;
        this.systemParameterRepository = dependencies.systemParameterRepository;
    }

    async getByDescription(description) {
        return await this.parameterDictionaryRepository
            .findByParameterDescription(description);
    }

    async getAll() {
        return await this.parameterDictionaryRepository.findAll();
    }

    async create(description, systemParameterId) {
        const existsBySystemParameterId = this.systemParameterRepository.existsBySystemParameterId(systemParameterId);

        if (!existsBySystemParameterId) {
            return await this.parameterDictionaryRepository.create(description, systemParameterId);
        }
    }

}

module.exports = ParameterDictionaryService;