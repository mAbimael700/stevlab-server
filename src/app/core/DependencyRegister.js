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
            serviceRegistry: awilix.asValue(new ServiceRegistry())
        });
    }

    registerDataServices() {
        if (this.config.database) {
            this._registerLocalRepositories();
        } else if (this.config.repositories === 'remote') {
            this._registerRemoteRepositories();
        }
    }

    _registerLocalRepositories() {
        const prisma = require('@/infra/prisma/client/PrismaClient');

        this.container.register({
            prisma: awilix.asValue(prisma),
            equipmentRepository: awilix.asClass(require('@/domain/equipment/repository/EquipmentRepository')).scoped(),
            resultRepository: awilix.asClass(require('@/domain/result/repository/ResultRepository')).scoped(),
            parameterRepository: awilix.asClass(require('@/domain/parameter/repository/ParameterRepository')).scoped(),
            parameterDictionaryRepository: awilix.asClass(require('@/domain/parameterdictionary/repository/ParameterDictionaryRepository')).scoped(),
            equipmentProfileRepository: awilix.asClass(require('@/domain/equipmentprofile/repository/EquipmentProfileRepository')).scoped(),
            resultSendRepository: awilix.asClass(require('@/domain/resultsend/repository/ResultSendRepository')).scoped(),
            equipmentConfigurationRepository: awilix.asClass(require('@/domain/equipmentconfiguration/repository/EquipmentConfigurationRepository')).scoped()
        });
    }

    _registerRemoteRepositories() {
        this.container.register({
            equipmentRepository: awilix.asClass(require('@/infra/http/repositories/HttpEquipmentRepository')).scoped(),
            resultRepository: awilix.asClass(require('@/infra/http/repositories/HttpResultRepository')).scoped(),
            parameterRepository: awilix.asClass(require('@/infra/http/repositories/HttpParameterRepository')).scoped()
        });
    }

    registerBusinessServices() {
        if (this.config.services === 'local') {
            this._registerLocalServices();
        } else if (this.config.services === 'remote') {
            this._registerRemoteServices();
        }
    }

    _registerLocalServices() {
        this.container.register({
            histogramService: awilix.asClass(require('@/domain/histogramresult/HistogramResultService')).singleton(),
            parameterDictionaryService: awilix.asClass(require('@/domain/parameterdictionary/service/ParameterDictionaryService')).singleton(),
            parameterService: awilix.asClass(require('@/domain/parameter/service/ParameterService')).singleton(),
            resultService: awilix.asClass(require('@/domain/result/service/ResultService')).singleton(),
            equipmentService: awilix.asClass(require('@/domain/equipment/service/EquipmentService')).singleton(),
            equipmentProfileService: awilix.asClass(require('@/domain/equipmentprofile/service/EquipmentProfileService')).singleton(),
            resultSendService: awilix.asClass(require('@/domain/resultsend/service/ResultSendService')).singleton(),
            resultSenderService: awilix.asClass(require('@/infra/resultsender/service/ResultSenderService')).singleton()
        });
    }

    _registerRemoteServices() {
        this.container.register({
            equipmentService: awilix.asClass(require('@/infra/http/services/HttpEquipmentService')).singleton(),
            resultService: awilix.asClass(require('@/infra/http/services/HttpResultService')).singleton(),
            parameterService: awilix.asClass(require('@/infra/http/services/HttpParameterService')).singleton()
        });
    }

    registerInfrastructureServices() {
        if (this.config.tcpServer || this.config.equipmentManager) {
            this._registerBufferStreamManager();
            this._registerTcpServices();
        }

        if (this.config.equipmentManager) {
            this._registerEquipmentManager();
        }

        if (this.config.tcpServer) {
            this._registerTcpServer();
        }
    }

    _registerTcpServices() {
        this.container.register({
            tcpInBoundClientFactory: awilix.asClass(require('@/infra/connection/tcp/inbound/factory/TcpInBoundClientFactory')).singleton()
        });
    }

    _registerEquipmentManager() {
        this.container.register({
            clientConnectionFactory: awilix.asClass(require('@/infra/clientconnection/factory/ClientConnectionFactory')).singleton(),
            equipmentConnectionManager: awilix.asClass(require('@/infra/equipmentconnection/manager/EquipmentConnectionManager')).singleton()
        });
    }


    _registerTcpServer() {
        this.container.register({
            tcpConnectionValidator: awilix.asClass(require('@/infra/tcpserver/service/ConnectionValidatorService')).singleton(),
            tcpServer: awilix.asFunction((cradle) => {
                const TcpServer = require('@/infra/tcpserver/server/TcpServer');
                return new TcpServer(
                    process.env.TCP_PORT || 3000,
                    cradle.tcpInBoundClientFactory,
                    cradle.tcpConnectionValidator,
                    cradle.equipmentConnectionManager
                );
            }).singleton()
        });
    }

    registerWebServices() {
        if (!this.config.httpServer) return;

        this._registerControllers();
        this._registerRouters();
        this._registerHttpServer();
    }

    _registerControllers() {
        this.container.register({
            equipmentController: awilix.asClass(require('@/infra/http/controllers/EquipmentController')).transient(),
            resultController: awilix.asClass(require('@/infra/http/controllers/ResultController')).transient(),
            resultSenderController: awilix.asClass(require('@/infra/http/controllers/ResultSenderController')).transient()
        });
    }

    _registerRouters() {
        this.container.register({
            equipmentRouter: awilix.asFunction((cradle) => {
                const EquipmentRouter = require('@/infra/http/routes/EquipmentRouter');
                return new EquipmentRouter({equipmentController: cradle.equipmentController}).getRouter();
            }).transient(),
            resultRouter: awilix.asFunction((cradle) => {
                const ResultRouter = require('@/infra/http/routes/ResultRouter');
                return new ResultRouter({resultController: cradle.resultController}).getRouter();
            }).transient(),
            resultSenderRouter: awilix.asFunction((cradle) => {
                const ResultSenderRouter = require('@/infra/http/routes/ResultSenderRouter');
                return new ResultSenderRouter({resultSenderController: cradle.resultSenderController}).getRouter();
            }).transient()
        });
    }

    _registerHttpServer() {
        this.container.register({
            expressServer: awilix.asFunction((cradle) => {
                const ExpressServer = require('@/infra/http/server/ExpressServer');
                return {
                    start: () => ExpressServer.createAndStart(
                        process.env.HTTP_PORT || 4000,
                        {
                            resultRouter: cradle.resultRouter,
                            resultSenderRouter: cradle.resultSenderRouter,
                            equipmentRouter: cradle.equipmentRouter
                        }
                    )
                };
            }).singleton()
        });
    }

    _registerBufferStreamManager() {
        this.container.register({
            bufferDataEmitter: awilix.asFunction(() => BufferDataEmitter.getInstance()).singleton(),
            bufferDataEvents: awilix.asClass(BufferDataEvents).singleton(),
            bufferDataListener: awilix.asClass(BufferDataListener).singleton()
        });
    }
}

module.exports = DependencyRegister;