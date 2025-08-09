const BufferList = require("bl");
const BufferStreamHandler = require("./BufferStreamHandler");
const BufferValidator = require("@/infra/bufferstreammanagment/utils/BufferValidator");
const BufferStats = require("@/infra/bufferstreammanagment/utils/BufferStats");
const BufferCleanupManager = require("@/infra/bufferstreammanagment/utils/BufferCleanupManager");
const BufferMessageExtractor = require("@/infra/bufferstreammanagment/utils/BufferMessageExtractor");


class BufferStreamProcessor {
    /**
     *
     * @param {CommunicationProfileDto} communicationProfile
     * @param {number} maxDataSize
     * @param {number} maxBufferSize
     * @param configuration
     */
    constructor(communicationProfile,
                maxDataSize = 1e6,
                maxBufferSize = 5e6,
                configuration = {}) {
        this.equipmentType = communicationProfile.type || 'unknown';
        this.bufferList = new BufferList();

        // Componentes especializados
        this.validator = new BufferValidator(maxDataSize, maxBufferSize);
        this.stats = new BufferStats();
        this.cleanupManager = new BufferCleanupManager(configuration, this.equipmentType);
        this.errorHandler = new BufferErrorHandler(this.equipmentType);
        this.messageExtractor = new BufferMessageExtractor(
            new BufferStreamHandler(communicationProfile),
            this.equipmentType
        );

        // Iniciar limpieza periódica
        this.cleanupManager.startPeriodicCleanup((reason) => {
            if (this.bufferList.length > 0) {
                this.performCleanup(reason);
            }
        });
    }

    process(data) {
        const startTime = Date.now();

        try {
            // Validaciones
            this.validator.validateDataSize(data);
            this.validator.validateTotalBufferSize(this.bufferList.length, data.length);

            // Agregar datos al buffer
            this.bufferList.append(data);
            this.stats.incrementBytes(data.length);

            // Verificar si necesitamos limpieza
            this.checkForCleanup();

            // Extraer mensajes
            const extractedResults = this.messageExtractor
                .extractAllMessages(this.bufferList, BufferStreamHandler);

            if (extractedResults.length > 0) {
                this.stats.incrementMessages(extractedResults.length);
                this.stats.setLastProcessTime(Date.now() - startTime);
                this.cleanupManager.updateLastMessageTime();

                console.log(`[${this.equipmentType}] Procesados ${extractedResults.length} mensajes en ${this.stats.data.lastProcessTime}ms`);
                return extractedResults;
            } else {
                this.cleanupManager.updateIncompleteBufferTracking(this.bufferList.length);
            }

            return null;

        } catch (error) {
            this.stats.incrementErrors();
            this.errorHandler.handleProcessingError(
                error,
                (length) => this.getBufferPreview(length),
                (err) => this.validator.isCriticalError(err),
                () => this.clearAllBuffer()
            );
            throw error;
        }
    }

    checkForCleanup() {
        const cleanupDecision = this.cleanupManager.shouldCleanup(this.bufferList.length);
        if (cleanupDecision.shouldCleanup) {
            this.performCleanup(cleanupDecision.reason);
        }
    }

    performCleanup(reason) {
        const bufferSizeBefore = this.bufferList.length;
        if (bufferSizeBefore === 0) return;

        console.warn(`[${this.equipmentType}] Iniciando limpieza: ${reason}`);
        console.warn(`[${this.equipmentType}] Buffer antes de limpieza (${bufferSizeBefore} bytes):`,
            this.getBufferPreview(200));

        const intelligentCleanupResult = this.cleanupManager.performIntelligentCleanup(
            this.bufferList.slice(),
            this.bufferList,
            BufferStreamHandler
        );

        if (!intelligentCleanupResult.cleaned) {
            this.clearAllBuffer();
            console.warn(`[${this.equipmentType}] Limpieza completa ejecutada`);
        } else {
            console.log(`[${this.equipmentType}] Limpieza inteligente ejecutada: ${intelligentCleanupResult.reason}`);
        }

        this.stats.incrementCleanups();
        this.stats.setLastCleanupTime(Date.now());
        this.stats.setLastCleanupReason(reason);
        this.cleanupManager.updateLastMessageTime();

        const bufferSizeAfter = this.bufferList.length;
        console.log(`[${this.equipmentType}] Limpieza completada: ${bufferSizeBefore} -> ${bufferSizeAfter} bytes`);
    }

    // Métodos de utilidad simplificados
    getBufferPreview(maxLength = 50) {
        const bufferString = this.bufferList.toString("utf-8");
        const preview = bufferString.length > maxLength
            ? bufferString.slice(0, maxLength) + "..."
            : bufferString;
        return JSON.stringify(preview);
    }

    getBufferedData() {
        return this.bufferList.toString("utf-8");
    }

    clearAllBuffer() {
        if (this.bufferList.length > 0) {
            BufferStreamHandler.clearProcessedBuffer(this.bufferList, this.bufferList.length);
        }
    }

    getStats() {
        return this.stats.getStats({
            currentBufferSize: this.bufferList.length,
            equipmentType: this.equipmentType
        });
    }

    resetStats() {
        this.stats.reset();
    }

    destroy() {
        this.cleanupManager.stopPeriodicCleanup();
        this.clearAllBuffer();
    }
}

module.exports = BufferStreamProcessor;