const ClinicalDataModelFactory = require("@/domain/clinicaldatamodel/factory/ClinicalDataModelFactory");

class BufferDataEvents {
  constructor({resultService}) {
    this.resultService = resultService;
  }

  /**
   *
   * @param {{mesage:string, equipment:EquipmentDto}} param0
   */
  async receivedMessage({ message, equipment }) {
    const { type } = equipment.equipmentProfile.communicationProfile;
    const clinicalModel = ClinicalDataModelFactory.create(type);
    const result = clinicalModel.transform(message);
    await this.resultService.saveStreamReceivedResult(result, equipment.id);
  }
}
module.exports = BufferDataEvents;
