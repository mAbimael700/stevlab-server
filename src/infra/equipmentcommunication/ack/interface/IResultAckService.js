class IResultAckService {
    /**
     *
     * @param {string|Buffer} message
     * @param {Object} config
     * @returns {string|Buffer}
     */
    generateAck(message, config) {
        throw new Error("generateAck method not implemented")
    }
}

module.exports = IResultAckService