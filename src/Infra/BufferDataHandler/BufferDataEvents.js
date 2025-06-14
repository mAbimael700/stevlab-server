const ClinicalDataModelFactory = require("../../domain/ClinicalDataModel/ClinicalDataModelFactory");
const EquipmentDto = require("../../domain/Equipment/EquipmentDto");

class BufferDataEvents {
  constructor(resultService) {
    this.resultService = resultService;
  }

  /**
   *
   * @param {{mesage:string, equipment:EquipmentDto}} param0
   */
  receivedMessage({ mesage, equipment }) {
    const clinicalModel = ClinicalDataModelFactory.create(
      equipment.equipmentProfile.communicationProfile.type
    );
    const result = clinicalModel.transform(mesage);
    this.resultService.add(result, equipment.id);
  }
}
module.exports = BufferDataEvents;
