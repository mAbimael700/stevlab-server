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
    this.router.get("/servers/tcp", this.controller.getTcpServerInformation);
    this.router.post("/servers/tpc/start", this.controller.inicializeTcpServer);
    this.router.delete("/servers/tcp/stop", this.controller.stopTcpServer);
    
    this.router.get("/networks/tcp/interfaces", this.controller.getTcpNetworkInterfaces);
    
    this.router.get("/com/ports",this.controller.getComPorts);
    
    this.router.post("/equipments", this.controller.inicialitzeAllEquipmentConnections);
    this.router.delete("/equipments", this.controller.closeAllEquipmentConnections);
    
    this.router.get("/equipments/profiles", this.controller.getEquipmentProfiles);
    
    this.router.get("/equipments/:id", this.controller.getById);
    this.router.post("/equipments/:id", this.controller.inicializeEquipmentConnectionById);
    this.router.patch("/equipments/:id", this.controller.updateEquipmentConnectionById);
    this.router.delete("/equipments/:id", this.controller.closeEquipmentConnectionById);
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
