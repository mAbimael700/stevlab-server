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

async function createTCPConnection(device) {
    const port = device.port;
    const host = device.ip_address;
    const macAddress = device.mac_address;

    if (getTCPConnection(macAddress)) {
        console.log(`Conexión existente detectada para ${device.name}.`);
        return; // Evita crear múltiples clientes para el mismo dispositivo
    }

    const client = new net.Socket();

    const connect = () => {
        console.log(`Intentando conectar al equipo ${device.name} en ${host}:${port}...`);

        try {
            client.connect(port, host, async () => {
                console.log(`Conexión exitosa con ${device.name} en ${host}:${port}.`);
                setTCPConnection(macAddress, client);
                removeReconnectInterval(macAddress);

                const device = await deviceValidation(client)
                const bufferList = new bl();
                // Configurar eventos
                client.on("data", (data) =>
                    handleDataEvent(client, data, device.data, device.parsingData, bufferList)
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
        }

    };

    const scheduleReconnect = () => {
        if (!getReconnectInterval(macAddress)) {
            console.log(`Programando reconexión para ${device.name} en 5 segundos.`);
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
    } else {
        console.log(`No se encontró una conexión TCP activa para ${macAddress}`);
    }
}

async function connectTCP(device) {
    const macAddress = device.mac_address;

    try {
        if (getTCPConnection(macAddress)) {
            console.log(`Cerrando conexión existente para ${device.name}.`);
            closeTCP(macAddress);
        }

        createTCPConnection(device);
    } catch (error) {
        console.error(
            `Error al conectar TCP con ${device.name} (${device.ip_address}): ${error.message}`
        );
    }
}

module.exports = { connectTCP, closeTCP };
