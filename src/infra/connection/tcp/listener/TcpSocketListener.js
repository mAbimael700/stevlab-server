const { Socket } = require("node:net");
const TcpEventsHandler = require("../events/TcpEventHandler");

class TcpSocketListener {
  /**
   *
   * @param {Socket} socket
   * @param {TcpEventsHandler} tcpEventsHandler
   */
  constructor(socket, tcpEventsHandler) {
    this.socket = socket;
    this.eventsHandler = tcpEventsHandler;
    // Bind handlers para mantener el contexto
    this._bindHandlers();
    this.setup()
  }

  setup() {
    this.socket.removeAllListeners(); // Limpia cualquier listener anterior
    this.socket.setTimeout(60000); // 60 segundos

  
    this.socket.on('connect', this.eventsHandler.connect)
    this.socket.on("data", this.eventsHandler.data);
    this.socket.on("close", this.eventsHandler.close);
    this.socket.on("error", this.eventsHandler.error);
    this.socket.on("end", this.eventsHandler.end);
    this.socket.on("timeout", this.eventsHandler.timeout);
  }


  _bindHandlers() {
    const methods = ["connect", "data", "close", "error", "end", "timeout"];

    methods.forEach((method) => {
      if (typeof this.eventsHandler[method] === "function") {
        this.eventsHandler[method] = this.eventsHandler[method].bind(
          this.eventsHandler
        );
      }
    });
  }
}

module.exports = { TcpSocketListener };
