const HandshakeFactory = require("@/infra/equipmentcommunication/handshake/factory/HandshakeFactory");
const ResultAckFactory = require("@/infra/equipmentcommunication/ack/factory/ResultAckFactory");
const { SerialPort } = require("serialport");
const { Socket } = require("node:net");

class CommunicationCoordinator {
  /**
   *
   * @param {Socket | SerialPort} client
   * @param {EquipmentDto} equipment
   */
  constructor(client, equipment) {
    this.client = client;
    this.equipment = equipment;

    this.handshakeFactory = new HandshakeFactory();
    this.ackFactory = new ResultAckFactory();

    // Estados de comunicación
    this.handshakeCompleted = !equipment.equipmentProfile.handshake;

    // Servicios activos
    this.handshakeService = this._createHandshakeService();
    this.ackService = this._createAckService();
  }

  /**
   * Inicia el handshake si es requerido
   */
  async initiateHandshake() {
      try {
        if (!this.equipment.equipmentProfile.handshake || this.handshakeCompleted) {
          return true;
        }

      const handshakeRequest = this.handshakeService.generateHandshakeRequest(
        this.equipment.equipmentConfiguration
      );

      this.client.write(handshakeRequest);

      console.log(`Handshake iniciado para equipo ${this.equipment.name}`);
      
      return true;
    } catch (error) {
      console.error(
        `Error al iniciar handshake para equipo ${this.equipment.name}:`,
        error
      );
      return false;
    }
  }

  /**
   * Procesa la respuesta del handshake
   * @param {Buffer|string} data - Datos recibidos
   * @returns {boolean} - True si se completó el handshake, false si aún está en proceso
   */
  processHandshakeResponse(data) {
    if (!this.equipment.equipmentProfile.handshake || this.handshakeCompleted) {
      return true;
    }

    try {
      const success = this.handshakeService.processHandshakeResponse(
        data,
        this.equipment.equipmentConfiguration
      );

      if (success) {
        this.handshakeCompleted = true;

        // Enviar confirmación si es necesaria
        const confirmation =
          this.handshakeService.generateHandshakeConfirmation(
            this.equipment.equipmentConfiguration
          );

        if (confirmation) {
          this.client.write(confirmation);
        }

        console.log(`Handshake completado para equipo ${this.equipment.name}`);
        return true;
      }

      return false;
    } catch (error) {
      console.error(
        `Error procesando handshake para equipo ${this.equipment.name}:`,
        error
      );
      return false;
    }
  }

  /**
   * Procesa datos recibidos y determina si deben ser procesados
   * @param {Buffer|string} data - Datos recibidos
   * @returns {Object} - Resultado del procesamiento
   */
  processReceivedData(data) {
    const result = {
      shouldProcessData: false,
      handshakeInProgress: false,
    };

    // Si el handshake no está completo, procesar como respuesta de handshake
    if (!this.handshakeCompleted) {
      result.handshakeInProgress = true;
      const handshakeComplete = this.processHandshakeResponse(data);

      if (!handshakeComplete) {
        return result; // Aun esperando más datos del handshake
      }
    }

    result.shouldProcessData = true;
    return result;
  }

  /**
   * Procesa los resultados del BufferDataHandler y envía ACKs si es necesario
   * @param {Array} processedResults - Array de resultados procesados por BufferDataHandler
   * @param {Buffer|string} originalData - Datos originales recibidos
   */
  handleProcessedResults(processedResults, originalData) {
    if (!this.equipment.equipmentProfile.ack) {
      return;
    }

    // Solo enviar ACK si hay resultados procesados
    if (processedResults && processedResults.length > 0) {
      const trigger = this._getAckTrigger();

      if (trigger === "ON_MESSAGE") {
        // Enviar un ACK por cada chunk de datos que produjo resultados
        this._sendAck(originalData);
      } else if (trigger === "ON_COMPLETE_RESULT") {
        // Enviar un ACK por cada resultado completo procesado
        processedResults.forEach((result) => {
          this._sendAck(result);
        });
      }
    }
  }

  _sendAck(messageOrData) {
    try {
      const ack = this.ackService.generateAck(
        messageOrData,
        this.equipment.equipmentConfiguration
      );

      this.client.write(ack);
      console.log(`ACK enviado para equipo ${this.equipment.name}`);
    } catch (error) {
      console.error(
        `Error enviando ACK para equipo ${this.equipment.name}:`,
        error
      );
    }
  }

  /**
   * Resetea el estado de comunicación
   */
  reset() {
    this.handshakeCompleted = !this.equipment.equipmentProfile.handshake;
  }

  _createHandshakeService() {
    if (!this.equipment.equipmentProfile.handshake) {
      return null;
    }
    return this.handshakeFactory.createService(
      this.equipment.equipmentProfile.handshake
    );
  }

  _createAckService() {
    if (!this.equipment.equipmentProfile.ack) {
      return null;
    }

    // Extraer el tipo base del ACK (sin el sufijo del trigger)
    const ackType = this._extractAckType(this.equipment.equipmentProfile.ack);
    return this.ackFactory.createService(ackType);
  }

  /**
   * Extrae el tipo de ACK base del string de configuración
   * @param {string} ackConfig - Configuración del ACK (ej: 'HL7-COMPLETE-1', 'ASTM-1')
   * @returns {string} - Tipo base (ej: 'HL7-1', 'ASTM-1')
   */
  _extractAckType(ackConfig) {
    // Si contiene '-COMPLETE-', removerlo para obtener el tipo base
    return ackConfig.replace("-COMPLETE", "");
  }

  /**
   * Determina el trigger del ACK basándose en la configuración
   * @returns {string} - 'ON_MESSAGE' o 'ON_COMPLETE_RESULT'
   */
  _getAckTrigger() {
    if (!this.equipment.equipmentProfile.ack) {
      return null;
    }

    // Si contiene '-COMPLETE-', entonces es ON_COMPLETE_RESULT
    return this.equipment.equipmentProfile.ack.includes("-COMPLETE-")
      ? "ON_COMPLETE_RESULT"
      : "ON_MESSAGE";
  }
}

module.exports = CommunicationCoordinator;
