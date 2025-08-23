class WebSocketListener {
    constructor({io, handlerService}) {
        this.io = io;
        this.handlerService = handlerService;
        this.setupListeners();
    }

    /**
     * Configura todos los listeners del WebSocket
     */
    setupListeners() {
        this.io.on("connection", (socket) => {
            console.log("Nuevo cliente WebSocket conectado:", socket.id);

            this.setupSocketListeners(socket);
        });
    }

    /**
     * Configura los listeners específicos para cada socket
     * @param {Socket} socket - Instancia del socket
     */
    setupSocketListeners(socket) {
        // Listener para desconexión
        socket.on("disconnect", () => {
            this.handlerService.handleDisconnect(socket);
        });

        // Listener para ping
        socket.on("ping", () => {
            this.handlerService.handlePing(socket);
        });

        // Listener para confirmación de mensajes
        socket.on("message_confirmation", (data) => {
            this.handlerService.handleMessageConfirmation(socket, data);
        });

        // Listener para mensajes personalizados
        socket.on("custom_message", (data) => {
            this.handlerService.handleCustomMessage(socket, data);
        });

        // Listener para unirse a canales
        socket.on("join_channel", (data) => {
            this.handlerService.handleJoinChannel(socket, data);
        });

        // Listener para salir de canales
        socket.on("leave_channel", (data) => {
            this.handlerService.handleLeaveChannel(socket, data);
        });

        // Ejecutar el handler de conexión
        this.handlerService.handleConnection(socket);
    }

    /**
     * Agrega un listener personalizado
     * @param {string} event - Nombre del evento
     * @param {Function} handler - Función manejadora
     */
    addCustomListener(event, handler) {
        this.io.on("connection", (socket) => {
            socket.on(event, (data) => handler(socket, data));
        });
    }
}

module.exports = WebSocketListener