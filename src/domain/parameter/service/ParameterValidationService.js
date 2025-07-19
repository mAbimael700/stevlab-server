class ParameterValidationService {
    validateParameterData(parameterData) {
        if (!parameterData) {
            throw new Error("Los datos del parámetro son requeridos");
        }

        if (!parameterData.description) {
            throw new Error("La descripción del parámetro es requerida");
        }

        if (parameterData.value === undefined || parameterData.value === null) {
            throw new Error("El valor del parámetro es requerido");
        }

        if (parameterData.created_at && !(parameterData.created_at instanceof Date)) {
            throw new Error("La fecha de creación debe ser un objeto Date válido");
        }
    }

    validateIds(equipmentId, resultId) {
        if (!equipmentId) {
            throw new Error("El ID del equipo es requerido");
        }

        if (!resultId) {
            throw new Error("El ID del resultado es requerido");
        }
    }

    validateRequiredField(value, fieldName) {
        if (!value) {
            throw new Error(`${fieldName} es requerido`);
        }
    }
}

module.exports = ParameterValidationService;