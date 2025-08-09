class IResultAckService {
    /**
     *
     * @param {string} message
     * @param {Object} config
     * @returns {string}
     */
    generateAck(message, config) {
        throw new Error("generateAck method not implemented")
    }
}

module.exports = IResultAckService