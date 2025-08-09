class EquipmentConnectionStatusService {
    constructor(dependencies = {}) {

        this.equipmentService = dependencies.equipmentService
        this.emitter = dependencies.emitter

        this.emitToChannel = this.emitter.emitToChannel
    }


    async updatelastConnection(equipmentId, timestamp) {
        const { lastConnection, name, id } = await this.equipmentService.updateLastConnection(equipmentId, timestamp)
        this.emitToChannel("equipment-status", "last-connection", { lastConnection, name, id })
    }


    /**
     *
     * @param {number | bigint} equipmentId
     * @param {"connected" | "disconnected" | "closed" | "connecting"} newStatus
     */
    async connectionStatus(equipmentId, newStatus) {
        const { status, name, id } = await this.equipmentService.updateConnectionStatus(equipmentId, newStatus)
        this.emitToChannel("equipment-status", "connection-status", { status, name, id })
    }

}