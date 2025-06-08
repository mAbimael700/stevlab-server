const EquipmentRepository = require("../src/domain/Equipment/EquipmentRepository");
const EquipmentService = require("../src/domain/Equipment/EquipmentService");
const EquipmentConnectionManager = require("../src/domain/EquipmentConnectionManager/EquimentConnectionManager");

const prisma = require("../src/Infra/PrismaClient/PrismaClient");

const repository = new EquipmentRepository(prisma);
const service = new EquipmentService(repository);

const manager = new EquipmentConnectionManager(service);
manager.initialize()
