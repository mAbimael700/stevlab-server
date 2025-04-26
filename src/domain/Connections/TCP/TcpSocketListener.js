const { Socket } = require("node:net");
const TcpEventsHandler = require("./TcpEventHandler");

class TcpSocketListener {
  /**
   *
   * @param {Socket} socket
   * @param {Equipment} equipment
   */
  constructor(socket, equipment = null) {
    this.socket = socket;
    this.equipment = equipment;
    this.eventHandler = new TcpEventsHandler(this.socket, this.equipment);

    // Bind handlers para mantener el contexto
    this._bindHandlers();
  }

  setup() {
    this.socket.removeAllListeners(); // Limpia cualquier listener anterior
    this.socket.setTimeout(60000); // 60 segundos

    // Configurar eventos
    this.socket.on("connect", this.eventHandler.connect);
    this.socket.on("data", this.eventHandler.data);
    this.socket.on("close", this.eventHandler.close);
    this.socket.on("error", this.eventHandler.error);
    this.socket.on("end", this.eventHandler.end);
    this.socket.on("timeout", this.eventHandler.timeout);
  }

  _bindHandlers() {
    const methods = ["connect", "data", "close", "error", "end", "timeout"];

    methods.forEach((method) => {
      if (typeof this.eventHandler[method] === "function") {
        this.eventHandler[method] = this.eventHandler[method].bind(
          this.eventHandler
        );
      }
    });
  }
}

module.exports = { TcpSocketListener };
