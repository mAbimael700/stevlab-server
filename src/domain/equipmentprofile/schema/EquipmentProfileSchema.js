const { z } = require("zod")
const CommunicationProfileSchema = require("../../CommunicationProfile/CommunicationProfileSchema")

class EquipmentProfileSchema {

    static schema = z.object({
        id: z.union([z.number(), z.bigint()]),
        communicationType: z.enum(["TcpInbound", "TcpOutbound", "Serial", "Ftp"]),
        name: z.string(),
        active: z.boolean(),
        communicationProfile: CommunicationProfileSchema.schema
    })


    
}

module.exports = EquipmentProfileSchema
