
const { Client } = require("basic-ftp");
const { FTPClient } = require("./FtpClient");
const { FtpFileManager } = require("./FtpFileManager");
const { ResultHandler } = require("../../BufferStreamManagment/ResultHandler");
const { BufferParser } = require("../../BufferStreamManagment/BufferParser");

class FTPMonitor {
  /**
   * @param {*} equipment
   * @param {FTPClient} connectionClient 
   */
  constructor(equipment, connectionClient) {
    this.isChecking = false;
    this.equipment = equipment;
    this.connection = connectionClient;
    this.bufferParser = new BufferParser(equipment.parsingConfiguration);
    this.resultHandler = new ResultHandler(equipment.parsingConfiguration);

    /**
     * @type {Client}
     */
    this.client = connectionClient.client;
    this.detectorTimeout = null;
    this.fileManager = new FtpFileManager(equipment, this.client)
  }

  monitorate() {

    try {
      detectChanges(); // Inicia la detección inicial
    } catch (error) {
      console.error(
        "Error al iniciar la monitorización del directorio:",
        error.message
      );
    }
  }



  async detectChanges() {
    if (this.isChecking && this.connection.connecting) return;
    this.isChecking = true;

    try {
      if (this.client.closed) {
        return
      }
      const addedFiles = await this.fileManager.getAddedOrUpdatedFiles();

      if (addedFiles.length > 0) {
        console.log(
          `Archivos añadidos en ${equipment.name}:`,
          addedFiles.map((f) => f.name)
        );

        const results = await this.fileManager.downloadFiles(addedFiles)
        const parsedResults = this.bufferParser.parse(results)
        this.resultHandler.handle(parsedResults)
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


}

module.exports = {
  FTPMonitor,
};
