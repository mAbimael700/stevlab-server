require('module-alias/register');

const ExpressServer = require("../../src/infra/http/server/ExpressServer");

const EquipmentController = require("../../src/infra/http/controllers/EquipmentController");
const ResultSenderController = require("../../src/infra/http/controllers/ResultSenderController");
const ResultController = require("../../src/infra/http/controllers/ResultController");

const prisma = require("../../src/infra/prismaclient/PrismaClient");

const ResultRouter = require("../../src/infra/http/routes/ResultRouter");

const EquipmentRepository = require("../../src/domain/equipment/repository/EquipmentRepository");
const ParameterRepository = require("../../src/domain/parameter/repository/ParameterRepository");
const ResultRepository = require("../../src/domain/result/repository/ResultRepository");
const EquipmentProfileRepository = require("../../src/domain/equipmentprofile/repository/EquipmentProfileRepository");
const ParameterDictionaryRepository = require("../../src/domain/parameterdictionary/repository/ParameterDictionaryRepository");

const ResultService = require("../../src/domain/result/service/ResultService");
const ParameterService = require("../../src/domain/parameter/service/ParameterService");
const EquipmentService = require("../../src/domain/equipment/service/EquipmentService");
const HistogramResultService = require("../../src/domain/histogramresult/HistogramResultService");
const ParameterDictionaryService = require("../../src/domain/parameterdictionary/service/ParameterDictionaryService");
const EquipmentRouter = require("../../src/infra/http/routes/EquipmentRouter");
const ResultSenderRouter = require("../../src/infra/http/routes/ResultSenderRouter");

//Repositorios
const equipmentRepository = new EquipmentRepository(prisma);
const equipmentProfileRepository = new EquipmentProfileRepository(prisma);
const resultRepository = new ResultRepository(prisma)
const parameterRepository = new ParameterRepository(prisma)
const parameterDictionaryRepository = new ParameterDictionaryRepository(prisma)
const histogramRepository = new HistogramResultService(prisma)

//Servicios
const dictionaryService = new ParameterDictionaryService({
    parameterRepository,
    parameterDictionaryRepository,
})

const parameterService = new ParameterService({
    parameterRepository,
    parameterDictionaryRepository,
    dictionaryService
})


let histogramService = new HistogramResultService(histogramRepository);

const resultService = new ResultService(
    resultRepository,
    parameterService,
    histogramService
)


const equipmentService = new EquipmentService({
    equipmentRepository,
    equipmentProfileRepository
});

const resultSenderService = {};

//Controladores

const resultController = new ResultController({
    resultService,
    parameterService
});

const equipmentController = new EquipmentController({
    equipmentService,
});

const resultSenderController = new ResultSenderController({
    resultSenderService
});


//Routers
const resultRouter = new ResultRouter({
    resultController
}).getRouter();

const equipmentRouter = new EquipmentRouter({
    equipmentController
}).getRouter()

const resultSenderRouter = new ResultSenderRouter({
    resultSenderController
}).getRouter()

//Servidores
ExpressServer.createAndStart(3000, {
    resultRouter,
    resultSenderRouter,
    equipmentRouter

}).then(r => "Servidor iniciado");