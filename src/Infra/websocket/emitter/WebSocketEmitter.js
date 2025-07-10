class WebSocketEmitter {
  constructor(io, emitterService) {
    this.io = io;
    this.emitterService = emitterService;
  }

  /**
   * Emite un evento a todos los clientes conectados
   * @param {string} event - Nombre del evento
   * @param {any} data - Datos a enviar
   */
  broadcast(event, data) {
    if (this.io) {
      const processedData = this.emitterService.processMessageForBroadcast(event, data);
      this.io.emit(event, processedData);
      console.log(`Broadcast enviado - Evento: ${event}`);
    }
  }

  /**
   * Emite un evento a un cliente específico
   * @param {string} socketId - ID del socket
   * @param {string} event - Nombre del evento
   * @param {any} data - Datos a enviar
   */
  emitToClient(socketId, event, data) {
    if (this.io) {
      const processedData = this.emitterService.processMessageForClient(socketId, event, data);
      this.io.to(socketId).emit(event, processedData);
      console.log(`Mensaje enviado a cliente ${socketId} - Evento: ${event}`);
    }
  }

  /**
   * Emite un evento a todos los clientes de un canal específico
   * @param {string} channel - Nombre del canal
   * @param {string} event - Nombre del evento
   * @param {any} data - Datos a enviar
   */
  emitToChannel(channel, event, data) {
    if (this.io) {
      const processedData = this.emitterService.processMessageForChannel(channel, event, data);
      this.io.to(channel).emit(event, processedData);
      console.log(`Mensaje enviado al canal ${channel} - Evento: ${event}`);
    }
  }

  /**
   * Emite un mensaje personalizado (equivalente a tu función emitMessage)
   * @param {any} body - Cuerpo del mensaje
   * @param {string} channel - Canal de destino
   * @param {"device-status" | "message"} event - Tipo de evento
   */
  emitMessage(body, channel, event) {
    const messageId = this.generateUniqueId();
    const message = { id: messageId, channel, ...body };

    try {
      const processedMessage = this.emitterService.processCustomMessage(message, event);
      
      if (channel) {
        this.emitToChannel(channel, event, processedMessage);
      } else {
        this.broadcast(event, processedMessage);
      }
      
      console.log(`Mensaje personalizado enviado - ID: ${messageId}, Evento: ${event}`);
    } catch (error) {
      console.error("Error al emitir el mensaje:", error.message);
    }
  }

  /**
   * Genera un ID único
   * @returns {string} UUID
   */
  generateUniqueId() {
    return crypto.randomUUID();
  }
}

module.exports = WebSocketEmitter