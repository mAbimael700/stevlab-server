class ParameterService {
  constructor(parameterRepository) {
    this.parameterRepository = parameterRepository;
  }

  /**
   * Guarda un parámetro con lógica de versionado
   * @param {Object} parameterData - Datos del parámetro
   * @param {string|number} equipmentId - ID del equipo
   * @param {string|number} resultId - ID del resultado
   * @returns {Promise<Object>} - Parámetro creado o existente si se ignora
   */
  async save(parameterData, equipmentId, resultId) {
    try {
      // Validar entrada
      this.validateInput(parameterData, equipmentId, resultId);

      const existingParameter =
        await this.parameterRepository.findByDescription(
          resultId,
          parameterData.description
        );

      if (existingParameter) {
        // Si no hay fecha de creación y el valor es igual, ignorar el nuevo parámetro
        if (
          !parameterData.creation_date &&
          parameterData.value === existingParameter.value
        ) {
          return existingParameter; // Retornar el existente sin crear uno nuevo
        }

        // Determinar si el nuevo debe estar activo
        const shouldCreateActive = this.shouldCreateAsActive(
          parameterData,
          existingParameter
        );

        if (
          shouldCreateActive ||
          this.shouldDeactivateExisting(parameterData, existingParameter)
        ) {
          await this.parameterRepository.update(existingParameter.id, {
            active: false,
          });
        }

        const data = {
          ...parameterData,
          equipment_id: equipmentId,
          result_id: resultId,
          active: shouldCreateActive,
        };

        return await this.parameterRepository.create(data);
      }

      // Si no existe parámetro previo, crear como activo
      const data = {
        ...parameterData,
        equipment_id: equipmentId,
        result_id: resultId,
        active: true,
      };

      return await this.parameterRepository.create(data);
    } catch (error) {
      throw new Error(`Error al guardar parámetro: ${error.message}`);
    }
  }

  /**
   * Determina si el nuevo parámetro debe crearse como activo
   * @param {Object} newParameter - Nuevo parámetro
   * @param {Object} existingParameter - Parámetro existente
   * @returns {boolean} - True si debe crearse como activo
   */
  shouldCreateAsActive(newParameter, existingParameter) {
    // Si no tiene fecha de creación, crear como activo solo si el valor es diferente
    if (!newParameter.creation_date) {
      return newParameter.value !== existingParameter.value;
    }

    // Si tiene fecha de creación, crear como activo si es más reciente o igual
    return newParameter.creation_date >= existingParameter.creation_date;
  }

  /**
   * Determina si se debe desactivar el parámetro existente
   * @param {Object} newParameter - Nuevo parámetro
   * @param {Object} existingParameter - Parámetro existente
   * @returns {boolean} - True si se debe desactivar el existente
   */
  shouldDeactivateExisting(newParameter, existingParameter) {
    // Solo desactivar si el nuevo parámetro tiene fecha y es más reciente
    return (
      newParameter.creation_date &&
      newParameter.creation_date > existingParameter.creation_date
    );
  }

  /**
   * Valida los datos de entrada
   * @param {Object} parameterData - Datos del parámetro
   * @param {string|number} equipmentId - ID del equipo
   * @param {string|number} resultId - ID del resultado
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
      parameterData.creation_date &&
      !(parameterData.creation_date instanceof Date)
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

      const parameters = await this.parameterRepository.findAllByDescription(
        resultId,
        description
      );

      // Ordenar por fecha de creación descendente (más reciente primero)
      return parameters.sort((a, b) => {
        if (!a.creation_date && !b.creation_date) return 0;
        if (!a.creation_date) return 1;
        if (!b.creation_date) return -1;
        return b.creation_date - a.creation_date;
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
      const existingParameter =
        await this.parameterRepository.findByDescription(resultId, description);

      if (!existingParameter) {
        throw new Error("Parámetro no encontrado");
      }

      // Crear nuevo parámetro con el valor actualizado
      const parameterData = {
        description,
        value: newValue,
        creation_date: new Date(),
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
