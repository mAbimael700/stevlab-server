class NotificationService {
  constructor({websocketEmitter}) {
    this.emitter = websocketEmitter;
  }

  /**
   * Envía una notificación a todos los clientes
   * @param {string} message - Mensaje a enviar
   * @param {Object} data - Datos adicionales
   */
  sendGlobalNotification(message, data = {}) {
    this.emitter.broadcast("notification", {
      message,
      type: "global",
      ...data
    });
  }

  /**
   * Envía una notificación a un cliente específico
   * @param {string} socketId - ID del socket
   * @param {string} message - Mensaje a enviar
   * @param {Object} data - Datos adicionales
   */
  sendPersonalNotification(socketId, message, data = {}) {
    this.emitter.emitToClient(socketId, "notification", {
      message,
      type: "personal",
      ...data
    });
  }

  /**
   * Envía una notificación a un canal específico
   * @param {string} channel - Nombre del canal
   * @param {string} message - Mensaje a enviar
   * @param {Object} data - Datos adicionales
   */
  sendChannelNotification(channel, message, data = {}) {
    this.emitter.emitToChannel(channel, "notification", {
      message,
      type: "channel",
      ...data
    });
  }

  /**
   * Envía un mensaje personalizado (equivalente a tu función original)
   * @param {Object} body - Cuerpo del mensaje
   * @param {string} channel - Canal de destino
   * @param {"device-status" | "message"} event - Tipo de evento
   */
  sendCustomMessage(body, channel, event) {
    this.emitter.emitMessage(body, channel, event);
  }
}

module.exports = { NotificationService };