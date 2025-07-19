class ParameterDictionaryService {
    constructor(dependencies) {
        this.parameterRepository = dependencies.parameterRepository;
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
        const existsBySystemParameterId = await this.systemParameterRepository.existsBySystemParameterId(systemParameterId);

        if (!existsBySystemParameterId) {
            return  this.parameterDictionaryRepository.create(description, systemParameterId);
        }
    }

    async updateParameterDictionaryReference(parameterId) {
        try {
            const parameter = await this.parameterRepository.findById(parameterId);

            if (!parameter) {
                return;
            }

            const parameterDictionary = await this.parameterDictionaryRepository
                .findByParameterDescription(parameter.parameter_description);

            if (parameterDictionary) {
                await this.parameterRepository.update(parameterId, {
                    parameter_dictionary_id: parameterDictionary.id,
                });
            }
        } catch (error) {
            console.error(`Error actualizando referencia del diccionario: ${error.message}`);
        }
    }

}

module.exports = ParameterDictionaryService;