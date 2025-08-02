const BaseRepository = require("@/domain/repository/BaseRepositories");

class EquipmentConfigurationRepository extends BaseRepository {

    constructor(prisma) {
        super("EquipmentConfiguration", prisma);
    }

    /**
     * Actualiza la configuración de un equipo
     * @param {BigInt} equipmentId - ID del equipo
     * @param {Object} data - Datos para actualizar
     * @returns {Promise<Object>}
     */
    async update(equipmentId, data) {
        try {
            return this.prisma.equipmentConfiguration.update({
                where: {equipment_id: equipmentId},
                data
            });
        } catch (e) {
            throw new Error(`Error actualizando la configuración del equipo ${equipmentId}: ${e.message}`);
        }
    }


}

module.exports = EquipmentConfigurationRepository