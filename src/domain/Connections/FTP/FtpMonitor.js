const path = require("node:path");
const fs = require("node:fs");
const { Client } = require("basic-ftp");
const { FILE_UPLOADS_DIR } = require("../../../constants/CONFIG_DIR");
const { BufferParser } = require("../../data-handler/BufferParser");
const { ResultHandler } = require("../../data-handler/ResultHandler");

class FTPMonitor {
  /**
   * @param {*} equipment
   */
  constructor(equipment) {
    this.isChecking = false;
    this.equipment = equipment;
    this.connection = equipment.connection;
    this.bufferParser = new BufferParser(equipment.parsingConfiguration);
    this.resultHandler = new ResultHandler(equipment.parsingConfiguration);

    /**
     * @type {Client}
     */
    this.client = equipment.connection.client;
    this.previousFiles = null;
    this.detectorTimeout = null;
  }

  async monitorate() {
    this.previousFiles = Server.loadPreviousDirectoryState(this.equipment);
    this.detectorTimeout = setTimeout(this.detectChanges, 1000);
  }

  async detectChanges() {
    if (this.isChecking) return;
    this.isChecking = true;

    try {
      if (this.client.closed && !this.connection.connecting) {
        await this.connection.reconnect();

        if (this.client.closed) {
          console.error(`No se pudo reconectar con ${this.equipment.name}. Deteniendo el monitoreo.`);
        }
      }

      const currentFiles = (
        await this.timeoutPromise(this.client.list("/"), 5000)
      ).map((file) => file);

      const addedFiles = this.getAddedOrUpdatedFiles(currentFiles);
      const removedFiles = this.getRemovedFiles(currentFiles);

      if (addedFiles.length > 0) {
        console.log(`Archivos añadidos en ${equipment.name}:`, addedFiles);
        await this.processNewFiles(equipment, addedFiles);
      }

      if (removedFiles.length > 0) {
        console.log(`Archivos eliminados en ${equipment.name}:`, removedFiles);
      }

      Server.saveCurrentDirectoryState(this.equipment, currentFiles);
      this.previousFiles = currentFiles;
    } catch (error) {
      if (["ECONNRESET", 421, 503, 530].includes(error.code)) {
        console.error(
          `Error de conexión con ${equipment.name}:`,
          error.message
        );
        await this.connection.reconnect();
      } else {
        console.error(
          "Error al detectar cambios en el directorio:",
          error.message
        );
      }
    } finally {
      this.isChecking = false;
    }
  }

  getAddedOrUpdatedFiles(currentFiles) {
    return currentFiles.filter((currentFile) => {
      // Buscar un archivo con el mismo nombre en los archivos anteriores
      const previousFile = this.previousFiles.find(
        (prevFile) => prevFile.name === currentFile.name
      );
      // Si no existe en los archivos anteriores o si la fecha de modificación es distinta
      return (
        !previousFile ||
        previousFile.rawModifiedAt !== currentFile.rawModifiedAt
      );
    });
  }

  getRemovedFiles(currentFiles) {
    return this.previousFiles.filter(
      (prevFile) =>
        !currentFiles.some((currentFile) => currentFile.name === prevFile.name)
    );
  }

  // Procesamiento de archivos
  async processNewFiles(addedFiles) {
    for (const addedFile of addedFiles) {
      try {
        const localPathToDownload = path.join(FILE_UPLOADS_DIR, addedFile.name);
        await this.timeoutPromise(
          this.client.downloadTo(localPathToDownload, `/${addedFile.name}`),
          10000
        );
        const data = fs.readFileSync(localPathToDownload, "utf8");
        const result = this.bufferParser.parse(data);
        this.resultHandler.handle(result);

        console.log(`Archivo procesado: ${addedFile.name}`);
      } catch (error) {
        console.error(
          `Error al descargar/procesar ${addedFile}:`,
          error.message
        );
      }
    }
  }

  timeoutPromise(promise, ms) {
    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout alcanzado")), ms)
    );
    return Promise.race([promise, timeout]);
  }
}

module.exports = {
  FTPMonitor,
};
