const {Router} = require("express");

class ResultSenderRouter {
    constructor(dependencies = {}) {
        this.router = Router();
        this.controller = dependencies.resultSenderController;

        this.validateDependencies();
        this.setupRoutes();
    }

    /**
     * Valida que las dependencias requeridas estén disponibles
     */
    validateDependencies() {
        if (!this.controller) {
            throw new Error("ResultSenderController is required");
        }
    }

    /**
     * Configura todas las rutas del router
     */
    setupRoutes() {
        this.setupResultRoutes();
    }

    /**
     * Configura las rutas relacionadas con dispositivos
     */
    setupResultRoutes() {
        this.router.get('/', this.controller.getAll)
        this.router.get("/latest", this.controller.getLatest);
        this.router.get("/:resultSendId", this.controller.getBySendResultId);

        this.router.get('/results/:resultId', this.controller.getByResultId);
        this.router.post("/results/:resultId", this.controller.sendResultById);
    }

    /**
     * Obtiene la instancia del router configurado
     * @returns {Router} - Router de Express configurado
     */
    getRouter() {
        return this.router;
    }

    /**
     * Método estático para crear el router con dependencias
     * @param {Object} dependencies - Dependencias requeridas
     * @returns {Router} - Router configurado
     */
    static create(dependencies) {
        const resultSenderRouter = new ResultSenderRouter(dependencies);
        return resultSenderRouter.getRouter();
    }
}

module.exports = ResultSenderRouter;
