class ParameterVersion {
    constructor(createdAt, value) {
        // Asegurar que createdAt sea un objeto Date
        this.createdAt = this.normalizeDate(createdAt);
        this.value = value;
    }

    normalizeDate(date) {
        if (!date) return null;
        if (date instanceof Date) return date;
        // Si es string, convertir a Date
        if (typeof date === 'string') return new Date(date);
        return new Date(date);
    }

    isNewerThan(other) {
        if (!this.createdAt && !other.createdAt) return false;
        if (!other.createdAt) return true;
        if (!this.createdAt) return false;
        return this.createdAt.getTime() > other.createdAt.getTime();
    }

    isSameTimestamp(other) {
        if (!this.createdAt || !other.createdAt) return false;

        // Comparar con tolerancia de 1 segundo para evitar problemas de precisión
        const diff = Math.abs(this.createdAt.getTime() - other.createdAt.getTime());
        return diff < 1000; // Menos de 1 segundo de diferencia
    }

    hasSameValue(other) {
        // Normalizar valores para comparación
        const thisValue = this.normalizeValue(this.value);
        const otherValue = this.normalizeValue(other.value);
        return thisValue === otherValue;
    }

    normalizeValue(value) {
        if (value === null || value === undefined) return null;
        if (typeof value === 'string') return value.trim();
        return value;
    }

    // Método para debug
    toString() {
        return `ParameterVersion{createdAt: ${this.createdAt?.toISOString()}, value: ${this.value}}`;
    }
}

module.exports = ParameterVersion;