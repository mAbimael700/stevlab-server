const { Socket } = require("node:net");
const TcpEventHandler = require("./TcpEventHandler");
const { ConnectionValidator } = require("./ConnectionValidator");
const { EquipmentManager } = require("../../../domain/EquipmentManager/EquimentManager");

class TcpSocketListener {

    /**
     * 
     * @param {Socket} socket
     * @param {Equipment} equipment
     */
    constructor(socket, equipment = null) {
        this.socket = socket
        this.connectionValidator = new ConnectionValidator()
        this.equipmentManager = EquipmentManager.getInstance()
        this.equipment = equipment

        if (this.equipment) {
            this.eventHandler = new TcpEventHandler(this.socket, this.equipment)
        } else {
            this.eventHandler = null
        }
    }

    build() {
        this.socket.removeAllListeners(); // Limpia cualquier listener anterior
        this.socket.setTimeout(60000); // 60 segundos
        // Configurar eventos

        this.socket.on("connect", async () => {
            try {
                if (!this.equipment) {
                    const result = await this.connectionValidator.validate(this.socket.remoteAddress);
                    this.equipment = this.equipmentManager.getEquipmentById(result.id);

                    if (!this.equipment)
                        throw new Error(`Equipo con ID ${result.id} no encontrado.`);

                    this.eventHandler = new TcpEventHandler(this.socket, this.equipment);
                }

                if (!this.equipment.connection.client) {
                    this.equipment.connection.setClient(this.socket);
                }

                console.log(
                    `Conexión TCP/IP entrante del equipo ${this.equipment.name} con la dirección IPv4: ${this.equipment.getIpAddress()}:${this.socket.remotePort}`
                );

            } catch (error) {
                console.error("Error durante la conexión:", error.message);
                this.socket.destroy(); // Cierra el socket si hay un error
            }
        })

        this.socket.on("data", (buffer) => {
            if (this.eventHandler) {
                this.eventHandler.data(buffer);
            }
        });

        this.socket.on("close", () => {
            if (this.eventHandler) {
                this.eventHandler.handleConnectionEvent(
                    "close",
                    this.scheduleReconnect
                )
            }
        });

        // Configurar el manejador de errores antes de llamar a connect
        this.socket.on("error", (err) => {
            if (this.eventHandler) {
                this.eventHandler.handleConnectionEvent(
                    "error",
                    this.scheduleReconnect,
                    err
                );
            }
        });

        this.socket.on("end", () => {
            if (this.equipment) {
                console.warn
                    (
                        `Conexión cerrada por el equipo ${this.equipment.name
                        } con IPv4: ${this.equipment.getIpAddress()}:${this.socket.remotePort}`
                    );
            } else {
                console.warn(`Conexión cerrada por el equipo no registrado con IPv4: ${this.socket.remoteAddress}:${this.socket.remotePort}`)
            }

            if (!this.socket.destroyed) {
                this.socket.destroy();
            }
        });
    }

}

module.exports = { TcpSocketListener }