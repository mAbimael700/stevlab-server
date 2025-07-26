const IdNumberValidator = require("@/infra/http/validators/IdNumberValidator");

class ResultSenderController {
    /**
     *
     * @param dependencies
     */
    constructor(dependencies = {}) {
        this.resultSenderService = dependencies.resultSenderService;
        this.configureController();
    }

    async getAll(req, res) {
        try {
            const sends = await this.resultSenderService.getAll();
            return res.status(200).json({
                content: sends,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Hubo un error al consultar todos los envios.",
            });
        }
    }

    async getLatest(req, res) {
        try {
            const sends = await this.resultSenderService.getLatest();
            return res.status(200).json({
                content: sends,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Hubo un error al consultar todos los envios.",
            });
        }
    }


    async getById(req, res) {
        try {
            const {resultSendId} = req.params;

            if (!IdNumberValidator.validate(resultSendId))
                return res.status(400).json({error: 'Invalid ID'});

            const send = await this.resultSenderService.getById(resultSendId);

            return res.status(200).json(send);
        } catch (error) {
            return res.status(404).json({
                message: "No se encontró el envio con esa Id",
            });
        }
    }

    async getByFolio(req, res) {
        try {
            const {folio} = req.params;

            const send = await this.resultSenderService.getByResultFolio(folio);
            return res.status(200).json(send);
        } catch (error) {
            return res.status(404).json({
                message: "No se encontró el resultado con ese folio",
            });
        }
    }

    async getByResultId(req, res) {
        try {
            const {resultId} = req.params;

            if (!IdNumberValidator.validate(resultId))
                return res.status(400).json({error: 'Invalid ID'});

            const send = await this.resultSenderService.getByResultId(resultId);
            return res.status(200).json(send);
        } catch (error) {
            return res.status(404).json({
                message: "No se encontró el resultado con ese folio",
            });
        }
    }

    async getBySendResultId(req, res) {
        try {
            const {sendResultId} = req.params;

            if (!IdNumberValidator.validate(sendResultId))
                return res.status(400).json({error: 'Invalid ID'});

            const send = await this.resultSenderService.getBySendResultId(sendResultId);
            return res.status(200).json(send);
        } catch (error) {
            return res.status(404).json({
                message: "No se encontró el resultado con ese folio",
            });
        }
    }

    async sendResultById(req, res) {
        try {
            const {resultId} = req.params;

            if (!IdNumberValidator.validate(resultId))
                return res.status(400).json({error: 'Invalid ID'});

            await this.resultSenderService.sendResultById(resultId);
            return res.status(200);
        } catch (error) {
            return res.status(403).json({
                message: error.message,
            });
        }
    }

    configureController() {
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.getByFolio = this.getByFolio.bind(this);
        this.getLatest = this.getLatest.bind(this);
        this.sendResultById = this.sendResultById.bind(this)
    }
}

module.exports = ResultSenderController;
