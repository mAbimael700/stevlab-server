const EquipmentRepository = require("../src/domain/Equipment/EquipmentRepository");
const EquipmentService = require("../src/domain/Equipment/EquipmentService");
const prisma = require("../src/Infra/PrismaClient/PrismaClient");
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
