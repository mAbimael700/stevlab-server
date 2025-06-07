const EquipmentRepository = require("../src/domain/Equipment/EquipmentRepository");
const EquipmentService = require("../src/domain/Equipment/EquipmentService");
const EquipmentConnectionManager = require("../src/domain/EquipmentConnectionManager/EquimentConnectionManager");
const { TcpServer } = require("../src/domain/TcpServer/TcpServer");
const prisma = require("../src/Infra/PrismaClient/PrismaClient");

const repository = new EquipmentRepository(prisma)
const service = new EquipmentService(repository)
const server = new TcpServer(3000, service, new EquipmentConnectionManager(service))
server.listen()
