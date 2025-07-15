class WebSocketEmitterHandleEvents {
  constructor() {
    // Puedes inyectar dependencias aquí si es necesario
  }

  /**
   * Procesa un mensaje antes de hacer broadcast
   * @param {string} event - Nombre del evento
   * @param {any} data - Datos originales
   * @returns {any} Datos procesados
   */
  processMessageForBroadcast(event, data) {
    return {
      data,
      timestamp: new Date().toISOString(),
      type: "broadcast",
      event
    };
  }

  /**
   * Procesa un mensaje antes de enviarlo a un cliente específico
   * @param {string} socketId - ID del socket
   * @param {string} event - Nombre del evento
   * @param {any} data - Datos originales
   * @returns {any} Datos procesados
   */
  processMessageForClient(socketId, event, data) {
    return {
      data,
      timestamp: new Date().toISOString(),
      type: "direct",
      event,
      targetClient: socketId
    };
  }

  /**
   * Procesa un mensaje antes de enviarlo a un canal
   * @param {string} channel - Nombre del canal
   * @param {string} event - Nombre del evento
   * @param {any} data - Datos originales
   * @returns {any} Datos procesados
   */
  processMessageForChannel(channel, event, data) {
    return {
      data,
      timestamp: new Date().toISOString(),
      type: "channel",
      event,
      channel
    };
  }

  /**
   * Procesa un mensaje personalizado
   * @param {any} message - Mensaje original
   * @param {string} event - Tipo de evento
   * @returns {any} Mensaje procesado
   */
  processCustomMessage(message, event) {
    return {
      ...message,
      timestamp: new Date().toISOString(),
      eventType: event,
      processed: true
    };
  }
}

module.exports = WebSocketEmitterHandleEvents