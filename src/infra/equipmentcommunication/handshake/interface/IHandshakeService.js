class IHandshakeService {
    /**
     * Genera el mensaje de handshake inicial
     * @param {Object} config - Configuración del equipo
     * @returns {string|Buffer} - Mensaje de handshake
     */
    generateHandshakeRequest(config) {
        throw new Error("generateHandshakeRequest method not implemented");
    }

    /**
     * Procesa la respuesta del handshake
     * @param {string|Buffer} response - Respuesta del equipo
     * @param {Object} config - Configuración del equipo
     * @returns {boolean} - True si el handshake fue exitoso
     */
    processHandshakeResponse(response, config) {
        throw new Error("processHandshakeResponse method not implemented");
    }

    /**
     * Genera la confirmación final del handshake si es necesaria
     * @param {Object} config - Configuración del equipo
     * @returns {string|Buffer|null} - Mensaje de confirmación o null si no se requiere
     */
    generateHandshakeConfirmation(config) {
        return null; // Por defecto no se requiere confirmación
    }
}

module.exports = IHandshakeService;