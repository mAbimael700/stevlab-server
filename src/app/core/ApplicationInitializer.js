const awilix = require("awilix");
const ServiceRegistry = require("@/app/core/ServiceRegistry");
const ServiceManager = require("@/app/core/ServiceManager");
const ProfileConfigurationManager = require("@/app/config/ProfileConfigurationManager");
const DeploymentProfiles = require("@/app/config/DeploymentProfiles");
const DependencyRegister = require("@/app/core/DependencyRegister");

class ApplicationInitializer {
  constructor() {
    this.container = null;
    this.serviceRegistry = new ServiceRegistry();
    this.serviceManager = new ServiceManager();
    this.configManager = new ProfileConfigurationManager();
    this.profile = null;
    this.config = null;
  }

  async initialize(profile, customConfig = {}) {
    this.profile = profile;

    if (!DeploymentProfiles.isValid(profile)) {
      throw new Error(
        `Invalid profile '${profile}'. Available profiles: ${DeploymentProfiles.getAll().join(
          ", "
        )}`
      );
    }

    // Obtener configuración base y aplicar customización
    const baseConfig = this.configManager.getConfiguration(profile);
    this.config = { ...baseConfig, ...customConfig };

    console.log(`🚀 Inicializando aplicación con perfil: ${profile}`);
    console.log(`📋 Configuración:`, this.config);

    this._validateConfiguration();
    this._createContainer();
    await this._registerDependencies();
    await this._startServices();

    this.serviceRegistry.markInitialized();
    console.log("✅ Aplicación inicializada correctamente");

    return this.container;
  }

  _validateConfiguration() {
    if (
      this.config.repositories === "remote" &&
      !this.config.centralServerUrl
    ) {
      throw new Error(
        'centralServerUrl es requerido cuando repositories = "remote"'
      );
    }

    if (this.config.services === "remote" && !this.config.centralServerUrl) {
      throw new Error(
        'centralServerUrl es requerido cuando services = "remote"'
      );
    }
  }

  _createContainer() {
    try {
      this.container = awilix.createContainer({
        injectionMode: awilix.InjectionMode.PROXY,
      });

      // Verificar que el container se creó correctamente
      if (
        !this.container ||
        typeof this.container.hasRegistration !== "function"
      ) {
        throw new Error("Failed to create Awilix container properly");
      }

      console.log("📦 Container creado exitosamente");
    } catch (error) {
      console.error("💥 Error creando container:", error);
      throw error;
    }
  }

  async _registerDependencies() {
    try {
      const register = new DependencyRegister(this.container, this.config);

      register.registerCoreServices();
      register.registerDataServices();
      register.registerBusinessServices();
      register.registerInfrastructureServices();
      register.registerWebServices();

      console.log("📋 Dependencias registradas exitosamente");
    } catch (error) {
      console.error("💥 Error registrando dependencias:", error);
      throw error;
    }
  }

  async _startServices() {
    console.log("🔧 Iniciando servicios...");

    try {
      const servicesToStart = new Map([
        ["tcpServer", this.config.tcpServer],
        ["expressServer", this.config.httpServer],
        ["equipmentConnectionManager", this.config.equipmentManager],
      ]);

      for (const [serviceName, shouldStart] of servicesToStart) {
        if (shouldStart) {
          // Verificar que el container existe y tiene el método has
          if (
            !this.container ||
            typeof this.container.hasRegistration !== "function"
          ) {
            throw new Error("Container no está disponible)");
          }

          if (this.container.hasRegistration(serviceName)) {
            console.log(`🔄 Iniciando servicio: ${serviceName}`);
            const service = this.container.resolve(serviceName);
            await this.serviceManager.startService(serviceName, service);
          } else {
            console.warn(
              `⚠️  Servicio '${serviceName}' no registrado en el container`
            );
          }
        }
      }
    } catch (error) {
      console.error("💥 Error iniciando servicios:", error);
      throw error;
    }
  }

  async shutdown() {
    console.log("🛑 Cerrando aplicación...");
    try {
      await this.serviceManager.stopAllServices();
      console.log("👋 Aplicación cerrada");
    } catch (error) {
      console.error("💥 Error durante shutdown:", error);
      throw error;
    }
  }

  // Getters
  getContainer() {
    return this.container;
  }

  getProfile() {
    return this.profile;
  }

  getConfig() {
    return this.config;
  }

  getServiceRegistry() {
    return this.serviceRegistry;
  }

  getServiceManager() {
    return this.serviceManager;
  }

  isServiceEnabled(serviceName) {
    return this.config[serviceName] === true;
  }

  isServiceRunning(serviceName) {
    return this.serviceManager.isServiceRunning(serviceName);
  }

  getRunningServices() {
    return this.serviceManager.getRunningServices();
  }
}

module.exports = ApplicationInitializer;
