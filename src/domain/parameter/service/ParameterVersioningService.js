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
        const mostRecent = this.findMostRecentParameter(existingParameters);
        const incomingVersion = new ParameterVersion(incomingParameter.created_at, incomingParameter.value);
        const mostRecentVersion = new ParameterVersion(mostRecent.created_at, mostRecent.value);

        if (incomingVersion.isSameTimestamp(mostRecentVersion)) {
            if (incomingVersion.hasSameValue(mostRecentVersion)) {
                return { action: 'IGNORE', existingParameter: mostRecent };
            }
            return { action: 'CREATE_INACTIVE', shouldBeActive: false };
        }

        const isNewerThanExisting = incomingVersion.isNewerThan(mostRecentVersion);
        return {
            action: 'CREATE_NEW',
            shouldBeActive: isNewerThanExisting,
            deactivateExisting: isNewerThanExisting
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
}

module.exports = ParameterVersioningService