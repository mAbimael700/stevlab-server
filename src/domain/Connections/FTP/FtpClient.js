const ftp = require("basic-ftp");
const { ReconnectionManager } = require("../ReconnectionManager");
const {
  ExponentialBackoff,
} = require("../../ExponentialBackoff/ExponentialBackoff");

class FtpClient {
  constructor(equipment) {
    this.equipment = equipment;
    this.retryStrategy = new ExponentialBackoff();

    this.configuration = {
      host: this.equipment.configuration.ipAddress,
      port: this.equipment.configuration.port,
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
    /**
     * Cliente de conexión FTP
     * @type {ftp.Client}
     */
    this.client = new ftp.Client();
    this.client.connecting = false;
    this.reconnectManager = ReconnectionManager.getInstance();
    /**
     * Manejo de intervalos activos
     * @type {Set<NodeJS.T>}
     */
    this.activeIntervals = new Set();
  }

  /**
   *
   */
  async build() {
    try {
      // Intentamos acceder al servidor FTP
      this.client.connecting = true;

      await this.retryStrategy.executeWithRetry(async () => {
        await this.connect();
      });
    } catch (error) {
      throw error;
    } finally {
      this.client.connecting = false;
    }
  }

  async reconnect() {
    try {
      this.retryStrategy.reset();
      await this.build();

      if (this.client.closed) {
        this.scheduleReconnection();
      } else {
        this.cancelScheduledReconnection();
      }
    } catch (error) {
      console.error(`Error en proceso de reconexión: ${error.message}`);
    }
  }

  async connect() {
    try {
      await this.client.access(this.configuration);

      // Verifica el estado de la conexión luego de acceder
      if (this.client.closed) {
        throw new Error(
          "Conexión cerrada inmediatamente después de establecerse"
        );
      }
    } catch (error) {
      throw error;
    }
  }

  /**
   * Programa la reconexión automática
   */
  scheduleReconnection() {
    if (!this.reconnectManager.getReconnectInterval(this.equipment.id)) {
      const interval = setInterval(async () => {
        try {
          await this.reconnect();
        } catch (error) {
          console.error(`Error en reconexión programada: ${error.message}`);
        }
      }, this.retryStrategy.getNextDelay());

      this.reconnectManager.setReconnectInterval(this.equipment.id, interval);
      this.activeIntervals.add(interval);
    }
  }

  /**
   * Cancela la reconexión programada
   */
  cancelScheduledReconnection() {
    const interval = this.reconnectManager.getReconnectInterval(
      this.equipment.id
    );
    if (interval) {
      clearInterval(interval);
      this.reconnectManager.removeReconnectInterval(this.equipment.id);
      this.activeIntervals.delete(interval);
    }
  }
}

module.exports = { FtpClient };
