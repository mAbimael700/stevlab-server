const
    BufferStreamProcessor
        = require("@/infra/bufferstreammanagment/processor/BufferStreamProcessor");

class BufferDataHandler {
    /**
     *
     * @param {EquipmentDto} equipment
     * @param {*} bufferDataEmitter
     */
    constructor(equipment, bufferDataEmitter) {
        this.equipment = equipment;
        this.bufferStreamProcessor = new BufferStreamProcessor(
            equipment.equipmentProfile.communicationProfile
        );
        this.bufferEmitter = bufferDataEmitter;
    }

    /**
     *
     * @param {Buffer} data
     * @return {string[] | null }
     */
    processBufferData(data) {
        try {
            const filteredData = data.toString()
                .replace(/\x02/g, "");

            if (filteredData.trim()) {

                const bufferMessages = this.bufferStreamProcessor.process(data);

                if (bufferMessages) {

                    bufferMessages.forEach((bm) =>
                        this.bufferEmitter.emitReceivedMessage({
                            equipment: this.equipment,
                            message: bm,
                        })
                    );

                    return bufferMessages;
                }
            }

            // No hay resultados procesados
            return null;
        } catch (error) {
            throw new Error(`Error procesando datos: ${error.message}`, error);
        }
    }
}

module.exports = {
    BufferDataHandler,
};
