const equipmentService = require("../src/domain/Equipment/Memory/EquipmentService");
const { TcpServer } = require("../src/domain/TcpServer/TcpServer");
const server = new TcpServer(3000, equipmentService)
server.listen()
