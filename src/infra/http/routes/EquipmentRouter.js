const {Router} = require("express");

class EquipmentRouter {
    constructor({equipmentController}) {
        this.router = Router();
        this.controller = equipmentController;

        this.validateDependencies();
        this.setupRoutes();
    }

    /**
     * Valida que las dependencias requeridas estén disponibles
     */
    validateDependencies() {
        if (!this.controller) {
            throw new Error("EquipmentController is required");
        }
    }

    /**
     * Configura todas las rutas del router
     */
    setupRoutes() {
        this.setupEquipmentRoutes();
    }

    /**
     * Configura las rutas relacionadas con dispositivos
     */
    setupEquipmentRoutes() {
        // Rutas de dispositivos
        this.router.get("/profiles", this.controller.getEquipmentProfiles);
        this.router.get("/", this.controller.getAll);
        this.router.post("/", this.controller.save);

        this.router.get("/:id", this.controller.getById);
        this.router.patch("/:id", this.controller.updateById);
        this.router.delete("/:id", this.controller.deactivateById);

        /* this.router.get("/:id/results/raw", this.controller.getRawResultsByEquipmentId);
        this.router.get("/:id/results/raw/lastest", this.controller.getLatestRawResultsByEquipmentId); */
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
        const equipmentRouter = new EquipmentRouter(dependencies);
        return equipmentRouter.getRouter();
    }
}

module.exports = EquipmentRouter;
