class BufferErrorHandler {
    constructor(equipmentType = 'unknown') {
        this.equipmentType = equipmentType;
    }

    handleProcessingError(error, getBufferPreview, isCriticalError, clearAllBuffer) {
        console.error(`[${this.equipmentType}] Error en procesamiento:`, error.message);

        const bufferPreview = getBufferPreview(100);
        console.warn(`[${this.equipmentType}] Buffer preview:`, bufferPreview);

        if (isCriticalError(error)) {
            console.warn(`[${this.equipmentType}] Error crítico, limpiando buffer completo`);
            clearAllBuffer();
        }
    }
}