const net = require("node:net");
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
const { getMacAddress } = require("../../../lib/getMacAddress");
const { verifyDevices } = require("../../equipment/equipment-helpers");
const { validateParser } = require("../../../lib/validate-buffer");

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
        client.connect(port, host, async () => {
            console.log(`Conexión exitosa con ${device.name} en ${host}:${port}.`);
            setTCPConnection(macAddress, client);
            removeReconnectInterval(macAddress);

            // Validar dirección MAC y verificar dispositivo
            const currentRemoteIpAddress = client.remoteAddress.split(":").pop();
            const currentRemoteMacAddress = await getMacAddress(currentRemoteIpAddress);

            if (!currentRemoteMacAddress) {
                console.warn(
                    `No se encontró la dirección MAC para ${device.name}. Cerrando conexión.`
                );
                client.destroy();
                return;
            }

            const registeredDevice = verifyDevices(currentRemoteMacAddress);
            if (!registeredDevice) {
                console.warn("Equipo no registrado. Conexión cerrada.");
                client.destroy();
                return;
            }

            // Devuelve la función parser que le corresponde al equipo y el carácter delimitador
            const deviceData = validateParser({
                id_device: registeredDevice.id,
            });

            console.log(deviceData);

            // Configurar eventos
            client.on("data", (data) =>
                handleDataEvent(client, data, registeredDevice, deviceData)
            );
            client.on("close", () =>
                handleCloseEvent(client, macAddress, scheduleReconnect)
            );
            client.on("error", (err) =>
                handleErrorEvent(client, macAddress, err, scheduleReconnect)
            );
        });
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
