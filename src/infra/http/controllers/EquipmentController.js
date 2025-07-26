const EquipmentSchema = require("@/domain/equipment/schema/EquipmentSchema");
const EquipmentProfileResponse = require("@/domain/equipmentprofile/dto/EquipmentProfileResponse");
const {z} = require("zod");
const IdNumberValidator = require("@/infra/http/validators/IdNumberValidator");

class EquipmentController {
    /**
     *
     * @param dependencies
     */
    constructor(dependencies = {}) {

        this.equipmentService = dependencies.equipmentService;
        this.rawResultsService = dependencies.rawResultsService
        this.equipmentProfileService = dependencies.equipmentProfileService;

        this.configureController();
    }

    async getAll(req, res) {
        try {
            const equipments = await this.equipmentService.getAll();
            return res.status(200).json({
                content: equipments
            });
        } catch (error) {
            return res.status(500).json({
                message: "Hubo un error al consultar todos los equipos " + error.message,
            });
        }
    }

    async save(req, res) {
        try {
            const data = req.body;

            const result = EquipmentSchema.validateCreation(data);

            if (result.success) {
                const newEquipment = await this.equipmentService.save(result.data);
                return res.status(201).json(newEquipment);
            }

            return res.status(403)

        } catch (error) {
            return res.status(403).json({
                error: error.message,
                cause: error.cause,
            });
        }
    }


    async getById(req, res) {
        try {
            const {id} = req.params;

            if (!IdNumberValidator.validate(id))
                return res.status(400).json({error: 'Invalid ID'});

            const equipment = await this.equipmentService.getById(id);

            if (equipment) {
                return res.status(200).json(equipment);
            }

            return res.status(404)
        } catch (error) {
            return res.status(404).json({
                message: "No se encontró el equipo con esa Id",
            });
        }
    }


    async updateById(req, res) {
        const {id} = req.params;

        try {
            const result = await this.equipmentService.updateById(id);
            return res.status(200);
        } catch (error) {
            return res.status(403).json({
                error: error.message,
                cause: error.cause,
            });
        }
    }


    async getEquipmentProfiles(req, res) {
        try {
            const equipmentProfiles = await this.equipmentProfileService.getAll();

            return res.status(200).json(
                {
                    content: equipmentProfiles.map(ep => new EquipmentProfileResponse(ep))
                })
        } catch (error) {
            console.log(error)
            return res.status(403).json({
                error: error.message,
                cause: error.cause,
            });
        }
    }

    async deactivateById(req, res) {
        try {
            const {id} = req.params;

            await this.equipmentService.deactivate(id);

            return res.status(200);
        } catch (error) {
            return res.status(403).json({
                message: error.message,
            });
        }
    }


    async getRawResultsByEquipmentId(req, res) {
        try {
            const {id} = req.params
            const rawResults = await this.rawResultsService.getByEquipmentId(id);
            return res.status(200).json({
                content: rawResults,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Hubo un error al consultar todos los equipos.",
            });
        }
    }

    async getLatestRawResultsByEquipmentId(req, res) {
        try {
            const {id} = req.params
            const rawResults = await this.rawResultsService
                .getLatestRawResultsByEquipmentId(id);
            return res.status(200).json({
                content: rawResults,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Hubo un error al consultar todos los equipos.",
            });
        }
    }

    configureController() {
        this.getAll = this.getAll.bind(this);
        this.save = this.save.bind(this);
        this.getById = this.getById.bind(this);
        this.updateById = this.updateById.bind(this)
        this.getEquipmentProfiles = this.getEquipmentProfiles.bind(this);
        this.deactivateById = this.deactivateById.bind(this);
        this.getRawResultsByEquipmentId = this.getRawResultsByEquipmentId.bind(this)
        this.getLatestRawResultsByEquipmentId = this.getLatestRawResultsByEquipmentId.bind(this)
    }
}

module.exports = EquipmentController;
