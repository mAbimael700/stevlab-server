const ParameterRepository = require("../repository/ParameterRepository");

class ParameterService {
    /**
     *
     * @param {ParameterRepository} parameterRepository
     */
    constructor(parameterRepository) {
        this.parameterRepository = parameterRepository;
        this.includeOptions = {
            include: {
                parameterDictionary: {
                    include: {
                        systemParamater: {
                            include: true,
                        },
                    },
                },
            }
        }
    }

    async getByResultId(resultId) {
        try {
            return await this.parameterRepository.findByResultId(resultId);
        } catch (error) {
            throw new Error(`Error al consultar los parametros con el resultado #${resultId}: ${error.message}`,);
        }
    }

    async getActiveByResultId(resultId) {
        try {
            return await this.parameterRepository.findActiveByResultId(resultId);
        } catch (error) {
            throw new Error(
                `Error al consultar los parametros con el resultado #${resultId}: ${error.message}`
            );
        }
    }

    /**
     * Guarda un parámetro con lógica de versionado
     * @param {Object} parameterData - Datos del parámetro
     * @param {bigint} equipmentId - ID del equipo
     * @param {bigint} resultId - ID del resultado
     * @returns {Promise<Object>} - Parámetro creado o existente si se ignora
     */
    async save(parameterData, equipmentId, resultId) {
        try {
            // Validar entrada
            this.validateInput(parameterData, equipmentId, resultId);

            const existingParameters =
                await this.parameterRepository.findByResultIdAndDescription(
                    resultId,
                    parameterData.description
                );

            // Caso 1: No hay parámetros existentes con la misma descripción
            if (!existingParameters || existingParameters.length === 0) {
                const data = {
                    ...parameterData,
                    equipment: {connect: {id: equipmentId}},
                    result: {connect: {id: resultId}},
                    active: true,
                    created_at: parameterData.created_at || new Date(),
                };

                return await this.parameterRepository.create(data);
            }

            // Caso 2: El parámetro recibido tiene fecha de creación
            if (parameterData.created_at) {
                return await this.handleParameterWithDate(
                    parameterData,
                    existingParameters,
                    equipmentId,
                    resultId
                );
            }

            // Caso 3 y 4: El parámetro recibido NO tiene fecha de creación
            return await this.handleParameterWithoutDate(
                parameterData,
                existingParameters,
                equipmentId,
                resultId
            );
        } catch (error) {
            throw new Error(`Error al guardar parámetro: ${error.message}`);
        }
    }

    /**
     * Maneja parámetros que vienen con fecha de creación
     * @param {Object} parameterData - Datos del parámetro
     * @param {Array} existingParameters - Parámetros existentes
     * @param {string|number} equipmentId - ID del equipo
     * @param {string|number} resultId - ID del resultado
     * @returns {Promise<Object>} - Parámetro creado o existente si se ignora
     */
    async handleParameterWithDate(
        parameterData,
        existingParameters,
        equipmentId,
        resultId
    ) {
        // Encontrar el parámetro más reciente en la BD
        const mostRecentExisting = existingParameters.reduce((latest, current) => {
            if (!latest.created_at) return current;
            if (!current.created_at) return latest;
            return current.created_at > latest.created_at ? current : latest;
        });

        const receivedDate = parameterData.created_at;
        const mostRecentDate = mostRecentExisting.created_at;

        // Si las fechas son iguales
        if (mostRecentDate && receivedDate.getTime() === mostRecentDate.getTime()) {
            // Si el valor también es igual, ignorar completamente
            if (parameterData.value === mostRecentExisting.value) {
                return mostRecentExisting;
            }

            // Si el valor es distinto, guardar como inactivo
            const data = {
                ...parameterData,
                equipment: {connect: {id: equipmentId}},
                result: {connect: {id: resultId}},
                active: false,
            };

            return await this.parameterRepository.create(data);
        }

        // Determinar si el parámetro recibido es más reciente
        const isReceivedMoreRecent =
            !mostRecentDate || receivedDate > mostRecentDate;

        // Si el recibido es más reciente, desactivar todos los existentes
        if (isReceivedMoreRecent) {
            await this.deactivateAllParameters(existingParameters);
        }

        // Crear el nuevo parámetro
        const data = {
            ...parameterData,
            equipment: {connect: {id: equipmentId}},
            result: {connect: {id: resultId}},
            active: isReceivedMoreRecent,
        };

        return await this.parameterRepository.create(data);
    }

    /**
     * Maneja parámetros que vienen sin fecha de creación
     * @param {Object} parameterData - Datos del parámetro
     * @param {Array} existingParameters - Parámetros existentes
     * @param {string|number} equipmentId - ID del equipo
     * @param {string|number} resultId - ID del resultado
     * @returns {Promise<Object>} - Parámetro creado o existente si se ignora
     */
    async handleParameterWithoutDate(
        parameterData,
        existingParameters,
        equipmentId,
        resultId
    ) {
        // Verificar si algún parámetro existente tiene el mismo valor
        const parameterWithSameValue = existingParameters.find(
            (param) => param.value === parameterData.value
        );

        // Si existe un parámetro con el mismo valor, ignorar el nuevo
        if (parameterWithSameValue) {
            return parameterWithSameValue;
        }

        // Si no existe uno con el mismo valor, desactivar todos los existentes
        await this.deactivateAllParameters(existingParameters);

        // Crear el nuevo parámetro como activo con fecha actual
        const data = {
            ...parameterData,
            equipment: {connect: {id: equipmentId}},
            result: {connect: {id: resultId}},
            active: true,
            created_at: new Date(),
        };

        return await this.parameterRepository.create(data);
    }

    /**
     * Desactiva todos los parámetros en la lista
     * @param {Array} parameters - Lista de parámetros a desactivar
     * @returns {Promise<void>}
     */
    async deactivateAllParameters(parameters) {
        const updatePromises = parameters.map((param) =>
            this.parameterRepository.update(param.id, {active: false})
        );

        await Promise.all(updatePromises);
    }

    /**
     * Valida los datos de entrada
     * @param {Object} parameterData - Datos del parámetro
     * @param {bigint} equipmentId - ID del equipo
     * @param {bigint} resultId - ID del resultado
     * @throws {Error} - Si la validación falla
     */
    validateInput(parameterData, equipmentId, resultId) {
        if (!parameterData) {
            throw new Error("Los datos del parámetro son requeridos");
        }

        if (!parameterData.description) {
            throw new Error("La descripción del parámetro es requerida");
        }

        if (parameterData.value === undefined || parameterData.value === null) {
            throw new Error("El valor del parámetro es requerido");
        }

        if (!equipmentId) {
            throw new Error("El ID del equipo es requerido");
        }

        if (!resultId) {
            throw new Error("El ID del resultado es requerido");
        }

        // Validar fecha si existe
        if (
            parameterData.created_at &&
            !(parameterData.created_at instanceof Date)
        ) {
            throw new Error("La fecha de creación debe ser un objeto Date válido");
        }
    }

    /**
     * Busca parámetros activos por resultado
     * @param {string|number} resultId - ID del resultado
     * @returns {Promise<Array>} - Lista de parámetros activos
     */
    async findActiveByResult(resultId) {
        try {
            if (!resultId) {
                throw new Error("El ID del resultado es requerido");
            }

            return await this.parameterRepository.findByResultAndActive(
                resultId,
                true
            );
        } catch (error) {
            throw new Error(`Error al buscar parámetros activos: ${error.message}`);
        }
    }

    /**
     * Busca el historial de un parámetro por descripción
     * @param {string|number} resultId - ID del resultado
     * @param {string} description - Descripción del parámetro
     * @returns {Promise<Array>} - Historial del parámetro ordenado por fecha
     */
    async getParameterHistory(resultId, description) {
        try {
            if (!resultId || !description) {
                throw new Error("El ID del resultado y la descripción son requeridos");
            }

            const parameters = await this.parameterRepository.findByResultIdAndDescription(
                resultId,
                description
            );

            // Ordenar por fecha de creación descendente (más reciente primero)
            return parameters.sort((a, b) => {
                if (!a.created_at && !b.created_at) return 0;
                if (!a.created_at) return 1;
                if (!b.created_at) return -1;

                const dateA = new Date(a.created_at);
                const dateB = new Date(b.created_at);

                return dateB - dateA;
            });
        } catch (error) {
            throw new Error(
                `Error al obtener historial del parámetro: ${error.message}`
            );
        }
    }

    /**
     * Desactiva un parámetro específico
     * @param {string|number} parameterId - ID del parámetro
     * @returns {Promise<Object>} - Parámetro actualizado
     */
    async deactivate(parameterId) {
        try {
            if (!parameterId) {
                throw new Error("El ID del parámetro es requerido");
            }

            return await this.parameterRepository.update(parameterId, {
                active: false,
            });
        } catch (error) {
            throw new Error(`Error al desactivar parámetro: ${error.message}`);
        }
    }

    /**
     * Actualiza el valor de un parámetro activo
     * @param {string|number} resultId - ID del resultado
     * @param {string} description - Descripción del parámetro
     * @param {any} newValue - Nuevo valor
     * @returns {Promise<Object>} - Nuevo parámetro creado
     */
    async updateValue(resultId, description, newValue, equipmentId) {
        try {
            const existingParameters =
                await this.parameterRepository.findByResultIdAndDescription(resultId, description);

            if (!existingParameters || existingParameters.length === 0) {
                throw new Error("Parámetro no encontrado");
            }

            // Crear nuevo parámetro con el valor actualizado
            const parameterData = {
                description,
                value: newValue,
                created_at: new Date(),
            };

            return await this.save(parameterData, equipmentId, resultId);
        } catch (error) {
            throw new Error(
                `Error al actualizar valor del parámetro: ${error.message}`
            );
        }
    }
}

module.exports = ParameterService;
