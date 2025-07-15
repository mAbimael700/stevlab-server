const prisma = require("../src/infra/prismaclient/PrismaClient");
const EquipmentRepository = require("../src/domain/equipment/EquipmentRepository");
const ResultRepository = require("../src/domain/result/ResultRepository");
const ParameterRepository = require("../src/domain/parameter/ParameterRepository");

const EquipmentService = require("../src/domain/equipment/EquipmentService");
const ResultService = require("../src/domain/result/ResultService");
const ParameterService = require("../src/domain/parameter/ParameterService");
const HistogramResultService = require("../src/domain/histogramresult/HistogramResultService");


const BufferDataEmitter = require("../src/infra/bufferdatahandler/BufferDataEmitter");
const BufferDataListener = require("../src/infra/bufferdatahandler/BufferDataListener");
const BufferDataEvents = require("../src/infra/bufferdatahandler/BufferDataEvents");

const ClientConnectionFactory = require("../src/infra/clientconnection/ClientConnectionFactory");
const EquipmentConnectionManager = require("../src/infra/equipmentconnectionmanager/EquimentConnectionManager");

const ConnectionValidator = require("../src/infra/connection/tcp/ConnectionValidator");
const TcpServer = require("../src/infra/tcpserver/TcpServer");
const TcpInBoundClientFactory = require("../src/infra/connection/tcp/tcpinboundclient/TcpInBoundClientFactory");
const TcpClientConnectionCoreFactory = require("../src/infra/connection/tcp/TcpClientConnectionCoreFactory");

const equipmentRepository = new EquipmentRepository(prisma);
const resultRepository = new ResultRepository(prisma)
const parameterRepository = new ParameterRepository(prisma)
const histogramRepository = new HistogramResultService(prisma)

const equipmentService = new EquipmentService(equipmentRepository);
const parameterService = new ParameterService(parameterRepository)
const histogramService = new HistogramResultService(histogramRepository)
const resultService = new ResultService(resultRepository, parameterService, histogramService)


const bufferDataEmitter = BufferDataEmitter.getInstance();
const bufferDataEvents = new BufferDataEvents(resultService)

const equipmentConnectionManager = new EquipmentConnectionManager(equipmentService, new ClientConnectionFactory(bufferDataEmitter))

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
