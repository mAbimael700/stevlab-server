const net = require('node:net');
const { handleConnectionEvent } = require('./EventsHandler');
class TCPServer {
    /**
     * 
     */
    constructor(equipment) {
        this.equipment = equipment
    }

    async create() {
        try {
            const client = new net.Socket();
            this.connect(client);
            return client
        } catch (error) {
            console.error(error.message);
        }
    }


    /**
    * 
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
            removeReconnectInterval(id);
            client.connecting = false
            const device = await deviceValidation(client);
            const bufferList = new bl();

            // Configurar eventos
            client.on("data", (data) => {
                handleDataEvent(
                    client,
                    data,
                    this.equipment,
                    device.parsingData,
                    bufferList
                );
            });

            client.on("close", () =>
                handleConnectionEvent(client, this.equipment, "close", scheduleReconnect)
            );
        });
    }
}

module.exports = { TCPServer }