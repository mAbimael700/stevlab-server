const ftp = require("basic-ftp");
const { ClientConnection } = require("../../ClientConnection/ClientConnection");
const { FtpEventsEmitter } = require("./FtpEventsEmitter");
const { FtpEventsListener } = require("./FtpEventListener");
const { FtpEventsHandler } = require("./FtpEventsHandler");
const { FtpDirectoryMonitor } = require("./FtpDirectoryMonitor");
const { FtpDirectoryFileManager } = require("./FtpDirectoryFileManager");

class FtpOutBoundClient extends ClientConnection {
  constructor(equipment) {
    super("Ftp");
    this.equipment = equipment;
    this.socket = new ftp.Client();
    
    this.configuration = {
      host: equipment.configuration.ipAddress,
      port: equipment.configuration.port,
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

    this.eventsEmitter = new FtpEventsEmitter();
    this.eventHandler = new FtpEventsHandler(this.socket, this.equipment);
    this.eventsListener = new FtpEventsListener(
      this.eventsEmitter,
      this.eventHandler
    );

    //
    this.fileManager = new FtpDirectoryFileManager(this.socket, this.equipment);
    this.directoryMonitor = new FtpDirectoryMonitor(
      this.socket,
      this.fileManager,
      this.eventsEmitter
    );
  }


}

module.exports = {
  FtpOutBoundClient,
};
