const net = require('node:net');
const { handleConnectionEvent, handleDataEvent } = require('./EventsHandler');
const { ValidateTcpConnection } = require('./ValidateTcpConnection');

class TCPClient {
    /**
     * 
     * @param {Equipment} equipment 
     * @param {EquipmentRepository} equipmentRepository 
     * @param {ReconnectManager} reconnectManager 
     */
    constructor(equipment, equipmentRepository, reconnectionManager) {
        this.equipment = equipment
        this.validateTcpConnection = new ValidateTcpConnection(equipmentRepository)
        this.reconnectionManager = reconnectionManager
    }

    async build() {
        try {
            const client = new net.Socket();
            this.connect(client);
            return client
        } catch (error) {
            console.error(error.message);
        }
    }

    /**
    * @param {net.Socket} client 
    */
    connect(client) {
        const port = this.equipment.configuration.port;
        const host = this.equipment.configuration.ipAddress;
        const id = this.equipment.id;

        const connectingMsg = `Intentando conectar al equipo ${this.equipment.name} en ${host}:${port}...`
        console.log(connectingMsg);

        emitStatusDevice(
            { connection_status: "connecting" },
            this.equipment,
            connectingMsg
        );

        client.removeAllListeners(); // Limpia cualquier listener anterior

        // Configurar el manejador de errores antes de llamar a connect
        client.on("error", (err) => {
            handleConnectionEvent(client, this.equipment, "error", scheduleReconnect, err)
        });

        client.connect(port, host, async () => {
            console.log(`Conexión exitosa con ${this.equipment.name} en ${host}:${port}.`);
            emitStatusDevice(
                { connection_status: "connected" },
                this.equipment,
                `Conexión exitosa con ${this.equipment.name} en ${host}:${port}.`
            );
            reconnectManager.removeReconnectInterval(id);
            client.connecting = false
            const validate = await this.validateTcpConnection.validateConnection(client);

            if (!validate) {
                throw new Error("El equipo conectado no está registrado en el servidor.")
            }

            this.equipment.setConnection(client)
            const bufferList = new bl();

            // Configurar eventos
            client.on("data", (data) => {
                handleDataEvent(
                    client,
                    data,
                    this.equipment,
                    bufferList
                );
            });

            client.on("close", () =>
                handleConnectionEvent(client, this.equipment, "close", this.scheduleReconnect)
            );
        });
    }

    /**
    * 
    * @param {Equipment} equipment 
    */
    scheduleReconnect(equipment, maxRetries = 5) {
        const idDevice = equipment.id;
        const client = equipment.connection;
        const interval = this.reconnectionManager.getReconnectInterval(idDevice);

        if (!interval) {
            let retryCount = 0; // Contador de intentos de reconexión

            const msg = `Programando reconexión para ${equipment.name} en 5 segundos.`;
            console.info(msg);
            emitStatusDevice(
                { connection_status: "reconnecting", last_connection: new Date() },
                equipment,
                msg
            );

            client.connecting = true

            if (client) {
                const reconnectInterval = setInterval(() => {
                    retryCount++; // Incrementar el contador de intentos

                    if (retryCount > maxRetries) {
                        // Si se excede el límite de intentos
                        clearInterval(reconnectInterval); // Detener el intervalo
                        this.reconnectionManager.removeReconnectInterval(idDevice); // Limpiar el intervalo almacenado

                        const errorMsg = `Se excedió el límite de ${maxRetries} intentos de reconexión para ${equipment.name}.`;
                        console.error(errorMsg);
                        emitStatusDevice(
                            { connection_status: "disconnected", last_connection: new Date() },
                            equipment,
                            errorMsg
                        );
                        return;
                    }

                    console.info(`Reintentando conexión para ${equipment.name} (Intento ${retryCount}/${maxRetries})...`);
                    client.removeAllListeners(); // Limpia eventos antiguos
                    this.connect(client); // Intentar reconectar
                }, 5000);

                this.reconnectionManager.setReconnectInterval(idDevice, reconnectInterval); // Almacenar el intervalo
            }
        }
    };
}

module.exports = { TCPClient }