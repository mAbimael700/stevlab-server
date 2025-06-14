const ConnectionValidator = require("../src/Infra/Connections/Tcp/ConnectionValidator");
const TcpClientConnectionCoreFactory = require("../src/Infra/Connections/Tcp/TcpClientConnectionCoreFactory");
const TcpInBoundClientFactory = require("../src/Infra/Connections/Tcp/TcpInboundClient/TcpInBoundClientFactory");
const EquipmentRepository = require("../src/domain/Equipment/EquipmentRepository");
const EquipmentService = require("../src/domain/Equipment/EquipmentService");
const EquipmentConnectionManager = require("../src/Infra/EquipmentConnectionManager/EquimentConnectionManager");
const TcpServer = require("../src/Infra/TcpServer/TcpServer");
const prisma = require("../src/Infra/PrismaClient/PrismaClient");
const BufferDataEmitter = require("../src/infra/BufferDataHandler/BufferDataEmitter");

const repository = new EquipmentRepository(prisma);
const service = new EquipmentService(repository);

const connectionValidator = new ConnectionValidator(service);
const bufferDataEmitter = new BufferDataEmitter();
const connectionCoreFactory = new TcpClientConnectionCoreFactory(bufferDataEmitter);

const server = new TcpServer(
  3000,
  new TcpInBoundClientFactory(
    connectionValidator,
    new EquipmentConnectionManager(service),
    connectionCoreFactory
  )
);
server.listen();
