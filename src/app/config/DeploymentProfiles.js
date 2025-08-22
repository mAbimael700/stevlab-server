class DeploymentProfiles {
    static STANDALONE = 'standalone';
    static CENTRAL_SERVER = 'central-server';
    static EQUIPMENT_NODE = 'equipment-node';
    static HYBRID = 'hybrid';

    static getAll() {
        return [
            this.STANDALONE,
            this.CENTRAL_SERVER,
            this.EQUIPMENT_NODE,
            this.HYBRID
        ];
    }

    static isValid(profile) {
        return this.getAll().includes(profile);
    }
}

module.exports = DeploymentProfiles;