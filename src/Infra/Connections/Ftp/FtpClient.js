const ftp = require("basic-ftp");
const { FtpEventsEmitter } = require("./FtpEventsEmitter");
const { FtpEventsListener } = require("./FtpEventListener");
const { FtpEventsHandler } = require("./FtpEventsHandler");
const { FtpDirectoryMonitor } = require("../../ftpdirectorymonitor/FtpDirectoryMonitor");
const { FtpDirectoryFileManager } = require("../../ftpdirectorymonitor/FtpDirectoryFileManager");
const ClientOutBoundConnection = require("../../clientconnection/ClientOutBoundConnection");

class FtpClient extends ClientOutBoundConnection {
  constructor(equipment) {
    super("Ftp");
    this.equipment = equipment;
    this.client = new ftp.Client();
    this.closed = this.client.closed

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
    this.eventHandler = new FtpEventsHandler(this.client, this.equipment);
    this.eventsListener = new FtpEventsListener(
      this.eventsEmitter,
      this.eventHandler
    );

    //
    this.fileManager = new FtpDirectoryFileManager(this.client, this.equipment);
    this.directoryMonitor = new FtpDirectoryMonitor(
      this.client,
      this.fileManager,
      this.eventsEmitter
    );
  }

  async connect() {
    try {
      if (this.connecting) {
        throw new Error(`Ya se está conectando el cliente Ftp para ${this.equipment.name}`);
      }

      this.connecting = true
      await this.client.access(this.configuration)

      if (this.client.closed) {
        this.eventsEmitter.emitClosed()
      } else {
        this.eventsEmitter.emitConnected()
        await this.directoryMonitor.monitorate({ delayBetweenChecks: 1200 })
      }

    } catch (error) {
      this.eventsEmitter.emitConnectionError(error)
    }
    finally {
      this.connecting = false
    }
  }


  async disconnect() {
    try {
      if (this.closing) {
        throw new Error(`Ya se está cerrando el cliente Ftp para ${this.equipment.name}`);
      }
      this.closing = true
      await this.directoryMonitor.stop()
      this.client.close()
      this.client.closed = true
    } catch (error) {
      this.eventsEmitter.emitDisconnectionError(error)
    } finally {
      this.closing = false
    }
  }

  async reconnect() {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      this.eventsEmitter.emitMaxReconnectAttempts();
      return false;
    }

    this.reconnectAttempts++;
    await this.delay(this.reconnectDelay);

    try {
      await this.connect();
      this.reconnectAttempts = 0; // Resetear intentos si es exitoso
      return true;
    } catch (error) {
      this.reconnectDelay *= 2; // Backoff exponencial
      return false;
    }
  }
}

module.exports = FtpClient;
