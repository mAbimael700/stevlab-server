class EquipmentProfileService {
    constructor(dependencies) {
        this.equipmentProfileRepository = dependencies.equipmentProfileRepository;
    }

    async getAll(){
        return this.equipmentProfileRepository.findAll();
    }
}

module.exports = EquipmentProfileService