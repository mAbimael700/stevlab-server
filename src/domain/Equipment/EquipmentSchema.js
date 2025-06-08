const { z } = require("zod");
const EquipmentProfileSchema = require("../EquipmentProfile/EquipmentProfileSchema");

class EquipmentSchema {
  static schema = z
    .object({
      id: z.bigint().optional(),
      name: z.string(),
      createdAt: z.date().nullable().optional(),
      modifiedAt: z.date().nullable().optional(),
      equipmentProfile: EquipmentProfileSchema.schema,
      equipmentConfiguration: z.object({
        port: z.string().nullable().optional(),
        macAddress: z.string().nullable().optional(),
        ipAddress: z.string().ip({ version: "v4" }).nullable().optional(),
        baudRate: z.number().min(9600).default(9600).nullable().optional(),
        remoteDirectory: z.string().nullable().optional(),
      }),
    })
    .refine(
      (equipment) => {
        const { equipmentConfiguration, equipmentProfile } = equipment;
        const { port, ipAddress, macAddress, remoteDirectory } =
          equipmentConfiguration;

        const { communicationType } = equipmentProfile;
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

  static validate(equipment) {
    return this.schema.safeParse(equipment);
  }
}

module.exports = EquipmentSchema;
