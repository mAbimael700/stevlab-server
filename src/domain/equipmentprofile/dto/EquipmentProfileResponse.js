class EquipmentProfileResponse {
    /**
     *
     * @param equipmentProfile
     */
    constructor(equipmentProfile) {
        this.id = Number(equipmentProfile.id);
        this.name = equipmentProfile.name;
        this.communicationType = equipmentProfile.communication_type;
        this.active = equipmentProfile.active;
    }
}

module.exports = EquipmentProfileResponse