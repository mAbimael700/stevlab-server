// TcpDataEmitter.js
const { EventEmitter } = require("node:events");
const { BufferStreamProcessor } = require("./BufferStreamProcessor");

class BufferDataEmitter extends EventEmitter {
  constructor(equipment) {
    super();
    this.equipment = equipment;
    this.bufferStreamProcessor = new BufferStreamProcessor(equipment);
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
        this.emit("data", bufferMessages); // Emitimos solo los mensajes procesados
      }
    } catch (error) {
      this.emit("error", {
        equipment: this.equipment,
        error: new Error(`Error procesando datos: ${error.message}`),
      });
    }
  }
}

module.exports = { BufferDataEmitter };
