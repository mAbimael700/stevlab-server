const {z} = require("zod");

class EquipmentConfigurationSchema {
    static schema = z.object({
        port: z.string().nullable().optional(),
        macAddress: z.string()
            .regex(/^([0-9A-Fa-f]{2}-){5}[0-9A-Fa-f]{2}$/, {
                message: "MAC address must be XX-XX-XX-XX-XX-XX format with hexadecimal characters.",
            })
            .nullable().optional(),
        ipAddress: z.string()
            .ip({version: "v4"})
            .nullable().optional(),
        baudRate: z.number()
            .min(9600)
            .default(9600)
            .nullable().optional(),
        remoteDirectory: z.string().nullable().optional(),
    })
}

module.exports = EquipmentConfigurationSchema