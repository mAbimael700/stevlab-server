const awilix = require("awilix");
const ServiceRegistry = require("@/app/core/ServiceRegistry");
const BufferDataEmitter = require("@/infra/bufferdatahandler/emitter/BufferDataEmitter");
const BufferDataEvents = require("@/infra/bufferdatahandler/events/BufferDataEvents");
const BufferDataListener = require("@/infra/bufferdatahandler/listener/BufferDataListener");

class DependencyRegister {
  constructor(container, config) {
    this.container = container;
    this.config = config;
  }

  registerCoreServices() {
    this.container.register({
      config: awilix.asValue(this.config),
      serviceRegistry: awilix.asValue(new ServiceRegistry()),
    });
  }

  registerDataServices() {
    if (this.config.database) {
      this._registerLocalRepositories();
    } else if (this.config.repositories === "remote") {
      this._registerRemoteRepositories();
    }
  }

  registerBusinessServices() {
    if (this.config.services === "local") {
      this._registerLocalServices();
    } else if (this.config.services === "remote") {
      this._registerRemoteServices();
    }
  }

  registerInfrastructureServices() {
    if (this.config.tcpServer || this.config.equipmentManager) {
      this._registerBufferStreamManager();
    }

    if (this.config.tcpServer) {
      this._registerTcpServices();
    }

    if (this.config.equipmentManager) {
      this._registerEquipmentManager();
    }

    if (this.config.websocketServer) {
      this._registerWebSocketServer();
    }

    if (this.config.tcpServer) {
      this._registerTcpServer();
    }
  }

  registerWebServices() {
    if (!this.config.httpServer) return;

    this._registerControllers();
    this._registerRouters();
    this._registerHttpServer();
  }

  _registerLocalRepositories() {
    const prisma = require("@/infra/prisma/client/PrismaClient");

    this.container.register({
      prisma: awilix.asValue(prisma),
      equipmentRepository: awilix
        .asClass(require("@/domain/equipment/repository/EquipmentRepository"))
        .scoped(),
      resultRepository: awilix
        .asClass(require("@/domain/result/repository/ResultRepository"))
        .scoped(),
      parameterRepository: awilix
        .asClass(require("@/domain/parameter/repository/ParameterRepository"))
        .scoped(),
      parameterDictionaryRepository: awilix
        .asClass(
          require("@/domain/parameterdictionary/repository/ParameterDictionaryRepository")
        )
        .scoped(),
      equipmentProfileRepository: awilix
        .asClass(
          require("@/domain/equipmentprofile/repository/EquipmentProfileRepository")
        )
        .scoped(),
      resultSendRepository: awilix
        .asClass(require("@/domain/resultsend/repository/ResultSendRepository"))
        .scoped(),
      equipmentConfigurationRepository: awilix
        .asClass(
          require("@/domain/equipmentconfiguration/repository/EquipmentConfigurationRepository")
        )
        .scoped(),
      systemParameterRepository: awilix
        .asClass(
          require("@/domain/systemparameter/repository/SystemParameterRepository")
        )
        .scoped(),
      histogramResultRepository: awilix
        .asClass(require("@/domain/histogramresult/HistogramResultRepository"))
        .scoped(),
    });
  }

  _registerRemoteRepositories() {
    this.container.register({
      httpResultRepository: awilix
        .asClass(require("@/infra/http/repository/HttpResultRepository"))
        .scoped(),
      httpEquipmentRepository: awilix
        .asClass(require("@/infra/http/repository/HttpEquipmentRepository"))
        .scoped(),
    });
  }

  _registerLocalServices() {
    this.container.register({
      histogramService: awilix
        .asClass(require("@/domain/histogramresult/HistogramResultService"))
        .singleton(),
      parameterDictionaryService: awilix
        .asClass(
          require("@/domain/parameterdictionary/service/ParameterDictionaryService")
        )
        .singleton(),
      parameterService: awilix
        .asClass(require("@/domain/parameter/service/ParameterService"))
        .singleton(),
      resultService: awilix
        .asClass(require("@/domain/result/service/ResultService"))
        .singleton(),
      equipmentService: awilix
        .asClass(require("@/domain/equipment/service/EquipmentService"))
        .singleton(),
      equipmentProfileService: awilix
        .asClass(
          require("@/domain/equipmentprofile/service/EquipmentProfileService")
        )
        .singleton(),
      resultSendService: awilix
        .asClass(require("@/domain/resultsend/service/ResultSendService"))
        .singleton(),
      resultSenderService: awilix
        .asClass(require("@/infra/resultsender/service/ResultSenderService"))
        .singleton(),
      dictionaryService: awilix
        .asClass(
          require("@/domain/parameterdictionary/service/ParameterDictionaryService")
        )
        .singleton(),
      histogramResultService: awilix
        .asClass(require("@/domain/histogramresult/HistogramResultService"))
        .singleton(),

        // Services that use repositories from local implementations
      resultSavingService: awilix
        .asClass(require("@/domain/result/service/ResultSavingService"))
        .singleton(),
      equipmentQueryService: awilix
        .asClass(require("@/domain/equipment/service/EquipmentQueryService"))
        .singleton(),
    });
  }

  
  _registerRemoteServices() {
    this.container.register({
      resultSavingService: awilix
        .asClass(require("@/infra/remote/service/ResultSavingService"))
        .singleton(),
      equipmentQueryService: awilix
        .asClass(require("@/infra/remote/service/EquipmentQueryService"))
        .singleton(),
    });
  }

  _registerTcpServices() {
    this.container.register({
      tcpInBoundClientFactory: awilix
        .asClass(
          require("@/infra/connection/tcp/inbound/factory/TcpInBoundClientFactory")
        )
        .singleton(),
    });
  }

  _registerEquipmentManager() {
    this.container.register({
      clientConnectionFactory: awilix
        .asClass(
          require("@/infra/clientconnection/factory/ClientConnectionFactory")
        )
        .singleton(),
      equipmentConnectionManager: awilix
        .asClass(
          require("@/infra/equipmentconnection/manager/EquipmentConnectionManager")
        )
        .singleton(),
    });
  }

  _registerWebSocketServer() {
    this.container.register({
      websocketConnectionManager: awilix
        .asFunction((cradle) => {
          const WebSocketManager = require("@/infra/websocket/manager/WebsocketManager");
          return new WebSocketManager().initialize(
            cradle.expressServer.getServer(),
            {
              pingTimeout: 60000,
              pingInterval: 25000,
            }
          );
        })
        .singleton(),
      io: awilix
        .asFunction((cradle) => {
          const io = cradle.websocketConnectionManager.getIo();
          return io;
        })
        .singleton(),
      websocketEmitter: awilix
        .asFunction((cradle) => {
          const emitter = cradle.websocketConnectionManager.getEmitter();
          return emitter;
        })
        .singleton(),
    });
  }

  _registerTcpServer() {
    this.container.register({
      tcpConnectionValidatorService: awilix
        .asClass(
          require("@/infra/tcpserver/service/ConnectionValidatorService")
        )
        .singleton(),
      tcpServer: awilix
        .asFunction((cradle) => {
          const TcpServer = require("@/infra/tcpserver/server/TcpServer");
          const server = new TcpServer({
            port: process.env.TCP_PORT || 3000,
            tcpInBoundClientFactory: cradle.tcpInBoundClientFactory,
            tcpConnectionValidatorService: cradle.tcpConnectionValidatorService,
            equipmentConnectionManager: cradle.equipmentConnectionManager,
          });

          server.listen();
          return server;
        })
        .singleton(),
    });
  }

  _registerControllers() {
    this.container.register({
      equipmentController: awilix
        .asClass(require("@/infra/http/controllers/EquipmentController"))
        .transient(),
      resultController: awilix
        .asClass(require("@/infra/http/controllers/ResultController"))
        .transient(),
      resultSenderController: awilix
        .asClass(require("@/infra/http/controllers/ResultSenderController"))
        .transient(),
    });
  }

  _registerRouters() {
    this.container.register({
      equipmentRouter: awilix
        .asFunction((cradle) => {
          const EquipmentRouter = require("@/infra/http/routes/EquipmentRouter");
          return new EquipmentRouter({
            equipmentController: cradle.equipmentController,
          }).getRouter();
        })
        .transient(),
      resultRouter: awilix
        .asFunction((cradle) => {
          const ResultRouter = require("@/infra/http/routes/ResultRouter");
          return new ResultRouter({
            resultController: cradle.resultController,
          }).getRouter();
        })
        .transient(),
      resultSenderRouter: awilix
        .asFunction((cradle) => {
          const ResultSenderRouter = require("@/infra/http/routes/ResultSenderRouter");
          return new ResultSenderRouter({
            resultSenderController: cradle.resultSenderController,
          }).getRouter();
        })
        .transient(),
    });
  }

  _registerHttpServer() {
    this.container.register({
      expressServer: awilix
        .asFunction((cradle) => {
          const ExpressServer = require("@/infra/http/server/ExpressServer");
          return {
            start: () =>
              ExpressServer.createAndStart(process.env.HTTP_PORT || 4000, {
                resultRouter: cradle.resultRouter,
                resultSenderRouter: cradle.resultSenderRouter,
                equipmentRouter: cradle.equipmentRouter,
              }),
          };
        })
        .singleton(),
    });
  }

  _registerBufferStreamManager() {
    this.container.register({
      bufferDataEmitter: awilix
        .asFunction(() => BufferDataEmitter.getInstance())
        .singleton(),
      bufferDataEvents: awilix.asClass(BufferDataEvents).singleton(),
      bufferDataListener: awilix.asClass(BufferDataListener).singleton(),
    });
  }
}

module.exports = DependencyRegister;
