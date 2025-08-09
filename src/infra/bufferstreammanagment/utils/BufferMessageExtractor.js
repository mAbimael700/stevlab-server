class BufferMessageExtractor {
    constructor(bufferHandler, equipmentType = 'unknown') {
        this.bufferHandler = bufferHandler;
        this.equipmentType = equipmentType;
    }

    extractAllMessages(bufferList, BufferStreamHandler) {
        const extractedResults = [];
        let maxIterations = 100;

        while (bufferList.length > 0 && maxIterations > 0) {
            const currentBuffer = bufferList.slice();
            const messageResults = this.bufferHandler.extractCompleteMessages(currentBuffer);

            if (messageResults.length === 0) {
                break;
            }

            let totalConsumed = 0;
            for (const result of messageResults) {
                extractedResults.push(result.completeMessage);
                totalConsumed += result.consumedBytes;

                if (result.matchInfo) {
                    console.log(`[${this.equipmentType}] Mensaje encontrado con patrón: ${result.matchInfo.matchedText}`);
                }
            }

            if (totalConsumed > 0) {
                BufferStreamHandler.clearProcessedBuffer(bufferList, totalConsumed);
            } else {
                break;
            }

            maxIterations--;
        }

        if (maxIterations === 0) {
            console.warn(`[${this.equipmentType}] Alcanzado límite de iteraciones, posible loop infinito`);
        }

        return extractedResults;
    }
}

module.exports = BufferMessageExtractor;