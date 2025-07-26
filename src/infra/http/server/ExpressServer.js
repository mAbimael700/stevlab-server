const http = require("node:http");
const path = require("node:path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

class ExpressServer {
  constructor(dependencies = {}) {
    this.app = express();
    this.server = null;
    this.port = null;
    this.isInitialized = false;

    // Inyección de dependencias para los routers
    this.routers = {
      resultRouter: dependencies.resultRouter,
      resultSenderRouter: dependencies.resultSenderRouter,
      equipmentRouter: dependencies.equipmentRouter,
    };

    // Configuración por defecto
    this.config = {
      staticPath: dependencies.staticPath || path.join(process.cwd(), "dist"),
      indexPath:
        dependencies.indexPath ||
        path.join(process.cwd(), "dist", "index.html"),
      loggerFormat: dependencies.loggerFormat || "dev",
      ...dependencies.config,
    };
  }

  /**
   * Configura los middlewares básicos del servidor
   */
  setupMiddleware() {
    // Middleware logger de las peticiones http al servidor
    this.app.use(morgan(this.config.loggerFormat));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.disable("x-powered-by");
  }

  /**
   * Configura las rutas de la API
   */
  setupRoutes() {
    const { routers } = this;

    // Validar que los routers requeridos estén disponibles
    this.validateRouters();

    // Configurar rutas de la API
    this.app.use("/api/equipments", routers.equipmentRouter);
    this.app.use("/api/results", routers.resultRouter);
    this.app.use("/api/sends", routers.resultSenderRouter);
  }

  /**
   * Configura el servicio de archivos estáticos y SPA routing
   */
  setupStaticFiles() {
    // Sirve los archivos estáticos desde la carpeta build/dist
    this.app.use(express.static(this.config.staticPath));
  }

  /**
   * Valida que todos los routers requeridos estén disponibles
   */
  validateRouters() {
    const requiredRouters = [
      "resultRouter",
      "equipmentRouter",
      "resultSenderRouter",
    ];

    const missingRouters = requiredRouters.filter(
      (routerName) => !this.routers[routerName]
    );

    if (missingRouters.length > 0) {
      throw new Error(`Missing required routers: ${missingRouters.join(", ")}`);
    }
  }

  /**
   * Inicializa el servidor con todas sus configuraciones
   * @param {number} port - Puerto en el que escuchará el servidor
   * @returns {Promise<http.Server>} - Servidor HTTP creado
   */
  async initialize(port) {
    if (this.isInitialized) {
      throw new Error("Server is already initialized");
    }

    this.port = port;

    try {
      // Configurar middlewares
      this.setupMiddleware();

      // Configurar rutas
      this.setupRoutes();

      // Configurar archivos estáticos
      this.setupStaticFiles();

      // Crear servidor HTTP
      this.server = http.createServer(this.app);

      this.isInitialized = true;

      return this.server;
    } catch (error) {
      console.error(error)
      throw new Error(`Failed to initialize server: ${error.message}`);
    }
  }

  /**
   * Inicia el servidor en el puerto especificado
   * @returns {Promise<http.Server>} - Servidor HTTP iniciado
   */
  async start() {
    if (!this.isInitialized) {
      throw new Error("Server must be initialized before starting");
    }

    return new Promise((resolve, reject) => {
      this.server.listen(this.port, (error) => {
        if (error) {
          reject(new Error(`Failed to start server: ${error.message}`));
          return;
        }

        console.log(
          `HTTP Server accessible http://localhost:${this.port}/`
        );

        resolve(this.server);
      });
    });
  }

  /**
   * Detiene el servidor
   * @returns {Promise<void>}
   */
  async stop() {
    if (!this.server) {
      return;
    }

    return new Promise((resolve, reject) => {
      this.server.close((error) => {
        if (error) {
          reject(new Error(`Failed to stop server: ${error.message}`));
          return;
        }

        console.log("Servidor detenido correctamente");
        this.isInitialized = false;
        resolve();
      });
    });
  }

  /**
   * Obtiene la instancia de Express
   * @returns {express.Application}
   */
  getApp() {
    return this.app;
  }

  /**
   * Obtiene el servidor HTTP
   * @returns {http.Server|null}
   */
  getServer() {
    return this.server;
  }

  /**
   * Obtiene el puerto del servidor
   * @returns {number|null}
   */
  getPort() {
    return this.port;
  }

  /**
   * Verifica si el servidor está inicializado
   * @returns {boolean}
   */
  isServerInitialized() {
    return this.isInitialized;
  }

  /**
   * Método estático para crear y inicializar el servidor en un solo paso
   * @param {number} port - Puerto del servidor
   * @param {Object} dependencies - Dependencias requeridas
   * @returns {Promise<ExpressServer>} - Instancia del servidor inicializada
   */
  static async createAndStart(port, dependencies) {
    const server = new ExpressServer(dependencies);
    await server.initialize(port);
    await server.start();
    return server;
  }
}

module.exports = ExpressServer;
