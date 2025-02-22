const { Equipment } = require("../../domain/Equipment");
class EquipmentHelpers {

    constructor() {
        /**
        * @type {Map<string, Equipment>}
        */
        this.equipmentsOnServer = new Map();
    }

    setEquipments(newEquipments) {
        // Convertir los datos en instancias de la clase Equipment
        const equipments = newEquipments.map(equipment => {
            const equipment = new Equipment(
                equipment.name,
                equipment.id,
                equipment.connectionType,
                equipment.brand
            );


            if (equipment.configuration) {
                // Asignar propiedades adicionales si existen
                if (equipment.configuration.remoteDir) equipment.setRemoteDir(equipment.remoteDir);
                if (equipment.configuration.baudRate) equipment.setBaudRate(equipment.baudRate);
                if (equipment.configuration.ipAddress) equipment.setIpAddress(equipment.ipAddress);
                if (equipment.configuration.port) equipment.setPort(equipment.port);
                if (equipment.configuration.macAddress) equipment.setMacAddress(equipment.macAddress);
            }

            if (equipment.area) equipment.setArea(equipment.area);

            return equipment;
        });


        equipments.forEach(equipment => {
            this.equipmentsOnServer.set(equipment.getId(), equipment);
        });
    }

    getEquipments() {
        return this.equipmentsOnServer;
    }

    getEquipmentById(id) {
        return this.equipmentsOnServer.get(id);
    }

    /**
     * Valida si el equipo está registrado en el servidor LIS.
     * @param {string} macAddress - La dirección MAC del equipo a verificar.
     * @returns {Device | undefined} Retorna los datos del equipo o falso en caso de no encontrar el equipo
     */
    verifyDeviceRegistered(macAddress) {
        // Buscar el equipo en el mapa
        for (const [_, equipment] of equipmentsOnServer) {
            if (equipment.getMacAddress() === macAddress) {
                return equipment; // Retorna el equipo si se encuentra
            }
        }

        // Si no se encuentra el equipo
        console.warn(
            `El equipo con dirección MAC (${macAddress}) no está registrado.`
        );

    }
}



module.exports = {
    EquipmentHelpers
};
