const { Device } = require("../../../domain/Device")
const net = require("node:net");
const bl = require("bl");
const { setTCPConnection, getTCPConnection } = require("./tcp-manager");
const {
    setReconnectInterval,
    getReconnectInterval,
    removeReconnectInterval,
} = require("./tcp-reconnect-manager");
const {
    handleDataEvent,
    handleConnectionEvent,
} = require("./tcp-events-handler");
const { deviceValidation } = require("./tcp-device-validation");
const {
    emitStatusDevice,
} = require("../../../lib/websocket/emit-device-status");

/**
 * 
 * @param {Device} equipment 
 * @returns 
 */
async function createTCPConnection(equipment) {
    const idDevice = equipment.id_device;

    if (getTCPConnection(idDevice)) {
        console.log(`Conexión existente detectada para ${equipment.name}.`);
        return; // Evita crear múltiples clientes para el mismo dispositivo
    }

    try {
        const client = new net.Socket();
        setTCPConnection(idDevice, client)
        connect(client, equipment);
    } catch (error) {
        console.error(error.message);
    }
}

/**
 * 
 * @param {net.Socket} client 
 * @param {Device} equipment 
 */

const connect = (client, equipment) => {
    const port = equipment.port;
    const host = equipment.ip_address;
    const idDevice = equipment.id_device;

    console.log(
        `Intentando conectar al equipo ${equipment.name} en ${host}:${port}...`
    );
    emitStatusDevice(
        { connection_status: "connecting" },
        equipment,
        `Intentando conectar al equipo ${equipment.name} en ${host}:${port}...`
    );

    client.removeAllListeners(); // Limpia cualquier listener anterior

    // Configurar el manejador de errores antes de llamar a connect
    client.on("error", (err) => {
        handleConnectionEvent(client, equipment, "error", scheduleReconnect, err)
    });

    client.connect(port, host, async () => {
        console.log(`Conexión exitosa con ${equipment.name} en ${host}:${port}.`);
        emitStatusDevice(
            { connection_status: "connected" },
            equipment,
            `Conexión exitosa con ${equipment.name} en ${host}:${port}.`
        );
        removeReconnectInterval(idDevice);
        client.connecting = false
        const device = await deviceValidation(client);
        const bufferList = new bl();

        // Configurar eventos
        client.on("data", (data) => {
            handleDataEvent(
                client,
                data,
                equipment,
                device.parsingData,
                bufferList
            );
        });

        client.on("close", () =>
            handleConnectionEvent(client, equipment, "close", scheduleReconnect)
        );
    });
};


/**
 * 
 * @param {Device} equipment 
 */
const scheduleReconnect = (equipment, maxRetries = 5) => {
    const idDevice = equipment.id_device;
    const client = getTCPConnection(idDevice);
    const interval = getReconnectInterval(idDevice);

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
                    setReconnectInterval(idDevice, null); // Limpiar el intervalo almacenado

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
                connect(client, equipment); // Intentar reconectar
            }, 5000);

            setReconnectInterval(idDevice, reconnectInterval); // Almacenar el intervalo
        }
    }
};




module.exports = { createTCPConnection };
