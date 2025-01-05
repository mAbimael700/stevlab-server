const { getMacAddress } = require("../../../lib/getMacAddress");
const { validateParser } = require("../../../lib/validate-parser");
const { verifyDeviceRegistered } = require("../../equipment/equipment-helpers");
const net = require("node:net");


/**
 * Valida si el equipo está registrado en el servidor LIS.
 * @param {net.Socket} socket - El socket de conexión TCP/IP del equipo.
 * @returns {{data:{},parsingData:{parser:function, CHAR_DELIMITER: string},ipAddress: string,macAddress: string} | null} Retorna los datos del equipo o cierra la conexión en caso de no encontrar el equipo
 */
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

    let registeredDevice = verifyDeviceRegistered(currentRemoteMacAddress);
    if (!registeredDevice) {
        console.warn("Equipo no registrado. Conexión cerrada.");
        socket.destroy();
        return;
    }

    registeredDevice.ip_address = currentRemoteIpAddress
    registeredDevice.port = socket.remotePort

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