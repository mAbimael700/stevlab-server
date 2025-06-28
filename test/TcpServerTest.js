const ConnectionValidator = require("../src/Infra/Connections/Tcp/ConnectionValidator");
const TcpClientConnectionCoreFactory = require("../src/infra/Connections/Tcp/TcpClientConnectionCoreFactory");
const TcpInBoundClientFactory = require("../src/infra/Connections/Tcp/TcpInboundClient/TcpInBoundClientFactory");
const EquipmentRepository = require("../src/domain/Equipment/EquipmentRepository");
const EquipmentService = require("../src/domain/Equipment/EquipmentService");
const EquipmentConnectionManager = require("../src/infra/EquipmentConnectionManager/EquimentConnectionManager");
const TcpServer = require("../src/infra/TcpServer/TcpServer");
const prisma = require("../src/infra/PrismaClient/PrismaClient");
const BufferDataEmitter = require("../src/infra/BufferDataHandler/BufferDataEmitter");
const BufferDataListener = require("../src/Infra/BufferDataHandler/BufferDataListener");
const BufferDataEvents = require("../src/infra/BufferDataHandler/BufferDataEvents");
const ResultService = require("../src/domain/Result/ResultService");
const ResultRepository = require("../src/domain/Result/ResultRepository");
const ParameterRepository = require("../src/domain/parameter/ParameterRepository");
const ParameterService = require("../src/domain/parameter/ParameterService");
const HistogramResultService = require("../src/domain/histogramresult/HistogramResultService");
const ClientConnectionFactory = require("../src/infra/ClientConnection/ClientConnectionFactory");

const equipmentRepository = new EquipmentRepository(prisma);
const resultRepository = new ResultRepository(prisma)
const parameterRepository = new ParameterRepository(prisma)
const histogramRepository = new HistogramResultService(prisma)

const equipmentService = new EquipmentService(equipmentRepository);
const parameterService = new ParameterService(parameterRepository)
const histogramService = new HistogramResultService(histogramRepository)
const resultService = new ResultService(resultRepository, parameterService, histogramService)


const connectionValidator = new ConnectionValidator(equipmentService);


const bufferDataEmitter = BufferDataEmitter.getInstance();
const bufferDataEvents = new BufferDataEvents(resultService)
const connectionCoreFactory = new TcpClientConnectionCoreFactory(bufferDataEmitter);

new BufferDataListener(bufferDataEmitter, bufferDataEvents).setup()
const equipmentConnectionManager = new EquipmentConnectionManager(equipmentService, new ClientConnectionFactory(bufferDataEmitter))
const server = new TcpServer(
  3000,
  new TcpInBoundClientFactory(
    connectionValidator,
    equipmentConnectionManager,
    connectionCoreFactory
  )
);
equipmentConnectionManager.initialize()
server.listen();
