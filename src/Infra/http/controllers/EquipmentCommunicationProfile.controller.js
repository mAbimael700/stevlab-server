class EquipmentCommunicationProfileController {
    /**
  *
  * @param {IEquipmentCommunicationProfileService} equipmentCommunicationProfileService
  */
    constructor(equipmentCommunicationProfileService) {
        this.service = equipmentCommunicationProfileService;
        this.configureController()
    }


    async getAll(req, res) {
        try {
            const devices = await this.service.getAll()
            return res.status(200).json({
                status: 200,
                data: devices,
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: "Hubo un error al consultar todos los equipos.",
            });
        }
    }

    configureController() {
        this.getAll = this.getAll.bind(this);
    }
}

module.exports = EquipmentCommunicationProfileController