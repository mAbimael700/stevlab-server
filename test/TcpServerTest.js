const equipmentService = require("../src/domain/Equipment/Memory/EquipmentService");
const { TcpServer } = require("../src/domain/TcpServer/TcpServer");
const { initializeEquipmentManager } = require("../src/middlewares/equipment/equiment-manager");
initializeEquipmentManager()
const server = new TcpServer(3000, equipmentService).listen();
