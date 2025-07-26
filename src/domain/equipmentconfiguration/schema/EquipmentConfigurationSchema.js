const { z } = require("zod");

class EquipmentConfigurationSchema {
    static schema = z.object({
        port: z.string().nullable().optional(),
        macAddress: z.string().nullable().optional(),
        ipAddress: z.string().ip({ version: "v4" }).nullable().optional(),
        baudRate: z.number().min(9600).default(9600).nullable().optional(),
        remoteDirectory: z.string().nullable().optional(),
    })
}

module.exports = EquipmentConfigurationSchema