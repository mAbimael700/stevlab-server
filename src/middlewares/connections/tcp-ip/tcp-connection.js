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

async function createTCPConnection(equipment) {
    const port = equipment.port;
    const host = equipment.ip_address;
    const idDevice = equipment.id_device;

    if (getTCPConnection(idDevice)) {
        console.log(`Conexión existente detectada para ${equipment.name}.`);
        return; // Evita crear múltiples clientes para el mismo dispositivo
    }

    const client = new net.Socket();

    const connect = () => {
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
            let msg = ``;

            switch (err.code) {
                case "ECONNREFUSED":
                    msg = `Conexión rechazada a ${host}:${port}.`;
                    break;
                case "ETIMEDOUT":
                    msg = `Tiempo de espera agotado para ${host}:${port}.`;
                    break;
                case "EHOSTUNREACH":
                    msg = `No se puede alcanzar el host ${host}.`;
                    break;
                default:
                    msg = `Hubo un error en la conexión con el equipo ${equipment.name}: ${err.message}`;
            }

            msg += ` Verifica el equipo ${equipment.name}.`

            console.error(msg);
            emitStatusDevice(
                { connection_status: "disconnected", error: err.code },
                equipment,
                msg,
                true
            );

            scheduleReconnect();
        });

        client.connect(port, host, async () => {
            console.log(`Conexión exitosa con ${equipment.name} en ${host}:${port}.`);
            emitStatusDevice(
                { connection_status: "connected" },
                equipment,
                `Conexión exitosa con ${equipment.name} en ${host}:${port}.`
            );

            setTCPConnection(idDevice, client);
            removeReconnectInterval(idDevice);

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

    const scheduleReconnect = () => {
        const interval = getReconnectInterval(idDevice)

        if (!interval) {
            const msg = `Programando reconexión para ${equipment.name} en 5 segundos.`
            console.info(msg);
            emitStatusDevice(
                { connection_status: "reconnecting", last_connection: new Date() },
                equipment,
                msg
            );

            setReconnectInterval(
                idDevice,
                setInterval(() => {
                    if (!getTCPConnection(idDevice)) {
                        console.info(`Reintentando conexión para ${equipment.name}...`);
                        client.removeAllListeners(); // Limpia eventos antiguos
                        connect();
                    }
                }, 5000)
            );
        }
    };

    try {
        connect();
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = { createTCPConnection };
