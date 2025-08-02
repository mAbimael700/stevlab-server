const ParameterVersion = require("@/domain/parameter/util/ParameterVersion");

class ParameterVersioningService {
    constructor(parameterRepository) {
        this.parameterRepository = parameterRepository;
    }

    /**
     * Determina la acción a tomar basada en los parámetros existentes
     */
    determineVersioningAction(incomingParameter, existingParameters) {
        if (!existingParameters || existingParameters.length === 0) {
            return { action: 'CREATE_NEW', shouldBeActive: true };
        }

        if (incomingParameter.created_at) {
            return this.handleParameterWithDate(incomingParameter, existingParameters);
        }

        return this.handleParameterWithoutDate(incomingParameter, existingParameters);
    }

    handleParameterWithDate(incomingParameter, existingParameters) {
        const incomingVersion = new ParameterVersion(incomingParameter.created_at, incomingParameter.value);

        // SOLUCIÓN: Buscar parámetro con misma fecha Y mismo valor
        const exactMatch = this.findParameterWithSameDateAndValue(incomingVersion, existingParameters);

        if (exactMatch) {
            console.log('🚫 IGNORAR - Encontrado parámetro exacto (misma fecha y valor)');
            return {
                action: 'IGNORE',
                existingParameter: exactMatch,
                reason: 'EXACT_MATCH_FOUND'
            };
        }

        // Buscar parámetros con la misma fecha (pero diferente valor)
        const parametersWithSameDate = this.findParametersWithSameDate(incomingVersion, existingParameters);

        if (parametersWithSameDate.length > 0) {
            console.log('⚠️ CREAR INACTIVO - Misma fecha, diferente valor');
            return {
                action: 'CREATE_INACTIVE',
                shouldBeActive: false,
                reason: 'SAME_TIMESTAMP_DIFFERENT_VALUE'
            };
        }

        // No hay parámetros con la misma fecha, comparar con el más reciente
        const mostRecent = this.findMostRecentParameter(existingParameters);
        const mostRecentVersion = new ParameterVersion(mostRecent.created_at, mostRecent.value);

        const isNewerThanExisting = incomingVersion.isNewerThan(mostRecentVersion);

        return {
            action: 'CREATE_NEW',
            shouldBeActive: isNewerThanExisting,
            deactivateExisting: isNewerThanExisting,
            reason: isNewerThanExisting ? 'NEWER_TIMESTAMP' : 'OLDER_TIMESTAMP'
        };
    }

    handleParameterWithoutDate(incomingParameter, existingParameters) {
        const existingWithSameValue = existingParameters.find(
            param => param.value === incomingParameter.value
        );

        if (existingWithSameValue) {
            return { action: 'IGNORE', existingParameter: existingWithSameValue };
        }

        return {
            action: 'CREATE_NEW',
            shouldBeActive: true,
            deactivateExisting: true
        };
    }

    findMostRecentParameter(parameters) {
        return parameters.reduce((latest, current) => {
            const latestVersion = new ParameterVersion(latest.created_at, latest.value);
            const currentVersion = new ParameterVersion(current.created_at, current.value);
            return currentVersion.isNewerThan(latestVersion) ? current : latest;
        });
    }

    async deactivateParameters(parameters) {
        const updatePromises = parameters.map(param =>
            this.parameterRepository.update(param.id, { active: false })
        );
        await Promise.all(updatePromises);
    }

    /**
     * Busca un parámetro que tenga exactamente la misma fecha Y el mismo valor
     */
    findParameterWithSameDateAndValue(incomingVersion, existingParameters) {
        return existingParameters.find(param => {
            const paramVersion = new ParameterVersion(param.created_at, param.value);
            return incomingVersion.isSameTimestamp(paramVersion) &&
                incomingVersion.hasSameValue(paramVersion);
        });
    }

    /**
     * Busca todos los parámetros que tengan la misma fecha (independientemente del valor)
     */
    findParametersWithSameDate(incomingVersion, existingParameters) {
        return existingParameters.filter(param => {
            const paramVersion = new ParameterVersion(param.created_at, param.value);
            return incomingVersion.isSameTimestamp(paramVersion);
        });
    }
}

module.exports = ParameterVersioningService