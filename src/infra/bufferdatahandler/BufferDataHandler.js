const {
  BufferStreamProcessor,
} = require("@/infra/bufferstreammanagment/BufferStreamProcessor");
const EquipmentDto = require("../../domain/equipment/EquipmentDto");

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
   */
  processBufferData(data) {
    try {
      const filteredData = data.toString().replace(/\x02/g, "");

      if (filteredData.trim()) {
        const bufferMessages = this.bufferStreamProcessor.process(data);
        if (bufferMessages) {

          bufferMessages.forEach((bm) =>
            this.bufferEmitter.emitReceivedMessage({
              equipment: this.equipment,
              message: bm,
            })
          ); // Emitimos solo los mensajes procesados
        }
      }
    } catch (error) {
      /* this.emit("error", {
        equipment: this.equipment,
        error: new Error(`Error procesando datos: ${error.message}`),
      }); */

      throw new Error(`Error procesando datos: ${error.message}`, error);
    }
  }
}

module.exports = {
  BufferDataHandler,
};
