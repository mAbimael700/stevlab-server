// src/container/container.js
const awilix = require('awilix');

// Importar todas las clases
const prisma = require('@/infra/prisma/client/PrismaClient');

// Repositories
const EquipmentRepository = require('@/domain/equipment/repository/EquipmentRepository');
const ResultRepository = require('@/domain/result/repository/ResultRepository');
const ParameterRepository = require('@/domain/parameter/repository/ParameterRepository');
const ParameterDictionaryRepository = require('@/domain/parameterdictionary/repository/ParameterDictionaryRepository');
const EquipmentProfileRepository = require('@/domain/equipmentprofile/repository/EquipmentProfileRepository');
const ResultSendRepository = require('@/domain/resultsend/repository/ResultSendRepository');
const EquipmentConfigurationRepository = require('@/domain/equipmentconfiguration/repository/EquipmentConfigurationRepository');

// Services
const EquipmentService = require('@/domain/equipment/service/EquipmentService');
const ResultService = require('@/domain/result/service/ResultService');
const ParameterService = require('@/domain/parameter/service/ParameterService');
const HistogramResultService = require('@/domain/histogramresult/service/HistogramResultService');
const ParameterDictionaryService = require('@/domain/parameterdictionary/service/ParameterDictionaryService');
const EquipmentProfileService = require('@/domain/equipmentprofile/service/EquipmentProfileService');
const ResultSendService = require('@/domain/resultsend/service/ResultSendService');
const ResultSenderService = require('@/infra/resultsender/service/ResultSenderService');

// Controllers
const EquipmentController = require('@/infra/http/controllers/EquipmentController');
const ResultController = require('@/infra/http/controllers/ResultController');
const ResultSenderController = require('@/infra/http/controllers/ResultSenderController');

// Routers
const EquipmentRouter = require('@/infra/http/routes/EquipmentRouter');
const ResultRouter = require('@/infra/http/routes/ResultRouter');
const ResultSenderRouter = require('@/infra/http/routes/ResultSenderRouter');

// Infrastructure
const BufferDataEmitter = require('@/infra/bufferdatahandler/emitter/BufferDataEmitter');
const BufferDataListener = require('@/infra/bufferdatahandler/listener/BufferDataListener');
const BufferDataEvents = require('@/infra/bufferdatahandler/events/BufferDataEvents');
const ClientConnectionFactory = require('@/infra/clientconnection/factory/ClientConnectionFactory');
const EquipmentConnectionManager = require('@/infra/equipmentconnection/manager/EquipmentConnectionManager');
const ConnectionValidator = require('@/infra/tcpserver/service/ConnectionValidatorService');
const TcpServer = require('@/infra/tcpserver/server/TcpServer');
const TcpInBoundClientFactory = require('@/infra/connection/tcp/inbound/factory/TcpInBoundClientFactory');
const ExpressServer = require('@/infra/http/server/ExpressServer');

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
});

// Registrar dependencias
container.register({
    // Database
    prisma: awilix.asValue(prisma),

    // Repositories - Scoped para que sean singleton por request
    equipmentRepository: awilix.asClass(EquipmentRepository).scoped(),
    resultRepository: awilix.asClass(ResultRepository).scoped(),
    parameterRepository: awilix.asClass(ParameterRepository).scoped(),
    parameterDictionaryRepository: awilix.asClass(ParameterDictionaryRepository).scoped(),
    equipmentProfileRepository: awilix.asClass(EquipmentProfileRepository).scoped(),
    resultSendRepository: awilix.asClass(ResultSendRepository).scoped(),
    equipmentConfigurationRepository: awilix.asClass(EquipmentConfigurationRepository).scoped(),

    // Services - Singleton para toda la app
    // Si HistogramResultService actúa como servicio y no como repository
    histogramService: awilix.asClass(HistogramResultService).singleton(),
    parameterDictionaryService: awilix.asClass(ParameterDictionaryService).singleton(),
    parameterService: awilix.asClass(ParameterService).singleton(),
    resultService: awilix.asClass(ResultService).singleton(),
    equipmentService: awilix.asClass(EquipmentService).singleton(),
    equipmentProfileService: awilix.asClass(EquipmentProfileService).singleton(),
    resultSendService: awilix.asClass(ResultSendService).singleton(),
    resultSenderService: awilix.asClass(ResultSenderService).singleton(),

    // Controllers - Transient (nueva instancia cada vez)
    equipmentController: awilix.asClass(EquipmentController).transient(),
    resultController: awilix.asClass(ResultController).transient(),
    resultSenderController: awilix.asClass(ResultSenderController).transient(),

    // Routers - Transient
    equipmentRouter: awilix.asFunction((cradle) =>
        new EquipmentRouter({ equipmentController: cradle.equipmentController }).getRouter()
    ).transient(),
    resultRouter: awilix.asFunction((cradle) =>
        new ResultRouter({ resultController: cradle.resultController }).getRouter()
    ).transient(),
    resultSenderRouter: awilix.asFunction((cradle) =>
        new ResultSenderRouter({ resultSenderController: cradle.resultSenderController }).getRouter()
    ).transient(),

    // Infrastructure - Singleton
    bufferDataEmitter: awilix.asFunction(() => BufferDataEmitter.getInstance()).singleton(),
    bufferDataEvents: awilix.asClass(BufferDataEvents).singleton(),
    bufferDataListener: awilix.asClass(BufferDataListener).singleton(),
    clientConnectionFactory: awilix.asClass(ClientConnectionFactory).singleton(),
    equipmentConnectionManager: awilix.asClass(EquipmentConnectionManager).singleton(),
    tcpConnectionValidator: awilix.asClass(ConnectionValidator).singleton(),
    tcpInBoundClientFactory: awilix.asClass(TcpInBoundClientFactory).singleton(),

    // Servers - Singleton
    tcpServer: awilix.asFunction((cradle) => new TcpServer(
        3000,
        cradle.tcpInBoundClientFactory,
        cradle.tcpConnectionValidator,
        cradle.equipmentConnectionManager
    )).singleton(),

    expressServer: awilix.asFunction((cradle) => ({
        start: () => ExpressServer.createAndStart(4000, {
            resultRouter: cradle.resultRouter,
            resultSenderRouter: cradle.resultSenderRouter,
            equipmentRouter: cradle.equipmentRouter
        })
    })).singleton()
});

module.exports = container;