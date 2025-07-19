require('module-alias/register');
const prisma = require("../src/infra/prismaclient/PrismaClient");
const EquipmentRepository = require("../src/domain/equipment/repository/EquipmentRepository");
const ResultRepository = require("../src/domain/result/repository/ResultRepository");
const ParameterRepository = require("../src/domain/parameter/repository/ParameterRepository");
const ParameterDictionaryRepository = require("@/domain/parameterdictionary/repository/ParameterDictionaryRepository");
const EquipmentProfileRepository = require("@/domain/equipmentprofile/repository/EquipmentProfileRepository");

const EquipmentService = require("../src/domain/equipment/service/EquipmentService");
const ResultService = require("../src/domain/result/service/ResultService");
const ParameterService = require("../src/domain/parameter/service/ParameterService");
const HistogramResultService = require("../src/domain/histogramresult/HistogramResultService");
const ParameterDictionaryService = require("@/domain/parameterdictionary/service/ParameterDictionaryService");

const BufferDataEmitter = require("../src/infra/bufferdatahandler/BufferDataEmitter");
const BufferDataListener = require("../src/infra/bufferdatahandler/BufferDataListener");
const BufferDataEvents = require("../src/infra/bufferdatahandler/BufferDataEvents");

const ClientConnectionFactory = require("../src/infra/clientconnection/ClientConnectionFactory");
const EquipmentConnectionManager = require("../src/infra/equipmentconnection/manager/EquipmentConnectionManager");

const ConnectionValidator = require("../src/infra/connection/tcp/ConnectionValidator");
const TcpServer = require("../src/infra/tcpserver/TcpServer");
const TcpInBoundClientFactory = require("../src/infra/connection/tcp/tcpinboundclient/TcpInBoundClientFactory");
const TcpClientConnectionCoreFactory = require("../src/infra/connection/tcp/TcpClientConnectionCoreFactory");

const equipmentRepository = new EquipmentRepository(prisma);
const equipmentProfileRepository = new EquipmentProfileRepository(prisma);
const resultRepository = new ResultRepository(prisma)
const parameterRepository = new ParameterRepository(prisma)
const parameterDictionaryRepository = new ParameterDictionaryRepository(prisma)
const histogramRepository = new HistogramResultService(prisma)

const dictionaryService = new ParameterDictionaryService({
    parameterRepository,
    parameterDictionaryRepository,
})
const equipmentService = new EquipmentService({
    equipmentRepository,
    equipmentProfileRepository
});
const parameterService = new ParameterService({
    parameterRepository,
    parameterDictionaryRepository,
    dictionaryService
})
const histogramService = new HistogramResultService(histogramRepository)
const resultService = new ResultService(resultRepository, parameterService, histogramService)


const bufferDataEmitter = BufferDataEmitter.getInstance();
const bufferDataEvents = new BufferDataEvents(resultService)

const clientConnectionFactory = new ClientConnectionFactory(bufferDataEmitter)
const equipmentConnectionManager = new EquipmentConnectionManager(
    {
        equipmentService,
        clientConnectionFactory
    })

const tcpConnectionCoreFactory = new TcpClientConnectionCoreFactory(bufferDataEmitter);
const tcpConnectionValidator = new ConnectionValidator(equipmentService);

const tcpServer = new TcpServer(
    3000,
    new TcpInBoundClientFactory(
        tcpConnectionValidator,
        equipmentConnectionManager,
        tcpConnectionCoreFactory
    )
);

/** Estos son los servicios principales de mi aplicación,
 * también se le irán agregando mas como
 *  un servidor http con controladores e inyectado servicios,
 *  servidor websocket con inyección de dependencias de emisores y receptores y estos de servicios
 */
new BufferDataListener(bufferDataEmitter, bufferDataEvents).setup()
equipmentConnectionManager.initialize()
tcpServer.listen();
