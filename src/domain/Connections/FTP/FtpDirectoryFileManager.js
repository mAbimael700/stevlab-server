const fs = require("node:fs");
const path = require("node:path");
const { Client, FileInfo } = require("basic-ftp");
const { STATES, FILE_UPLOADS_DIR } = require("../../../constants/CONFIG_DIR");

class FtpDirectoryFileManager {
  /**
   *
   * @param {Client} client
   * @param {*} equipment
   */
  constructor(client, equipment) {
    this.client = client;
    this.previousFileDirectoryState = this.loadEquipmentDirectoryState(
      equipment.id
    );
    this.addedFilesToDirectory = null;
    this.currentFileDirectoryState = null;
  }

  /**
   *
   * @returns {Promise<FileInfo[]>}
   */
  async getCurrentFileDirectoryState() {
    return (await this.timeoutPromise(this.client.list("/"), 5000)).map(
      (file) => file
    );
  }

  generateFilePath(macAddress) {
    return path.join(STATES, `${macAddress}-previous-state.json`);
  }

  /**
   * Helpers para manejo de archivos
   * @param {string} equipmentId
   * @returns {FileInfo[]}
   */
  loadEquipmentDirectoryState(equipmentId) {
    const filePath = generateFilePath(equipmentId);

    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath));
    }
    fs.writeFileSync(filePath, JSON.stringify([])); // Crear archivo vacío si no existe
    return [];
  }

  /**
   *
   * @param {string} equipmentId
   * @param {FileInfo[]} currentFiles
   */
  saveCurrentDirectoryState(equipmentId, currentFiles) {
    const filePath = generateFilePath(equipmentId);
    fs.writeFileSync(filePath, JSON.stringify(currentFiles));
  }

  async getAddedOrUpdatedFiles() {
    const currentState = await this.getCurrentFileDirectoryState();

    const addedFiles = currentState.filter((currentFile) => {
      // Buscar un archivo con el mismo nombre en los archivos anteriores
      const previousFile = this.previousFileDirectoryState.find(
        (prevFile) => prevFile.name === currentFile.name
      );
      // Si no existe en los archivos anteriores o si la fecha de modificación es distinta
      return (
        (!previousFile ||
          previousFile.rawModifiedAt !== currentFile.rawModifiedAt) &&
        currentFile.type !== 2
      );
    });

    this.previousFileDirectoryState = currentState;
    this.saveCurrentDirectoryState(this.equipmentId, currentState);
    return addedFiles;
  }

  getRemovedFiles(currentFiles, previousFiles) {
    return previousFiles.filter(
      (prevFile) =>
        !currentFiles.some((currentFile) => currentFile.name === prevFile.name)
    );
  }

  /**
   * @param {FileInfo[]} files
   * @returns {Promise<string[]>}
   */
  async downloadFiles(files) {
    const downloadedContents = [];

    for (const file of files) {
      try {
        const localPathToDownload = path.join(FILE_UPLOADS_DIR, file.name);
        await this.timeoutPromise(
          this.client.downloadToDir(localPathToDownload, `/${file.name}`),
          10000
        );
        const content = fs.readFileSync(localPathToDownload, "utf8");
        downloadedContents.push(content);
      } catch (error) {
        console.error(`Error al descargar/procesar ${file}:`, error.message);
        continue;
      }
    }

    return downloadedContents;
  }

  /**
   * Helper para manejar tiempos de espera
   * @param {Promise<FileInfo[]>} promise
   * @param {number} ms
   * @returns {Promise<T>}
   */
  timeoutPromise(promise, ms) {
    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout alcanzado")), ms)
    );
    return Promise.race([promise, timeout]);
  }
}

module.exports = {
  FtpDirectoryFileManager,
};
