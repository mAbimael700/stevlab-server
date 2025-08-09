const EquipmentRepository = require("../src/domain/equipment/repository/EquipmentRepository");
const EquipmentService = require("../src/domain/equipment/service/EquipmentService");
const EquipmentConnectionManager = require("../src/domain/EquipmentConnectionManager/EquimentConnectionManager");

const prisma = require("../src/infra/prisma/client/PrismaClient");

const repository = new EquipmentRepository(prisma);
const service = new EquipmentService(repository);

const manager = new EquipmentConnectionManager(service);
manager.initialize()
