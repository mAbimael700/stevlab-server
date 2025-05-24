const { z } = require("zod");

class EquipmentSchema {
  static schema = z
    .object({
      id: z.string().optional(),
      profile: z.string(),
      name: z.string(),
      configuration: z.object({
        connectionType: z.enum(["TcpInBound", "TcpOutBound", "Serial", "Ftp"]),
        port: z.string().optional(),
        macAddress: z.string().optional(),
        ipAddress: z.string().ip({ version: "v4" }).optional(),
        baudRate: z.number().min(9600).default(9600).optional(),
        remoteDirectory: z.string().optional(),
      }),
    })

    .refine(
      (equipment) => {
        const { configuration } = equipment;
        const { connectionType, port, ipAddress, macAddress, remoteDirectory } =
          configuration;

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
    return this.schema.safeParse(equipment);
  }
}

module.exports = EquipmentSchema;
