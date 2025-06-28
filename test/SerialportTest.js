const ConnectionValidator = require("../src/Infra/Connections/Tcp/ConnectionValidator");

const EquipmentRepository = require("../src/domain/Equipment/EquipmentRepository");
const EquipmentService = require("../src/domain/Equipment/EquipmentService");
const EquipmentConnectionManager = require("../src/infra/EquipmentConnectionManager/EquimentConnectionManager");
const prisma = require("../src/infra/PrismaClient/PrismaClient");
const BufferDataEmitter = require("../src/infra/BufferDataHandler/BufferDataEmitter");
const BufferDataListener = require("../src/Infra/BufferDataHandler/BufferDataListener");
const BufferDataEvents = require("../src/infra/BufferDataHandler/BufferDataEvents");
const ResultService = require("../src/domain/Result/ResultService");
const ResultRepository = require("../src/domain/Result/ResultRepository");
const ParameterRepository = require("../src/domain/parameter/ParameterRepository");
const ParameterService = require("../src/domain/parameter/ParameterService");
const HistogramResultService = require("../src/domain/histogramresult/HistogramResultService");
const SerialClientCoreFactory = require("../src/Infra/Connections/Serial/SerialClientCoreFactory");
const ClientConnectionFactory = require("../src/Infra/ClientConnection/ClientConnectionFactory");

const equipmentRepository = new EquipmentRepository(prisma);
const resultRepository = new ResultRepository(prisma);
const parameterRepository = new ParameterRepository(prisma);
const histogramRepository = new HistogramResultService(prisma);

const equipmentService = new EquipmentService(equipmentRepository);
const parameterService = new ParameterService(parameterRepository);
const histogramService = new HistogramResultService(histogramRepository);
const resultService = new ResultService(
  resultRepository,
  parameterService,
  histogramService
);

const bufferDataEmitter = BufferDataEmitter.getInstance();
const bufferDataEvents = new BufferDataEvents(resultService);

const bufferDataListener = new BufferDataListener(
  bufferDataEmitter,
  bufferDataEvents
).setup();

const clientConnectionFactory = new ClientConnectionFactory(bufferDataEmitter);

new EquipmentConnectionManager(equipmentService, clientConnectionFactory)
  .initialize()
  .then(() => {
    console.log("Equipos inicializados...");
  })
  .catch((e) => {
    console.log("Error al inicializar los equipos", e);
    throw new Error(e);
  });
