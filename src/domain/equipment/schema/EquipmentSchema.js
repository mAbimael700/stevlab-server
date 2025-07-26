const {z} = require("zod");
const EquipmentProfileSchema = require("@/domain/equipmentprofile/schema/EquipmentProfileSchema");
const EquipmentConfigurationSchema = require("@/domain/equipmentconfiguration/schema/EquipmentConfigurationSchema");

class EquipmentSchema {
    static schema = z
        .object({
            id: z.bigint().optional(),
            name: z.string(),
            createdAt: z.date().nullable().optional(),
            modifiedAt: z.date().nullable().optional(),
            equipmentProfile: EquipmentProfileSchema.schema,
            equipmentConfiguration: EquipmentConfigurationSchema.schema,
        })
        .refine(
            (equipment) => {
                const {equipmentConfiguration, equipmentProfile} = equipment;
                const {port, ipAddress, macAddress, remoteDirectory} =
                    equipmentConfiguration;

                const {communicationType} = equipmentProfile;
                // Check what fields are required based on connectionType
                switch (communicationType) {
                    case "Ftp":
                        return !!ipAddress && !!port && !!remoteDirectory;
                    case "TcpInbound":
                        return !!ipAddress && !!macAddress;
                    case "TcpOutbound":
                        return !!ipAddress && !!macAddress && !!port;
                    case "Serial":
                        return !!port;
                    default:
                        return false;
                }
            },
            {
                message: "Falta completar la configuración del equipo",
                path: ["equipmentConfiguration"],
            }
        );

    static creationSchema = z.object({
        name: z.string(),
        equipmentProfile: z.number().int(),
        equipmentConfiguration: EquipmentConfigurationSchema.schema,
    });

    static validate(equipment) {
        return this.schema.safeParse(equipment);
    }

    static validateCreation(data) {
        return this.creationSchema.safeParse(data);
    }
}

module.exports = EquipmentSchema;
