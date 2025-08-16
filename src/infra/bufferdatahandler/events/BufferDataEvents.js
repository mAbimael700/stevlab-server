const ClinicalDataModelFactory = require("@/domain/clinicaldatamodel/factory/ClinicalDataModelFactory");
const {ResultSchema} = require("@/domain/result/schema/ResultSchema");

class BufferDataEvents {
    constructor({resultService}) {
        this.resultService = resultService;
    }

    /**
     *
     * @param {{mesage:string, equipment:EquipmentDto}} param
     */
    async receivedMessage({message, equipment}) {
        try {
            const {type} = equipment.equipmentProfile.communicationProfile;
            const clinicalModel = ClinicalDataModelFactory.create(type);
            const result = clinicalModel.transform(message);

            const validationResponse = ResultSchema.safeValidate(result);

            if (!validationResponse.success) {
                throw new Error(`Result not passed the validation: ${validationResponse.error.message}`);
            }

            await this.resultService.saveStreamReceivedResult(validationResponse.data, equipment.id);
        } catch (e) {
            console.log(`Error processing message in equipment ${equipment.name}: ${e.message}`)
        }

    }
}

module.exports = BufferDataEvents;
