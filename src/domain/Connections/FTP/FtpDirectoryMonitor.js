const { Client } = require("basic-ftp");
const { FtpDirectoryFileManager } = require("./FtpDirectoryFileManager");
const { FtpEventsEmitter } = require("./FtpEventsEmitter");

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
    this.monitoringTimeout = null;
    this.currentRetryDelay = 5000;
  }

  async monitorate({ delayBetweenChecks = 1000 }) {
    if (!this.isMonitoring) {
      this.isMonitoring = true;
      this.isStopped = false;

      while (this.isStopped) {
        try {
          if (this.client.closed) {
            this.eventsEmitter.emitClosed();
          }
          await this.detectChanges();
          await this.delay(delayBetweenChecks); // Espera antes de la próxima iteración
        } catch (error) {
          this.handleMonitoringError(error);
          await this.delay(this.currentRetryDelay); // Espera antes de reintentar
        }
      }
    }
    
    this.isMonitoring = false;
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
  stopMonitoring() {
    this.shouldStop = true;
  }

  /**
   * Maneja errores durante el monitoreo y ajusta el retraso de reintento.
   * @param {Error} error
   */
  handleMonitoringError(error) {
    this.eventsEmitter.emitError(
      new Error(`Error en monitoreo: ${error.message}`, error)
    );

    // Ajusta el retraso según el tipo de error
    if (["ECONNRESET", "ETIMEDOUT", "ECONNREFUSED"].includes(error.code)) {
      this.currentRetryDelay = 15000; // 15 segundos para errores de red
    } else if ([421, 503, 530].includes(error.code)) {
      this.currentRetryDelay = 10000; // 10 segundos para errores FTP
    } else {
      this.currentRetryDelay = 5000; // 5 segundos por defecto
    }
  }

  /**
   * Retraso asíncrono (alternativa a setTimeout con Promesas).
   * @param {number} ms - Milisegundos a esperar.
   * @returns {Promise<void>}
   */
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

module.exports = {
  FtpDirectoryMonitor,
};
