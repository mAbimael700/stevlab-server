const EquipmentRepository = require("../src/domain/equipment/repository/EquipmentRepository");
const EquipmentService = require("../src/domain/equipment/service/EquipmentService");
const EquipmentConnectionManager = require("../src/infra/equipmentconnection/manager/EquipmentConnectionManager");
const prisma = require("../src/infra/prismaclient/PrismaClient");
const BufferDataEmitter = require("../src/infra/bufferdatahandler/BufferDataEmitter");
const BufferDataListener = require("../src/infra/bufferdatahandler/BufferDataListener");
const BufferDataEvents = require("../src/infra/bufferdatahandler/BufferDataEvents");
const ResultService = require("../src/domain/result/service/ResultService");
const ResultRepository = require("../src/domain/result/repository/ResultRepository");
const ParameterRepository = require("../src/domain/parameter/repository/ParameterRepository");
const ParameterService = require("../src/domain/parameter/service/ParameterService");
const HistogramResultService = require("../src/domain/histogramresult/HistogramResultService");
const SerialClientCoreFactory = require("../src/infra/connection/serial/factory/SerialClientCoreFactory");
const ClientConnectionFactory = require("../src/infra/clientconnection/factory/ClientConnectionFactory");

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
);

bufferDataListener.setup();

const clientConnectionFactory =
    new ClientConnectionFactory(bufferDataEmitter);

new EquipmentConnectionManager(
    equipmentService,
    clientConnectionFactory
)
    .initialize()
    .then(() => {
        console.log("Equipos inicializados...");
    })
    .catch((e) => {
        console.log("Error al inicializar los equipos", e);
        throw new Error(e);
    });
