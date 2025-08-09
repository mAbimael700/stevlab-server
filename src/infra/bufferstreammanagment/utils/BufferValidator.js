class BufferValidator {
    constructor(maxDataSize = 1e6, maxBufferSize = 5e6) {
        this.maxDataSize = maxDataSize;
        this.maxBufferSize = maxBufferSize;
    }

    validateDataSize(data) {
        if (data.length > this.maxDataSize) {
            throw new Error(
                `Packet size exceeded limit: ${data.length} bytes (max: ${this.maxDataSize})`
            );
        }
    }

    validateTotalBufferSize(currentBufferSize, newDataSize) {
        const projectedSize = currentBufferSize + newDataSize;
        if (projectedSize > this.maxBufferSize) {
            throw new Error(
                `Maximum buffer size exceeded: ${projectedSize} bytes (max: ${this.maxBufferSize})`
            );
        }
    }

    isCriticalError(error) {
        const criticalPatterns = [
            /ConsumedBytes no válido/,
            /Packet size exceeded/,
            /Maximum buffer size exceeded/
        ];
        return criticalPatterns.some(pattern => pattern.test(error.message));
    }
}

module.exports = BufferValidator;