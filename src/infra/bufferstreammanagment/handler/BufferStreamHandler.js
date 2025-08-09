const {BufferList} = require("bl/BufferList");

class BufferStreamHandler {
    /**
     *
     * @param {CommunicationProfileDto} configuration
     */
    constructor(configuration) {
        if (!configuration.checksumRegex) {
            throw new Error("El RegExp checksum no están definidos para el equipo");
        }

        // Almacenar el patrón original sin el flag global
        this.checksumPattern = configuration.checksumRegex;
        this.bufferEncoding = configuration.encoding || 'utf-8';

        // Información del tipo de equipo para debugging
        this.equipmentType = configuration.type || 'unknown';
    }


    /**
     * @param {BufferList} bufferList
     * @param {number} consumedBytes
     */
    static clearProcessedBuffer(bufferList, consumedBytes) {
        try {
            if (!(consumedBytes > 0 && consumedBytes <= bufferList.length)) {
                throw new Error(`ConsumedBytes no válido: ${consumedBytes}, buffer length: ${bufferList.length}`);
            }
            bufferList.consume(consumedBytes);
        } catch (error) {
            console.error('Error al limpiar buffer:', error);
            throw new Error(`Error al limpiar el buffer: ${error.message}`);
        }
    }

    /**
     * Validar que el patrón regex funcione correctamente
     * @param {string} testData
     * @returns {boolean}
     */
    validatePattern(testData) {
        try {
            const regex = new RegExp(this.checksumPattern);
            return regex.test(testData);
        } catch (error) {
            console.error(`[${this.equipmentType}] Error validando patrón:`, error);
            return false;
        }
    }


    /**
     * Busca mensajes completos en los datos
     * @param {Buffer} bufferData - Buffer crudo para análisis preciso
     * @returns {Array<{completeMessage: string, consumedBytes: number}>}
     */
    extractCompleteMessages(bufferData) {
        const results = [];
        let currentBuffer = bufferData;

        while (currentBuffer.length > 0) {
            const result = this.findNextMessage(currentBuffer);
            if (!result) break;

            results.push(result);
            currentBuffer = currentBuffer.slice(result.consumedBytes);
        }

        return results;
    }

    /**
     * Encuentra el próximo mensaje completo
     * @param {Buffer} bufferData
     * @returns {{completeMessage: string, consumedBytes: number} | null}
     */
    findNextMessage(bufferData) {
        try {
            // Convertir a string para análisis regex
            const dataString = bufferData.toString(this.bufferEncoding);

            // Crear nuevo regex sin estado global para cada búsqueda
            const regex = new RegExp(this.checksumPattern);
            const match = regex.exec(dataString);

            if (!match) return null;

            const matchEndIndex = match.index + match[0].length;
            const messageString = dataString.slice(0, matchEndIndex);

            // Calcular bytes consumidos basado en el buffer original
            const consumedBytes = Buffer.byteLength(messageString, this.bufferEncoding);

            // Validar que no excedamos el buffer
            if (consumedBytes > bufferData.length) {
                console.warn(`[${this.equipmentType}] Advertencia: bytes calculados (${consumedBytes}) exceden buffer (${bufferData.length})`);
                return null;
            }

            return {
                completeMessage: messageString.trim(),
                consumedBytes,
                matchInfo: {
                    pattern: this.checksumPattern,
                    matchStart: match.index,
                    matchEnd: matchEndIndex,
                    matchedText: match[0]
                }
            };

        } catch (error) {
            console.error(`[${this.equipmentType}] Error en findNextMessage:`, error);
            return null;
        }
    }
}

module.exports = BufferStreamHandler;
