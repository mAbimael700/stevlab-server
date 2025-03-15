const ftp = require("basic-ftp");
const { ReconnectionManager } = require("../ReconnectionManager");

class FTPClient {
  constructor(equipment) {
    this.equipment = equipment;
    this.maxReconnectAttempts = 5;
    this.baseDelay = 1000; // Retraso base en milisegundos (1 segundo)
    this.configuration = {
      host: this.equipment.getIpAddress(),
      port: this.equipment.getPort(),
      user: "stevlabserver",
      password: "annon",
      secure: true, // TLS explícito
      sessionReuse: false,
      passive: true, // Habilita el modo pasivo
      secureOptions: {
        rejectUnauthorized: false,
        maxVersion: "TLSv1.2",
      }, // Permitir certificados autofirmados
    };
    this.client = null;
    this.reconnectManager = ReconnectionManager.getInstance();
  }

  /**
   *
   * @param {number} retryCount
   * @returns {Promise<ftp.Client | null>}
   */
  async build() {
    // Creamos un objeto de la clase ftp
    this.client = new ftp.Client();

    try {
      // Intentamos acceder al servidor FTP
      this.client.connecting = true;
      await this.client.access(this.configuration);

      // Verificar el estado de la conexión luego de acceder
      if (this.client.closed) {
        console.warn("La conexión se cerró inesperadamente");
      } else {
        const message = `Conexión FTP establecida con el equipo ${this.equipment.name} en el host ${this.equipment.configuration.ipAddress}:${equipment.configuration.port}`;
        console.info(message);
        console.info("Conexión abierta y activa");
        //emitOpenedDevice(equipment, message);
      }
      this.client.connecting = false;
      return this.client;
    } catch (error) {
      console.error(
        `Error al conectar FTP con el equipo ${equipment.name} en el host ${equipment.ip_address}:${equipment.port}`,
        error.message
      );

      await this.reconnect();
      return this.client;
    }
  }

  async reconnect() {
    const idDevice = this.equipment.id; // Asume que el equipo tiene un ID único

    // Si ya hay un intervalo de reconexión para este dispositivo, lo eliminamos
    if (this.reconnectManager.getReconnectInterval(idDevice)) {
      this.reconnectManager.removeReconnectInterval(idDevice);
    }

    for (let attempt = 1; attempt <= this.maxReconnectAttempts; attempt++) {
      this.client.connecting = true;
      try {
        console.log(
          `Intentando reconectar con ${this.equipment.name} (Intento ${attempt}/${maxRetries})...`
        );
        await this.client.access(this.configuration);
        console.log(`Reconexión exitosa con ${this.equipment.name}`);

        // Si la reconexión es exitosa, eliminamos el intervalo de reconexión
        this.reconnectManager.removeReconnectInterval(idDevice);
      } catch (error) {
        console.error(
          `Error en el intento ${attempt} de reconexión:`,
          error.message
        );

        if (attempt === this.maxReconnectAttempts) {
          throw new Error(
            `No se pudo reconectar después de ${this.maxReconnectAttempts} intentos.`
          );
        }

        // Retraso exponencial: duplica el retraso en cada intento
        const delay = this.baseDelay * Math.pow(2, attempt - 1);
        await new Promise((resolve) => setTimeout(resolve, delay));
      } finally {
        this.client.connecting = false;
      }
    }

    // Si llegamos aquí, significa que se agotaron los intentos
    // Podemos programar un nuevo intento de reconexión después de un tiempo
    this.setReconnectionInterval();
  }

  setReconnectionInterval() {
    const interval = setInterval(async () => {
      try {
        await this.reconnect(); // Intentar reconectar nuevamente
      } catch (error) {
        console.error(
          "Error en el intento de reconexión programada:",
          error.message
        );
      }
    }, this.baseDelay * Math.pow(2, this.maxReconnectAttempts));
    
    // Guardar el intervalo en el ReconnectionManager
    this.reconnectManager.setReconnectInterval(this.equipment.id, interval); // Retardo exponencial máximo
  }
}

module.exports = { FTPClient };
