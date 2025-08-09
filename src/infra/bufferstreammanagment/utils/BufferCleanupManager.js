class BufferCleanupManager {
    constructor(configuration = {}, equipmentType = 'unknown') {
        this.equipmentType = equipmentType;
        this.config = {
            maxIdleTime: configuration.maxIdleTime || 30000,
            maxIncompleteSize: configuration.maxIncompleteSize || 1e6,
            maxRetentionTime: configuration.maxRetentionTime || 300000,
            enableAggressiveCleanup: configuration.enableAggressiveCleanup || false
        };

        this.lastCompleteMessageTime = Date.now();
        this.lastBufferSize = 0;
        this.bufferStableCount = 0;
        this.cleanupTimer = null;
    }

    startPeriodicCleanup(cleanupCallback) {
        this.cleanupTimer = setInterval(() => {
            this.performScheduledCleanup(cleanupCallback);
        }, 10000);
    }

    stopPeriodicCleanup() {
        if (this.cleanupTimer) {
            clearInterval(this.cleanupTimer);
            this.cleanupTimer = null;
        }
    }

    updateLastMessageTime() {
        this.lastCompleteMessageTime = Date.now();
        this.bufferStableCount = 0;
    }

    updateIncompleteBufferTracking(currentBufferSize) {
        if (currentBufferSize === this.lastBufferSize) {
            this.bufferStableCount++;
        } else {
            this.bufferStableCount = 0;
            this.lastBufferSize = currentBufferSize;
        }
    }

    shouldCleanup(bufferSize) {
        const now = Date.now();
        const timeSinceLastMessage = now - this.lastCompleteMessageTime;

        const conditions = {
            timeoutExceeded: timeSinceLastMessage > this.config.maxIdleTime,
            sizeExceeded: bufferSize > this.config.maxIncompleteSize,
            retentionExceeded: timeSinceLastMessage > this.config.maxRetentionTime,
            bufferStagnant: this.bufferStableCount > 5 && bufferSize > 1000
        };

        if (conditions.retentionExceeded) {
            return {shouldCleanup: true, reason: `retention_timeout_${Math.round(timeSinceLastMessage / 1000)}s`};
        } else if (conditions.sizeExceeded) {
            return {shouldCleanup: true, reason: `size_exceeded_${Math.round(bufferSize / 1024)}KB`};
        } else if (conditions.timeoutExceeded && bufferSize > 0) {
            return {shouldCleanup: true, reason: `idle_timeout_${Math.round(timeSinceLastMessage / 1000)}s`};
        } else if (conditions.bufferStagnant) {
            return {shouldCleanup: true, reason: `stagnant_buffer_${this.bufferStableCount}_cycles`};
        }

        return {shouldCleanup: false, reason: null};
    }

    performScheduledCleanup(cleanupCallback) {
        if (!cleanupCallback) return;

        const now = Date.now();
        const timeSinceLastMessage = now - this.lastCompleteMessageTime;

        if (this.config.enableAggressiveCleanup) {
            if (timeSinceLastMessage > 15000) {
                cleanupCallback(`scheduled_aggressive_${Math.round(timeSinceLastMessage / 1000)}s`);
                return;
            }
        }

        if (timeSinceLastMessage > this.config.maxIdleTime) {
            cleanupCallback(`scheduled_standard_${Math.round(timeSinceLastMessage / 1000)}s`);
        }
    }

    performIntelligentCleanup(bufferData, bufferList, BufferStreamHandler) {
        // Estrategia 1: Si el buffer es muy grande, mantener solo los últimos datos
        if (bufferData.length > this.config.maxIncompleteSize) {
            const keepSize = Math.floor(this.config.maxIncompleteSize * 0.3);
            const removeSize = bufferData.length - keepSize;
            BufferStreamHandler.clearProcessedBuffer(bufferList, removeSize);
            return {cleaned: true, reason: `size_reduction_kept_${keepSize}_bytes`};
        }

        // Estrategia 2: Si llevamos mucho tiempo sin mensajes, reducir gradualmente
        const now = Date.now();
        const timeSinceLastMessage = now - this.lastCompleteMessageTime;

        if (timeSinceLastMessage > this.config.maxIdleTime * 2 && bufferData.length > 1000) {
            const removeSize = Math.floor(bufferData.length * 0.5);
            BufferStreamHandler.clearProcessedBuffer(bufferList, removeSize);
            return {cleaned: true, reason: `gradual_reduction_removed_${removeSize}_bytes`};
        }

        return {cleaned: false, reason: 'no_intelligent_cleanup_possible'};
    }
}

module.exports = BufferCleanupManager;