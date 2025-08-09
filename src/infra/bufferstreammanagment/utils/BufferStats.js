class BufferStats {
    constructor() {
        this.reset();
    }

    reset() {
        this.data = {
            messagesProcessed: 0,
            bytesProcessed: 0,
            errors: 0,
            cleanups: 0,
            lastProcessTime: null,
            lastCleanupTime: null,
            lastCleanupReason: null
        };
    }

    incrementMessages(count = 1) {
        this.data.messagesProcessed += count;
    }

    incrementBytes(bytes) {
        this.data.bytesProcessed += bytes;
    }

    incrementErrors() {
        this.data.errors++;
    }

    incrementCleanups() {
        this.data.cleanups++;
    }

    setLastProcessTime(time) {
        this.data.lastProcessTime = time;
    }

    setLastCleanupTime(time) {
        this.data.lastCleanupTime = time;
    }

    setLastCleanupReason(reason) {
        this.data.lastCleanupReason = reason;
    }

    getStats(additionalData = {}) {
        return {
            ...this.data,
            ...additionalData
        };
    }
}

module.exports = BufferStats;