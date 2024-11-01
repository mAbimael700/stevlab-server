const { z } = require("zod");

const DEVICES_REQUIRE_FTP_SERVER = ["CM200", "A15"];

const deviceSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    mac_address: z
      .string()
      .min(12)
      .transform((address) => address.toUpperCase()),
    ip_address: z.string().optional(),
    port: z.string().optional(),
    remote_dir: z.string().optional(),
    require_ftp_conn: z.boolean().default(false).optional(),
    area: z
      .object({
        ID: z.number().int().positive(), // ID debe ser un número entero positivo
        Nombre_area: z.string().min(1, "Nombre_area es requerido"), // Nombre_area no puede estar vacío
      })
      .optional(),
  })
  .transform((obj) => {
    if (DEVICES_REQUIRE_FTP_SERVER.some((device) => obj.id === device)) {
      obj.require_ftp_conn = true;
    }

    return obj;
  })
  .refine((obj) => !(obj.require_ftp_conn && !obj.remote_dir), {
    message: "A remote direction must have added to listen in FTP Server",
    path: ["remote_dir"],
  });

function validateDevice(device) {
  return deviceSchema.safeParse(device);
}

module.exports = {
  validateDevice,
};
