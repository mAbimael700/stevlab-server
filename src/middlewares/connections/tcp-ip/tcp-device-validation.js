const { getMacAddress } = require("../../../lib/getMacAddress");
const { validateParser } = require("../../../lib/validate-buffer");
const { verifyDevices } = require("../../equipment/equipment-helpers");

async function deviceValidation(socket) {

    // Validar dirección MAC y verificar dispositivo
    const currentRemoteIpAddress = socket.remoteAddress.split(":")[3];
    const currentRemoteMacAddress = await getMacAddress(currentRemoteIpAddress);

    if (!currentRemoteMacAddress) {
        console.warn(
            `No se encontró la dirección MAC para el equipo con la dirección IP ${currentRemoteIpAddress}. Cerrando conexión.`
        );
        socket.destroy();
        return;
    }

    const registeredDevice = verifyDevices(currentRemoteMacAddress);
    if (!registeredDevice) {
        console.warn("Equipo no registrado. Conexión cerrada.");
        socket.destroy();
        return;
    }

    registeredDevice.ip_address = currentRemoteIpAddress

    // Devuelve la función parser que le corresponde al equipo y el carácter delimitador
    const deviceParsingData = validateParser({
        id_device: registeredDevice.id,
    })


    if (!deviceParsingData) {
        console.warn("El equipo no tiene un parser registrado. Conexión cerrada.");
        socket.destroy();
        return;
    }

    return { data: registeredDevice, parsingData: deviceParsingData, ipAddress: currentRemoteIpAddress, macAddress: currentRemoteMacAddress }
}

module.exports = {
    deviceValidation
}