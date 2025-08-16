class ServiceRegistry {
    constructor() {
        this.services = new Map();
        this.initialized = false;
    }

    register(name, serviceFactory) {
        if (typeof name !== 'string' || !name.trim()) {
            throw new Error('Service name must be a non-empty string');
        }
        this.services.set(name, serviceFactory);
    }

    get(name) {
        const serviceFactory = this.services.get(name);
        if (!serviceFactory) {
            const availableServices = Array.from(this.services.keys()).join(', ');
            throw new Error(`Service '${name}' not found in registry. Available services: ${availableServices}`);
        }
        return serviceFactory;
    }

    has(name) {
        return this.services.has(name);
    }

    getAll() {
        return Array.from(this.services.keys());
    }

    clear() {
        this.services.clear();
        this.initialized = false;
    }

    markInitialized() {
        this.initialized = true;
    }

    isInitialized() {
        return this.initialized;
    }

    size() {
        return this.services.size;
    }
}

module.exports = ServiceRegistry;