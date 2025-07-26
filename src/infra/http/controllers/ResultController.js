const ResultResponse = require("@/domain/result/dto/ResultResponse");
const ParameterResponse = require("@/domain/parameter/dto/ParameterResponse");

class ResultController {
    /**
     *
     * @param dependencies
     */
    constructor(dependencies = {}) {
        this.resultService = dependencies.resultSendService;
        this.parameterService = dependencies.parameterService
        this.configureController();
    }

    async getAll(req, res) {
        try {
            const results = await this.resultService.getAll();
            return res.status(200).json({
                content: results.map(result => new ResultResponse(result)),
            });
        } catch (error) {
            return res.status(error.code ?? 500).json({
                message: error.message ?? "Hubo un error al consultar todos los resultados.",
            });
        }
    }

    async getLatest(req, res) {
        try {
            const results = await this.resultService.getLatest();
            return res.status(200).json({
                content: results.map(result => new ResultResponse(result)),
            });
        } catch (error) {
            return res.status(error.code ?? 500).json({
                message: error.message ?? "Hubo un error al consultar los resultados.",
            });
        }
    }


    async getById(req, res) {
        try {
            const {resultId} = req.params;
            const result = await this.resultService.getById(resultId);

            if (!result) {
                throw new Error("No se encontró el resultado con esa Id",
                    {code: 404});
            }

            return res.status(200).json(new ResultResponse(result));
        } catch (error) {
            return res.status(error.code ?? 500).json({
                message: "No se encontró el resultado con esa Id",
            });
        }
    }


    async getResultParameters(req, res) {
        try {
            const {resultId} = req.params;
            const parameters = await this.parameterService
                .getActiveByResultId(resultId);

            return res.status(200).json({
                content:
                    parameters
                        .map(p => new ParameterResponse(p))
            });
        } catch (error) {
            return res.status(error.code ?? 403).json({
                message: error.message,
            });
        }
    }

    async getResultParameterHistory(req, res) {
        try {
            const {resultId, description} = req.params;

            const parameters = await this.parameterService
                .getParameterHistory(resultId, description);

            return res.status(200).json({
                content:
                    parameters
                        .map(p => new ParameterResponse(p))
            });
        } catch (error) {
            return res.status(error.code ?? 403).json({
                message: error.message,
            });
        }
    }


    async setResultParameterActive(req, res) {
        try {
            const {parameterId} = req.params;
            await this.parameterService.activate(parameterId);

            return res.status(200);
        } catch (error) {
            return res.status(403).json({
                message: error.message,
            });
        }
    }

    async setResultParameterInactive(req, res) {
        try {
            const {parameterId} = req.params;
            await this.parameterService.deactivate(parameterId);

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
        this.getLatest = this.getLatest.bind(this);
        this.getResultParameters = this.getResultParameters.bind(this)
        this.setResultParameterActive = this.setResultParameterActive.bind(this)
        this.setResultParameterInactive = this.setResultParameterInactive.bind(this)
    }
}

module.exports = ResultController;
