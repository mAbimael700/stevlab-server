const ClinicalDataModelFactory = require("../../domain/clinicaldatamodel/ClinicalDataModelFactory");
const EquipmentDto = require("../../domain/equipment/EquipmentDto");

class BufferDataEvents {
  constructor(resultService) {
    this.resultService = resultService;
  }

  /**
   *
   * @param {{mesage:string, equipment:EquipmentDto}} param0
   */
  receivedMessage({ message, equipment }) {
    const { type } = equipment.equipmentProfile.communicationProfile;
    const clinicalModel = ClinicalDataModelFactory.create(type);
    const result = clinicalModel.transform(message);
    this.resultService.saveStreamReceivedResult(result, equipment.id);
  }
}
module.exports = BufferDataEvents;
