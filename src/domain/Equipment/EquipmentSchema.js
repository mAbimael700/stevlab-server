const { z } = require("zod");
const EquipmentProfileSchema = require("../EquipmentProfile/EquipmentProfileSchema");

class EquipmentSchema {


  static schema = z
    .object({
      id: z.bigint().optional(),
      name: z.string(),
      createdAt: z.date().nullable().optional(),
      modifiedAt: z.date().nullable().optional(),
      equipmentProfile: EquipmentProfileSchema.schema.optional(),
      equipmentConfiguration: z.object({
        port: z.string().optional(),
        macAddress: z.string().optional(),
        ipAddress: z.string().ip({ version: "v4" }).optional(),
        baudRate: z.number().min(9600).default(9600).optional(),
        remoteDirectory: z.string().optional(),
      }).optional(),
    })
    .refine(
      (equipment) => {
        const { equipmentConfiguration } = equipment;
        const { connectionType, port, ipAddress, macAddress, remoteDirectory } =
          equipmentConfiguration;

        // Check what fields are required based on connectionType
        switch (connectionType) {
          case "Ftp":
            return !!ipAddress && !!port && !!remoteDirectory;
          case "TcpInBound":
            return !!ipAddress && !!macAddress;
          case "TcpOutBound":
            return !!ipAddress && !!macAddress && !!port;
          case "Serial":
            return !!port;
          default:
            return false;
        }
      },
      {
        message: "Falta completar la configuración del equipo",
        path: ["configuration"],
      }
    );

  static validate(equipment) {
    return this.schema.parse(equipment);
  }


}

module.exports = EquipmentSchema;
