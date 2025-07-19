const ParameterValidationService = require("@/domain/parameter/service/ParameterValidationService");
const ParameterVersioningService = require("@/domain/parameter/service/ParameterVersioningService");
const ParameterDataFactory = require("@/domain/parameter/factory/ParameterDataFactory");

class ParameterService {
    constructor(dependencies) {
        this.parameterRepository = dependencies.parameterRepository;
        this.parameterDictionaryRepository = dependencies.parameterDictionaryRepository;

        // Servicios especializados
        this.validationService = new ParameterValidationService();
        this.versioningService = new ParameterVersioningService(this.parameterRepository);
        this.dictionaryService = dependencies.dictionaryService;

        this.includeOptions = {
            include: {
                parameterDictionary: {
                    include: {
                        systemParameter: {
                            include: true,
                        },
                    },
                },
            }
        };
    }

    async getByResultId(resultId) {
        try {
            this.validationService.validateRequiredField(resultId, 'El ID del resultado');
            return await this.parameterRepository.findByResultId(resultId);
        } catch (error) {
            throw new Error(`Error al consultar los parámetros con el resultado #${resultId}: ${error.message}`);
        }
    }

    async getActiveByResultId(resultId) {
        try {
            this.validationService.validateRequiredField(resultId, 'El ID del resultado');
            return await this.parameterRepository.findActiveByResultId(resultId);
        } catch (error) {
            throw new Error(`Error al consultar los parámetros activos con el resultado #${resultId}: ${error.message}`);
        }
    }

    async save(parameterData, equipmentId, resultId) {
        try {
            // Validaciones
            this.validationService.validateParameterData(parameterData);
            this.validationService.validateIds(equipmentId, resultId);

            // Buscar parámetros existentes
            const existingParameters = await this.parameterRepository.findByResultIdAndDescription(
                resultId,
                parameterData.description
            );

            // Determinar acción de versionado
            const versioningAction = this.versioningService.determineVersioningAction(
                parameterData,
                existingParameters
            );

            // Ejecutar acción
            return await this.executeVersioningAction(
                versioningAction,
                parameterData,
                equipmentId,
                resultId,
                existingParameters
            );

        } catch (error) {
            throw new Error(`Error al guardar parámetro: ${error.message}`);
        }
    }

    async executeVersioningAction(action, parameterData, equipmentId, resultId, existingParameters) {
        switch (action.action) {
            case 'IGNORE':
                return action.existingParameter;

            case 'CREATE_INACTIVE':
                return await this.createParameter(parameterData, equipmentId, resultId, {active: false});

            case 'CREATE_NEW':
                if (action.deactivateExisting) {
                    await this.versioningService.deactivateParameters(existingParameters);
                }
                return await this.createParameter(parameterData, equipmentId, resultId, {
                    active: action.shouldBeActive
                });

            default:
                throw new Error(`Acción de versionado no reconocida: ${action.action}`);
        }
    }

    async createParameter(parameterData, equipmentId, resultId, options = {}) {
        const data = ParameterDataFactory.createParameterData(
            parameterData,
            equipmentId,
            resultId,
            options
        );

        const newParameter = await this.parameterRepository.create(data);
        await this.dictionaryService.updateParameterDictionaryReference(newParameter.id);

        return newParameter;
    }

    async findActiveByResult(resultId) {
        try {
            this.validationService.validateRequiredField(resultId, 'El ID del resultado');
            return await this.parameterRepository.findByResultAndActive(resultId, true);
        } catch (error) {
            throw new Error(`Error al buscar parámetros activos: ${error.message}`);
        }
    }

    async getParameterHistory(resultId, description) {
        try {
            this.validationService.validateRequiredField(resultId, 'El ID del resultado');
            this.validationService.validateRequiredField(description, 'La descripción');

            const parameters = await this.parameterRepository.findByResultIdAndDescription(
                resultId,
                description
            );

            return this.sortParametersByDate(parameters);
        } catch (error) {
            throw new Error(`Error al obtener historial del parámetro: ${error.message}`);
        }
    }

    sortParametersByDate(parameters) {
        return parameters.sort((a, b) => {
            if (!a.created_at && !b.created_at) return 0;
            if (!a.created_at) return 1;
            if (!b.created_at) return -1;
            return new Date(b.created_at) - new Date(a.created_at);
        });
    }

    async deactivate(parameterId) {
        try {
            this.validationService.validateRequiredField(parameterId, 'El ID del parámetro');
            return await this.parameterRepository.update(parameterId, {active: false});
        } catch (error) {
            throw new Error(`Error al desactivar parámetro: ${error.message}`);
        }
    }

    async updateValue(resultId, description, newValue, equipmentId) {
        try {
            this.validationService.validateRequiredField(resultId, 'El ID del resultado');
            this.validationService.validateRequiredField(description, 'La descripción');
            this.validationService.validateRequiredField(equipmentId, 'El ID del equipo');

            const existingParameters = await this.parameterRepository.findByResultIdAndDescription(
                resultId,
                description
            );

            if (!existingParameters || existingParameters.length === 0) {
                throw new Error("Parámetro no encontrado");
            }

            const parameterData = {
                description,
                value: newValue,
                created_at: new Date(),
            };

            return await this.save(parameterData, equipmentId, resultId);
        } catch (error) {
            throw new Error(`Error al actualizar valor del parámetro: ${error.message}`);
        }
    }
}

module.exports = ParameterService;
