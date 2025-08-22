const EquipmentSchema = require("@/domain/equipment/schema/EquipmentSchema");

class EquipmentConnectionLoader {
    constructor(equipmentService) {
        this.equipmentService = equipmentService;
    }

    /**
     * Carga todos los equipos desde la base de datos
     * @returns {Promise<EquipmentDto[]>}
     */
    async loadAll() {
        try {
            const equipments = await this.equipmentService.getAll();
            return this.validateEquipments(equipments);
        } catch (error) {
            console.log(error)
            throw new Error(`Error loading equipments: ${error.message}`);
        }
    }

    /**
     * Valida los equipos usando el schema
     * @param {Object[]} equipments
     * @returns {EquipmentDto[]}
     */
    validateEquipments(equipments) {
        const validEquipments = [];
        const errors = [];

        equipments.forEach((equipment, index) => {
            const result = EquipmentSchema.validate(equipment);
            if (result.success) {
                validEquipments.push(result.data);
            } else {
                errors.push({
                    index,
                    equipment: equipment.id || `equipment-${index}`,
                    error: result.error
                });
            }
        });

        if (errors.length > 0) {
            console.warn('Some equipments failed validation:', errors);
        }

        return validEquipments;
    }
}

module.exports = EquipmentConnectionLoader;