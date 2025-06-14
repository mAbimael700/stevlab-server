const { Client } = require("basic-ftp");
const { FtpDirectoryFileManager } = require("./FtpDirectoryFileManager");
const { FtpEventsEmitter } = require("../Connections/Ftp/FtpEventsEmitter");

class FtpDirectoryMonitor {
  /**
   * @param {Client} client
   * @param {FtpDirectoryFileManager} fileManager
   * @param {FtpEventsEmitter} eventsEmitter
   */
  constructor(client, fileManager, eventsEmitter) {
    this.isMonitoring = false;
    this.isStopped = false; // Bandera para detener el monitoreo
    this.client = client;
    this.fileManager = fileManager;
    this.eventsEmitter = eventsEmitter;
    this.currentRetryDelay = 5000;
  }

  async monitorate({ delayBetweenChecks = 1000 }) {
    if (this.isMonitoring) {
      console.warn("El monitoreo ya está en ejecución");
      return
    }

    this.isMonitoring = true;
    this.isStopped = false;

    try {
      while (!this.isStopped) {
        try {
          if (this.client.closed) {
            this.eventsEmitter.emitClosed();
            throw new Error('Conexión FTP cerrada');
          }

          await this.detectChanges();
          await this.delay(delayBetweenChecks); // Espera antes de la próxima iteración
        } catch (error) {
          this.handleMonitoringError(error);
          
          // Esperar antes de reintentar o salir
          await this.delay();

          // Si el error fue de conexión, salir del bucle para permitir la reconexión
          if (this.client.closed || error.code === 'ECONNRESET') {
            break;
          }
        }
      }
    } finally {
      this.isMonitoring = false;
      // Notificar que el monitoreo se detuvo (para posible reconexión)
      this.eventsEmitter.emitMonitoringStopped({ shouldReconnect: !this.isStopped })
    }
  }

  async detectChanges() {
    const addedFiles = await this.fileManager.getAddedOrUpdatedFiles();
    if (addedFiles.length > 0) {
      addedFiles.forEach((af) => this.eventsEmitter.emitAddedFile(af));
      const filesContent = await this.fileManager.downloadFiles(addedFiles);
      filesContent.forEach((fc) => this.eventsEmitter.data(fc));
    }
  }

  /**
   * Detiene el monitoreo de manera controlada.
   */
  stop() {
    this.isStopped = true;

    return new Promise(resolve => {
      const check = () => {
        if (!this.isMonitoring) {
          this.eventsEmitter.emitStopped()
          resolve();
        }
        else setTimeout(check, 10);
      };
      check();
    });
  }

  /**
   * Maneja errores durante el monitoreo y ajusta el retraso de reintento.
   * @param {Error} error
   */
  handleMonitoringError(error) {


    if (this.client.closed) {
      if (["ECONNRESET", "ETIMEDOUT", "ECONNREFUSED"].includes(error.code)) {
        this.currentRetryDelay = 15000; // 15 segundos para errores de red
      }
      this.eventsEmitter.emitClosed(new Error(`Error en monitoreo: ${error.message}`, error))

    } else {

      this.eventsEmitter.emitError(
        new Error(`Error en monitoreo: ${error.message}`, error)
      );

      // Ajusta el retraso según el tipo de error
      if ([421, 503, 530].includes(error.code)) {
        this.currentRetryDelay = 10000; // 10 segundos para errores FTP
      } else {
        this.currentRetryDelay = 5000; // 5 segundos por defecto
      }
    }


  }

  /**
   * Retraso asíncrono (alternativa a setTimeout con Promesas).
   * @param {number} ms - Milisegundos a esperar.
   * @returns {Promise<void>}
   */
  delay(ms = this.currentRetryDelay) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

module.exports = {
  FtpDirectoryMonitor,
};
