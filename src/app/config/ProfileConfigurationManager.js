const DeploymentProfiles = require("@/app/config/DeploymentProfiles");
const ProfileConfiguration = require("@/app/config/ProfileConfiguration");

class ProfileConfigurationManager {
    constructor() {
        this.configurations = new Map();
        this._initializeConfigurations();
    }

    _initializeConfigurations() {
        this.configurations.set(DeploymentProfiles.STANDALONE, new ProfileConfiguration({
            database: true,
            httpServer: true,
            tcpServer: true,
            websocketServer: true,
            equipmentManager: true,
            repositories: 'local',
            services: 'local'
        }));

        this.configurations.set(DeploymentProfiles.CENTRAL_SERVER, new ProfileConfiguration({
            database: true,
            httpServer: true,
            tcpServer: false,
            websocketServer: false,
            equipmentManager: false,
            repositories: 'local',
            services: 'local'
        }));

        this.configurations.set(DeploymentProfiles.EQUIPMENT_NODE, new ProfileConfiguration({
            database: false,
            httpServer: false,
            tcpServer: true,
            websocketServer: true,
            equipmentManager: true,
            repositories: 'remote',
            services: 'remote',
            centralServerUrl: process.env.CENTRAL_SERVER_URL || 'http://localhost:4000'
        }));

        this.configurations.set(DeploymentProfiles.HYBRID, new ProfileConfiguration({
            database: false,
            httpServer: false,
            tcpServer: false,
            websocketServer: false,
            equipmentManager: false,
            repositories: 'local',
            services: 'local'
        }));
    }

    getConfiguration(profile) {
        if (!this.configurations.has(profile)) {
            throw new Error(`Profile '${profile}' not found. Available profiles: ${Array.from(this.configurations.keys()).join(', ')}`);
        }
        return this.configurations.get(profile);
    }

    addCustomConfiguration(name, config) {
        this.configurations.set(name, new ProfileConfiguration(config));
    }

    getAllProfiles() {
        return Array.from(this.configurations.keys());
    }

    hasProfile(profile) {
        return this.configurations.has(profile);
    }
}

module.exports = ProfileConfigurationManager;