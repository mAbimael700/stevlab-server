class EquipmentProfileService {
    constructor({equipmentProfileRepository}) {
        this.equipmentProfileRepository = equipmentProfileRepository;
    }

    async getAll(){
        return this.equipmentProfileRepository.findAll();
    }
}

module.exports = EquipmentProfileService