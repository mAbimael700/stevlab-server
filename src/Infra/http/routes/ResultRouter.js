const { Router } = require("express");

class ResultRouter {
  constructor(dependencies = {}) {
    this.router = Router();
    this.controller = dependencies.resultController;

    this.validateDependencies();
    this.setupRoutes();
  }

  /**
   * Valida que las dependencias requeridas estén disponibles
   */
  validateDependencies() {
    if (!this.controller) {
      throw new Error("ResultController is required");
    }
  }

  /**
   * Configura todas las rutas del router
   */
  setupRoutes() {
    this.setupDeviceRoutes();
  }

  /**
   * Configura las rutas relacionadas con dispositivos
   */
  setupDeviceRoutes() {
    // Rutas de dispositivos
    this.router.get("/", this.controller.getAll);
    this.router.get("/lastest", this.controller.getAll);
    this.router.get("/:id", this.controller.getById);
    this.router.post("/:id/send", this.controller.getEquipmentProfiles);
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
    const communicationRouter = new ResultRouter(dependencies);
    return communicationRouter.getRouter();
  }
}

module.exports = ResultRouter;
