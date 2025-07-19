class ParameterVersion {
    constructor(createdAt, value) {
        this.createdAt = createdAt;
        this.value = value;
    }

    isNewerThan(other) {
        if (!this.createdAt && !other.createdAt) return false;
        if (!other.createdAt) return true;
        if (!this.createdAt) return false;
        return this.createdAt > other.createdAt;
    }

    isSameTimestamp(other) {
        if (!this.createdAt || !other.createdAt) return false;
        return this.createdAt.getTime() === other.createdAt.getTime();
    }

    hasSameValue(other) {
        return this.value === other.value;
    }
}

module.exports = ParameterVersion;