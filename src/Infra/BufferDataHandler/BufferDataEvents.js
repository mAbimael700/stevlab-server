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
  receivedMessage({ message, equipment }) {
    const type = equipment.equipmentProfile.communicationProfile.type;
    console.log(type);

    const clinicalModel = ClinicalDataModelFactory.create(type);
    const result = clinicalModel.transform(message);
    this.resultService.saveStreamReceivedResult(result, equipment.id);
  }
}
module.exports = BufferDataEvents;
