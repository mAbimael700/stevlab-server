const { FileInfo } = require("basic-ftp");

class FtpEventsHandler {
  /**
   *
   * @param {FtpClient} client
   * @param {*} equipment
   */
  constructor(client, equipment) { }

  /**
   *
   * @param {FileInfo} file
   */
  addedFile(file) {
    console.log(`Archivos añadidos en ${equipment.name}: ${file.name}`);
  }

  /**
   * 
   * @param {string} data 
   */
  data(data) {

  }

  error({ code }) {
    if (["ECONNRESET", 421, 503, 530].includes(code)) {
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
  }

  monitoringStopped({ shouldReconnect }) {
    if (shouldReconnect) {
      this.ftpClient.reconnect();
    }
  }

}

module.exports = {
  FtpEventsHandler,
};
