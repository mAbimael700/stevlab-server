const BufferList = require("bl");
const EquipmentProfileDto = require("@/domain/equipmentprofile/dto/EquipmentProfileDto");
const BufferStreamHandler = require("./BufferStreamHandler");

class BufferStreamProcessor {
    /**
     * @param {CommunicationProfileDto} communicationProfile
     * @param {number} maxDataSize
     * @param {number} maxBufferSize
     * @param configuration
     */
    constructor(communicationProfile,
                maxDataSize = 1e6,
                maxBufferSize = 5e6,
                configuration = {}) {
        this.maxDataSize = maxDataSize; // 1MB máximo por paquete
        this.maxBufferSize = maxBufferSize; // 5MB máximo en buffer total
        this.bufferList = new BufferList();
        this.bufferHandler = new BufferStreamHandler(communicationProfile);
        this.equipmentType = communicationProfile.type || 'unknown';

        // Configuración de limpieza automática
        this.cleanupConfig = {
            maxIdleTime: configuration.maxIdleTime || 30000, // 30 segundos sin mensajes
            maxIncompleteSize: configuration.maxIncompleteSize || 1e6, // 1MB sin mensaje completo
            maxRetentionTime: configuration.maxRetentionTime || 300000, // 5 minutos máximo
            enableAggressiveCleanup: configuration.enableAggressiveCleanup || false
        };

        // Tracking para limpieza
        this.lastCompleteMessageTime = Date.now();
        this.lastBufferSize = 0;
        this.bufferStableCount = 0;

        // Estadísticas para debugging
        this.stats = {
            messagesProcessed: 0,
            bytesProcessed: 0,
            errors: 0,
            cleanups: 0,
            lastProcessTime: null,
            lastCleanupTime: null,
            lastCleanupReason: null
        };

        // Timer para limpieza periódica
        this.cleanupTimer = setInterval(() => {
            this.performScheduledCleanup();
        }, 10000); // Revisar cada 10 segundos
    }

    /**
     * Procesa datos entrantes
     * @param {Buffer} data
     * @returns {Array<string> | null}
     */
    process(data) {
        const startTime = Date.now();

        try {
            this.validateDataSize(data);
            this.validateTotalBufferSize(data);

            this.bufferList.append(data);
            this.stats.bytesProcessed += data.length;

            // Verificar si necesitamos limpieza antes de procesar
            this.checkForCleanup();

            const extractedResults = this.extractAllMessages();

            if (extractedResults.length > 0) {
                this.stats.messagesProcessed += extractedResults.length;
                this.stats.lastProcessTime = Date.now() - startTime;
                this.lastCompleteMessageTime = Date.now();

                console.log(`[${this.equipmentType}] Procesados ${extractedResults.length} mensajes en ${this.stats.lastProcessTime}ms`);
                return extractedResults;
            } else {
                // No se encontraron mensajes completos, actualizar tracking
                this.updateIncompleteBufferTracking();
            }

            return null;

        } catch (error) {
            this.stats.errors++;
            this.handleProcessingError(error);
            throw error;
        }
    }

    /**
     * Extrae todos los mensajes completos del buffer
     * @returns {Array<string>}
     */
    extractAllMessages() {
        const extractedResults = [];
        let maxIterations = 100; // Prevenir loops infinitos

        while (this.bufferList.length > 0 && maxIterations > 0) {
            // Obtener una copia del buffer actual
            const currentBuffer = this.bufferList.slice();

            // Buscar mensajes usando el handler mejorado
            const messageResults = this.bufferHandler.extractCompleteMessages(currentBuffer);

            if (messageResults.length === 0) {
                // No hay más mensajes completos
                break;
            }

            // Procesar cada mensaje encontrado
            let totalConsumed = 0;
            for (const result of messageResults) {
                extractedResults.push(result.completeMessage);
                totalConsumed += result.consumedBytes;

                // Log para debugging
                if (result.matchInfo) {
                    console.log(`[${this.equipmentType}] Mensaje encontrado con patrón: ${result.matchInfo.matchedText}`);
                }
            }

            // Limpiar buffer
            if (totalConsumed > 0) {
                BufferStreamHandler.clearProcessedBuffer(this.bufferList, totalConsumed);
            } else {
                break; // Evitar loop infinito
            }

            maxIterations--;
        }

        if (maxIterations === 0) {
            console.warn(`[${this.equipmentType}] Alcanzado límite de iteraciones, posible loop infinito`);
        }

        return extractedResults;
    }

    /**
     * Maneja errores de procesamiento
     * @param {Error} error
     */
    handleProcessingError(error) {
        console.error(`[${this.equipmentType}] Error en procesamiento:`, error.message);

        // Log del buffer para debugging
        const bufferPreview = this.getBufferPreview(100);
        console.warn(`[${this.equipmentType}] Buffer preview:`, bufferPreview);

        // Limpiar buffer si es un error crítico
        if (this.isCriticalError(error)) {
            console.warn(`[${this.equipmentType}] Error crítico, limpiando buffer completo`);
            this.clearAllBuffer();
        }
    }

    /**
     * Determina si un error es crítico
     * @param {Error} error
     * @returns {boolean}
     */
    isCriticalError(error) {
        const criticalPatterns = [
            /ConsumedBytes no válido/,
            /Packet size exceeded/,
            /Maximum buffer size exceeded/
        ];

        return criticalPatterns.some(pattern => pattern.test(error.message));
    }

    /**
     * Válida el tamaño de los datos recibidos
     * @param {Buffer} data
     */
    validateDataSize(data) {
        if (data.length > this.maxDataSize) {
            throw new Error(
                `Packet size exceeded limit: ${data.length} bytes (max: ${this.maxDataSize})`
            );
        }
    }

    /**
     * Valida que el buffer total no exceda el límite
     * @param {Buffer} newData
     */
    validateTotalBufferSize(newData) {
        const projectedSize = this.bufferList.length + newData.length;
        if (projectedSize > this.maxBufferSize) {
            throw new Error(
                `Maximum buffer size exceeded: ${projectedSize} bytes (max: ${this.maxBufferSize})`
            );
        }
    }

    /**
     * Obtiene preview del buffer para debugging
     * @param {number} maxLength
     * @returns {string}
     */
    getBufferPreview(maxLength = 50) {
        const bufferString = this.bufferList.toString("utf-8");
        const preview = bufferString.length > maxLength
            ? bufferString.slice(0, maxLength) + "..."
            : bufferString;

        return JSON.stringify(preview); // Para escapar caracteres especiales
    }

    /**
     * Obtiene los datos actuales del buffer
     * @returns {string}
     */
    getBufferedData() {
        return this.bufferList.toString("utf-8");
    }

    /**
     * Limpia todo el buffer
     */
    clearAllBuffer() {
        if (this.bufferList.length > 0) {
            BufferStreamHandler.clearProcessedBuffer(this.bufferList, this.bufferList.length);
        }
    }

    /**
     * Obtiene estadísticas del procesador
     * @returns {Object}
     */
    getStats() {
        return {
            ...this.stats,
            currentBufferSize: this.bufferList.length,
            equipmentType: this.equipmentType
        };
    }

    /**
     * Resetea estadísticas
     */
    resetStats() {
        this.stats = {
            messagesProcessed: 0,
            bytesProcessed: 0,
            errors: 0,
            cleanups: 0,
            lastProcessTime: null,
            lastCleanupTime: null,
            lastCleanupReason: null
        };
    }

    /**
     * Actualiza el tracking de buffer incompleto
     */
    updateIncompleteBufferTracking() {
        if (this.bufferList.length === this.lastBufferSize) {
            this.bufferStableCount++;
        } else {
            this.bufferStableCount = 0;
            this.lastBufferSize = this.bufferList.length;
        }
    }

    /**
     * Verifica si se necesita limpieza del buffer
     */
    checkForCleanup() {
        const now = Date.now();
        const timeSinceLastMessage = now - this.lastCompleteMessageTime;
        const bufferSize = this.bufferList.length;

        // Condiciones para limpieza
        const conditions = {
            timeoutExceeded: timeSinceLastMessage > this.cleanupConfig.maxIdleTime,
            sizeExceeded: bufferSize > this.cleanupConfig.maxIncompleteSize,
            retentionExceeded: timeSinceLastMessage > this.cleanupConfig.maxRetentionTime,
            bufferStagnant: this.bufferStableCount > 5 && bufferSize > 1000
        };

        let shouldCleanup = false;
        let reason = '';

        if (conditions.retentionExceeded) {
            shouldCleanup = true;
            reason = `retention_timeout_${Math.round(timeSinceLastMessage/1000)}s`;
        } else if (conditions.sizeExceeded) {
            shouldCleanup = true;
            reason = `size_exceeded_${Math.round(bufferSize/1024)}KB`;
        } else if (conditions.timeoutExceeded && bufferSize > 0) {
            shouldCleanup = true;
            reason = `idle_timeout_${Math.round(timeSinceLastMessage/1000)}s`;
        } else if (conditions.bufferStagnant) {
            shouldCleanup = true;
            reason = `stagnant_buffer_${this.bufferStableCount}_cycles`;
        }

        if (shouldCleanup) {
            this.performCleanup(reason);
        }
    }

    /**
     * Limpieza programada (ejecutada por timer)
     */
    performScheduledCleanup() {
        if (this.bufferList.length === 0) return;

        const now = Date.now();
        const timeSinceLastMessage = now - this.lastCompleteMessageTime;

        // Limpieza más agresiva si está habilitada
        if (this.cleanupConfig.enableAggressiveCleanup) {
            if (timeSinceLastMessage > 15000 && this.bufferList.length > 500) {
                this.performCleanup(`scheduled_aggressive_${Math.round(timeSinceLastMessage/1000)}s`);
                return;
            }
        }

        // Limpieza estándar
        if (timeSinceLastMessage > this.cleanupConfig.maxIdleTime) {
            this.performCleanup(`scheduled_standard_${Math.round(timeSinceLastMessage/1000)}s`);
        }
    }

    /**
     * Ejecuta la limpieza del buffer
     * @param {string} reason - Razón de la limpieza
     */
    performCleanup(reason) {
        const bufferSizeBefore = this.bufferList.length;

        if (bufferSizeBefore === 0) return;

        // Log antes de limpiar para debugging
        console.warn(`[${this.equipmentType}] Iniciando limpieza: ${reason}`);
        console.warn(`[${this.equipmentType}] Buffer antes de limpieza (${bufferSizeBefore} bytes):`,
            this.getBufferPreview(200));

        // Intentar limpieza inteligente primero
        const intelligentCleanupResult = this.performIntelligentCleanup();

        if (!intelligentCleanupResult.cleaned) {
            // Si la limpieza inteligente no funcionó, limpiar todo
            this.clearAllBuffer();
            console.warn(`[${this.equipmentType}] Limpieza completa ejecutada`);
        } else {
            console.log(`[${this.equipmentType}] Limpieza inteligente ejecutada: ${intelligentCleanupResult.reason}`);
        }

        // Actualizar estadísticas
        this.stats.cleanups++;
        this.stats.lastCleanupTime = Date.now();
        this.stats.lastCleanupReason = reason;
        this.lastCompleteMessageTime = Date.now(); // Reset timer
        this.bufferStableCount = 0;

        const bufferSizeAfter = this.bufferList.length;
        console.log(`[${this.equipmentType}] Limpieza completada: ${bufferSizeBefore} -> ${bufferSizeAfter} bytes`);
    }

    /**
     * Intenta limpieza inteligente antes de limpiar todo
     * @returns {{cleaned: boolean, reason: string}}
     */
    performIntelligentCleanup() {
        const bufferData = this.bufferList.slice();

        // Estrategia 1: Si el buffer es muy grande, mantener solo los últimos datos
        if (bufferData.length > this.cleanupConfig.maxIncompleteSize) {
            const keepSize = Math.floor(this.cleanupConfig.maxIncompleteSize * 0.3); // Mantener 30%
            const removeSize = bufferData.length - keepSize;
            BufferStreamHandler.clearProcessedBuffer(this.bufferList, removeSize);
            return { cleaned: true, reason: `size_reduction_kept_${keepSize}_bytes` };
        }

        // Estrategia 2: Si llevamos mucho tiempo sin mensajes, reducir gradualmente
        const now = Date.now();
        const timeSinceLastMessage = now - this.lastCompleteMessageTime;

        if (timeSinceLastMessage > this.cleanupConfig.maxIdleTime * 2 && bufferData.length > 1000) {
            // Remover la primera mitad del buffer
            const removeSize = Math.floor(bufferData.length * 0.5);
            BufferStreamHandler.clearProcessedBuffer(this.bufferList, removeSize);
            return { cleaned: true, reason: `gradual_reduction_removed_${removeSize}_bytes` };
        }

        return { cleaned: false, reason: 'no_intelligent_cleanup_possible' };
    }

    /**
     * Limpia recursos al destruir la instancia
     */
    destroy() {
        if (this.cleanupTimer) {
            clearInterval(this.cleanupTimer);
            this.cleanupTimer = null;
        }
        this.clearAllBuffer();
    }
}

module.exports = BufferStreamProcessor;