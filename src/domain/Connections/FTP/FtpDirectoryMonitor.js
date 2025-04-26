const { Client } = require("basic-ftp");
const { FtpClient } = require("./FtpClient");
const { FtpDirectoryFileManager } = require("./FtpDirectoryFileManager");
const { ResultHandler } = require("../../BufferStreamManagment/ResultHandler");
const { BufferParser } = require("../../BufferStreamManagment/BufferParser");

class FtpDirectoryMonitor {
  /**
   * @param {*} equipment
   * @param {FtpClient} connection
   */
  constructor(equipment, connection) {
    this.isChecking = false;
    this.equipment = equipment;
    this.connection = connection;
    this.bufferParser = new BufferParser(equipment.parsingConfiguration);
    this.resultHandler = new ResultHandler(equipment.parsingConfiguration);

    /**
     * @type {Client}
     */
    this.client = connection.client;
    this.monitoringTimeout = null;
    this.fileManager = new FtpDirectoryFileManager(equipment, this.client);
  }

  async monitorate() {
    try {
      if (this.isChecking) {
        return;
      }

      if (this.client.closed) {
        try {
          await this.connection.reconnect();
        } catch (reconnectError) {
          throw new Error(
            `Error al reconectar ${this.equipment.name}: ${reconnectError.message}`
          );
        }
      }

      await this.detectChanges();
    } catch (error) {
      console.error(
        "Error al iniciar la monitorización del directorio:",
        error.message
      );

      // Errores de conexión tienen mayor delay
      if (["ECONNRESET", "ETIMEDOUT", "ECONNREFUSED"].includes(error.code)) {
        this.currentRetryDelay = 15000; // 15 segundos para errores de red
      }
      // Errores de protocolo FTP específicos
      else if ([421, 503, 530].includes(error.code)) {
        this.currentRetryDelay = 10000; // 10 segundos
      }
      // Otros errores
      else {
        this.currentRetryDelay = 5000; // 5 segundos por defecto
      }
    } finally {
      // Configurar el próximo ciclo independientemente del resultado
      if (!this.monitoringTimeout) {
        this.monitoringTimeout = setTimeout(() => {
          this.monitoringTimeout = null;
          this.monitorate();
        }, this.currentRetryDelay || 5000);
      }
    }
  }

  async detectChanges() {
    if (this.isChecking) return; // Prevención de ejecuciones simultáneas

    this.isChecking = true;

    try {
      const addedFiles = await this.fileManager.getAddedOrUpdatedFiles();

      if (addedFiles.length > 0) {
        console.log(
          `Archivos añadidos en ${equipment.name}:`,
          addedFiles.map((f) => f.name)
        );

        const results = await this.fileManager.downloadFiles(addedFiles);
        const parsedResults = this.bufferParser.parse(results);
        this.resultHandler.handle(parsedResults);
      }
    } catch (error) {
      if (["ECONNRESET", 421, 503, 530].includes(error.code)) {
        console.error(
          `Error de conexión en el equipo ${equipment.name}:`,
          error.message
        );
      } else {
        console.error(
          `Error al detectar cambios en el equipo ${equipment.name} en el directorio:`,
          error.message
        );
      }
    } finally {
      this.isChecking = false;
    }
  }

  stopMonitoring() {
    if (this.monitoringTimeout) {
      clearTimeout(this.monitoringTimeout);
      this.monitoringTimeout = null;
    }
    this.isChecking = false;
  }
}

module.exports = {
  FtpDirectoryMonitor,
};
