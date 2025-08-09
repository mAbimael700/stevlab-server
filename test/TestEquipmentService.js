const EquipmentRepository = require("../src/domain/equipment/repository/EquipmentRepository");
const EquipmentService = require("../src/domain/equipment/service/EquipmentService");
const prisma = require("../src/infra/prisma/client/PrismaClient");
const repository = new EquipmentRepository(prisma);
const service = new EquipmentService(repository);

async function getAll() {
  try {
    const equipments = await service.getAll();
    console.log(equipments)
  } catch (error) {
    console.log(error);
  }
}

getAll();
