const { z } = require("zod");

class EquipmentSchema {
  static schema = z
    .object({
      id: z.string().optional(),
      name: z.string(),
      createdAt: z.date().optional(),
      modifiedAt: z.date().optional(),
      equipmentProfile: z.object({
        id: z.number(),
        connectionType: z.enum(["TcpInBound", "TcpOutBound", "Serial", "Ftp"]),
        name: z.string(),
        communicationProfile: z.object({
          id: z.string(),
          checksumRegex: z.string(),
          type: z.string(),
        }),
      }),
      equipmentConfiguration: z.object({
        port: z.string().optional(),
        macAddress: z.string().optional(),
        ipAddress: z.string().ip({ version: "v4" }).optional(),
        baudRate: z.number().min(9600).default(9600).optional(),
        remoteDirectory: z.string().optional(),
      }),
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
    return this.schema.safeParse(equipment);
  }

  static toDomain(raw) {
    if (!raw) return null;

    const transformed = {
      id: raw.id,
      name: raw.name,
      createdAt: raw.created_at,
      modifiedAt: raw.modified_at,
      lastConnection: raw.last_connection,
      connectionStatus: raw.connection_status,
      active: raw.active,
    };

    // Manejar relaciones incluidas
    if (raw.directoryHistorials) {
      transformed.directoryHistorials = raw.directoryHistorials;
    }

    if (raw.equipmentProfile) {
      transformed.equipmentProfile = {
        id: raw.equipmentProfile.id,
        communicationType: raw.equipmentProfile.communication_type,
        name: raw.equipmentProfile.name,
        active: raw.equipmentProfile.active,
        communicationProfile: raw.equipmentProfile.communicationProfile
          ? {
              id: raw.equipmentProfile.communicationProfile.id,
              checksumRegex:
                raw.equipmentProfile.communicationProfile.checksum_regex,
              type: raw.equipmentProfile.communicationProfile.type,
            }
          : undefined,
      };
    }

    return transformed;
  }
}

module.exports = EquipmentSchema;
