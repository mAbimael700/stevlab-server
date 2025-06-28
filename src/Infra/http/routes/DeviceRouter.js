const { Router } = require("express");

class DevicesRouter {
  constructor(dependencies = {}) {
    this.router = Router();
    this.controller = dependencies.devicesController;
    
    this.validateDependencies();
    this.setupRoutes();
  }

  /**
   * Valida que las dependencias requeridas estén disponibles
   */
  validateDependencies() {
    if (!this.controller) {
      throw new Error('DevicesController is required');
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
    this.router.get("/", this.controller.getDevicesOnServer);
    this.router.get("/profiles", this.controller.getDeviceProfiles);
    this.router.get("/:id", this.controller.getDeviceById);
    this.router.patch("/", this.controller.save);
    this.router.delete("/:id", this.controller.remove);
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
    const devicesRouter = new DevicesRouter(dependencies);
    return devicesRouter.getRouter();
  }
}

module.exports = {
  DevicesRouter
};