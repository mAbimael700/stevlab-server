const net = require("node:net");
const bl = require("bl");
const {
    setTCPConnection,
    getTCPConnection,
    removeTCPConnection
} = require("./tcp-manager");
const {
    setReconnectInterval,
    getReconnectInterval,
    removeReconnectInterval
} = require("./tcp-reconnect-manager");
const {
    handleDataEvent,
    handleCloseEvent,
    handleErrorEvent
} = require("./tcp-events-handler");
const { deviceValidation } = require("./tcp-device-validation");
const { emitStatusDevice } = require("../../../lib/websocket/emit-device-status");

async function createTCPConnection(equipment) {
    const port = equipment.port;
    const host = equipment.ip_address;
    const macAddress = equipment.mac_address;

    if (getTCPConnection(macAddress)) {
        console.log(`Conexión existente detectada para ${equipment.name}.`);
        return; // Evita crear múltiples clientes para el mismo dispositivo
    }

    const client = new net.Socket();

    const connect = () => {
        console.log(`Intentando conectar al equipo ${equipment.name} en ${host}:${port}...`);
        emitStatusDevice(
            { connection_status: "connecting" },
            equipment,
            `Intentando conectar al equipo ${equipment.name} en ${host}:${port}...`
        )

        try {
            client.connect(port, host, async () => {
                console.log(`Conexión exitosa con ${equipment.name} en ${host}:${port}.`);
                emitStatusDevice(
                    { connection_status: "connected" },
                    equipment,
                    `Conexión exitosa con ${equipment.name} en ${host}:${port}.`
                )
                setTCPConnection(macAddress, client);
                removeReconnectInterval(macAddress);

                
                const device = await deviceValidation(client)
                const bufferList = new bl();            
                // Configurar eventos
                client.on("data", (data) =>
                    {
                        handleDataEvent(client, data, equipment, device.parsingData, bufferList)
                    }
                );
                client.on("close", () =>
                    handleCloseEvent(client, macAddress, scheduleReconnect)
                );
                client.on("error", (err) =>
                    handleErrorEvent(client, macAddress, err, scheduleReconnect)
                );
            });
        } catch (error) {
            console.error(error.message)
            emitStatusDevice(
                { connection_status: undefined },
                equipment,
                `Conexión fallida con el equipo ${equipment.name} en ${host}:${port}: ${error.message}`,
                true
            )
        }

    };

    const scheduleReconnect = () => {
        if (!getReconnectInterval(macAddress)) {
            console.log(`Programando reconexión para ${equipment.name} en 5 segundos.`);
            emitStatusDevice(
                { connection_status: "reconnecting", last_connection: new Date(), },
                equipment,
                `Programando reconexión para ${equipment.name} en ${host}:${port} en 5 segundos...`
            )
            setReconnectInterval(
                macAddress,
                setInterval(() => {
                    if (!getTCPConnection(macAddress)) {
                        connect();
                    }
                }, 5000)
            );
        }
    };


    connect();

}

function closeTCP(macAddress) {
    const client = getTCPConnection(macAddress);
    if (client) {
        console.log(`Cerrando conexión TCP para ${macAddress}.`);
        client.destroy();
        removeTCPConnection(macAddress);
        removeReconnectInterval(macAddress);
        emitStatusDevice(
            { connection_status: "disconnected", last_connection: new Date(), },
            device,
            `Cerrando conexión TCP`
        )
    } else {
        console.log(`No se encontró una conexión TCP activa para ${macAddress}`);
    }
}

async function connectTCP(device) {
    const macAddress = device.mac_address;

    try {
        if (getTCPConnection(macAddress)) {
            console.log(`Cerrando conexión existente para ${device.name}.`);
            emitStatusDevice(
                { connection_status: "disconnected", last_connection: new Date(), },
                device,
                `Cerrando conexión existente para ${device.name} en ${host}:${port}.`
            )
            closeTCP(macAddress);
        }

        createTCPConnection(device);
    } catch (error) {
        console.error(
            `Error al conectar TCP con ${device.name} (${device.ip_address}): ${error.message}`
        );
        emitStatusDevice(
            { connection_status: undefined },
            device,
            `Error al conectar TCP con ${device.name} (${device.ip_address}): ${error.message}`,
            true
        )
    }
}

module.exports = { connectTCP, closeTCP };
