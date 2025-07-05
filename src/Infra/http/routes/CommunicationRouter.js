const { Router } = require("express");

class CommunicationRouter {
  constructor(dependencies = {}) {
    this.router = Router();
    this.controller = dependencies.communicationController;

    this.validateDependencies();
    this.setupRoutes();
  }

  /**
   * Valida que las dependencias requeridas estén disponibles
   */
  validateDependencies() {
    if (!this.controller) {
      throw new Error("DevicesController is required");
    }
  }

  /**
   * Configura todas las rutas del router
   */
  setupRoutes() {
    this.setupCommunicationRouter();
  }

  /**
   * Configura las rutas relacionadas con dispositivos
   */
  setupCommunicationRouter() {
    // Rutas de dispositivos
    this.router.get("/", this.controller.getAll);
    this.router.get(
      "/equipments/profiles",
      this.controller.getEquipmentProfiles
    );
    this.router.get("/:id", this.controller.getById);
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
    const communicationRouter = new CommunicationRouter(dependencies);
    return communicationRouter.getRouter();
  }
}

module.exports = CommunicationRouter;
