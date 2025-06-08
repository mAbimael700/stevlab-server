const {
  ConnectionValidator,
} = require("../src/domain/Connections/Tcp/ConnectionValidator");
const TcpClientConnectionCoreFactory = require("../src/domain/Connections/Tcp/TcpClientConnectionCoreFactory");
const TcpInBoundClientFactory = require("../src/domain/Connections/Tcp/TcpInboundClient/TcpInBoundClientFactory");
const EquipmentRepository = require("../src/domain/Equipment/EquipmentRepository");
const EquipmentService = require("../src/domain/Equipment/EquipmentService");
const EquipmentConnectionManager = require("../src/domain/EquipmentConnectionManager/EquimentConnectionManager");
const TcpServer = require("../src/domain/TcpServer/TcpServer");
const prisma = require("../src/Infra/PrismaClient/PrismaClient");

const repository = new EquipmentRepository(prisma);
const service = new EquipmentService(repository);

const connectionValidator = new ConnectionValidator(service);
const connectionCoreFactory = new TcpClientConnectionCoreFactory();

const server = new TcpServer(
  3000,
  new TcpInBoundClientFactory(
    connectionValidator,
    new EquipmentConnectionManager(service),
    connectionCoreFactory
  )
);
server.listen();
