const WebSocketEmitter = require("../emitter/WebSocketEmitter");
const WebSocketEmitterHandleEvents = require("../handlerevents/WebSocketEmitterHandleEvents");
const WebSocketListenerHandleEvents = require("../handlerevents/WebSocketListenerHandleEvents");
const WebSocketListener = require("../listener/WebSocketListener");
const WebSocketServer = require("../server/SocketIoServer");

class WebSocketManager {
    constructor() {
        this.server = null;
        this.listener = null;
        this.emitter = null;
        this.listenerHandler = null;
        this.emitterHandler = null;
        this.io = null;
    }

    /**
     * Inicializa todo el sistema WebSocket
     * @param {http.Server} httpServer - Servidor HTTP
     * @param {Object} options - Opciones de configuración
     */
    initialize(httpServer, options = {}) {
        // 1. Crear el servidor WebSocket
        this.server = new WebSocketServer(options);
        this.io = this.server.initialize(httpServer);

        // 2. Crear los handlers de eventos
        this.listenerHandler = new WebSocketListenerHandleEvents();
        this.emitterHandler = new WebSocketEmitterHandleEvents();

        // 3. Inyectar dependencias y crear listener y emitter
        this.listener = new WebSocketListener(this.io, this.listenerHandler);
        this.emitter = new WebSocketEmitter(this.io, this.emitterHandler);

        console.log("WebSocket Manager initialized successfully");
    }

    /**
     * Obtiene la instancia del emitter
     * @returns {WebSocketEmitter} Instancia del emitter
     */
    getEmitter() {
        return this.emitter;
    }

    /**
     * Obtiene la instancia del listener
     * @returns {WebSocketListener} Instancia del listener
     */
    getListener() {
        return this.listener;
    }

    /**
     * Obtiene la instancia de Socket.IO
     * @returns {Server} Instancia de Socket.IO
     */
    getIO() {
        return this.io;
    }

    /**
     * Cierra el servidor WebSocket
     */
    close() {
        if (this.server) {
            this.server.close();
        }
    }
}

module.exports = WebSocketManager