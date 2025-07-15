class EquipmentConnectionRepository {
    constructor() {
        /**
         * @type {Map<string, EquipmentConnection>}
         */
        this.connections = new Map();
    }

    /**
     * Almacena una conexión de equipo
     * @param {string} id
     * @param {EquipmentConnection} connection
     */
    store(id, connection) {
        this.connections.set(id, connection);
    }

    /**
     * Obtiene una conexión por ID
     * @param {string} id
     * @returns {EquipmentConnection | undefined}
     */
    get(id) {
        return this.connections.get(id);
    }

    /**
     * Elimina una conexión
     * @param {string} id
     * @returns {boolean}
     */
    remove(id) {
        return this.connections.delete(id);
    }

    /**
     * Obtiene todas las conexiones
     * @returns {EquipmentConnection[]}
     */
    getAll() {
        return Array.from(this.connections.values());
    }

    /**
     * Obtiene todos los IDs
     * @returns {string[]}
     */
    getAllIds() {
        return Array.from(this.connections.keys());
    }

    /**
     * Verifica si existe una conexión
     * @param {string} id
     * @returns {boolean}
     */
    has(id) {
        return this.connections.has(id);
    }

    /**
     * Limpia todas las conexiones
     */
    clear() {
        this.connections.clear();
    }

    /**
     * Obtiene el número de conexiones
     * @returns {number}
     */
    size() {
        return this.connections.size;
    }
}

module.exports = EquipmentConnectionRepository;