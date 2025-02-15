const { Device } = require("../../domain/Device");
const {
    formatMacAddressWithSeparators,
} = require("../../utils/formatMacAddressWithSeparators");

/**
 * @type {Map<string, Device>}
 */
let equipmentsOnServer = new Map();

function setEquipments(newEquipments) {

    // Convertir los datos en instancias de la clase Equipment
    const equipments = newEquipments.map(equipmentData => {
        const equipment = new Device(
            equipmentData.name,
            equipmentData.id,
            equipmentData.connectionType
        );

        // Asignar propiedades adicionales si existen
        if (equipmentData.brand) equipment.setBrand(equipmentData.brand);
        if (equipmentData.remoteDir) equipment.setRemoteDir(equipmentData.remoteDir);
        if (equipmentData.baudRate) equipment.setBaudRate(equipmentData.baudRate);
        if (equipmentData.ipAddress) equipment.setIpAddress(equipmentData.ipAddress);
        if (equipmentData.port) equipment.setPort(equipmentData.port);
        if (equipmentData.macAddress) equipment.setMacAddress(equipmentData.macAddress);
        if (equipmentData.area) equipment.setArea(equipmentData.area);

        return equipment;
    });


    equipments.forEach(equipment => {
        equipmentsOnServer.set(equipment.getId(), equipment);
    });
}

function getEquipments() {
    return equipmentsOnServer;
}

function getEquipmentById(id) {
    return equipmentsOnServer.get(id);
}

/**
 * Valida si el equipo está registrado en el servidor LIS.
 * @param {string} macAddress - La dirección MAC del equipo a verificar.
 * @returns {Device | undefined} Retorna los datos del equipo o falso en caso de no encontrar el equipo
 */
function verifyDeviceRegistered(macAddress) {
    // Buscar el equipo en el mapa
    for (const [_, equipment] of equipmentsOnServer) {
        if (equipment.getMacAddress() === macAddress) {
            return equipment; // Retorna el equipo si se encuentra
        }
    }

    // Si no se encuentra el equipo
    console.warn(
        `El equipo con dirección MAC (${formatMacAddressWithSeparators(
            macAddress
        )}) no está registrado.`
    );

}

module.exports = {
    setEquipments,
    getEquipments,
    getEquipmentById,
    verifyDeviceRegistered,
};
