const { EquipmentRepository } = require("../Equipment/EquipmentRepository")

class ConnectionStatusEmitter {
    constructor(equipment, equipmentRepository) {
        this.equipment = equipment
        this.id = this.equipment.id
        this.equipmentRepository = equipmentRepository
        this.webSocketServerInstance = WebSocketServerInstance.getInstance()
        this.defaultMsg = `El estado de conexión del equipo ${equipment.name} se ha actualizado`
    }


    async lastConnection() {
        const timestamp = new Date()
        this.equipment.setLastConnection(timestamp)
        await this.equipmentRepository.updateLastConnection(this.id, timestamp)
        this.emitStatusWebSocket({ lastConnection: timestamp })
    }


    /**
     * 
     * @param {"connected" | "disconnected" | "closed" | "connecting"} status 
     */
    async connectionStatus(status) {
        this.equipment.setStatus(status)
        await this.equipmentRepository.updateConnectionStatus(this.id, status)
        this.emitStatusWebSocket({ connectionStatus: status })
    }

    emitStatusWebSocket(body, msg = this.defaultMsg, err = null) {
        this.webSocketServerInstance.emit
            (
                { ...body, equipmentId: this.id },
                'equipment-status',
                msg,
                err
            )
    }







}