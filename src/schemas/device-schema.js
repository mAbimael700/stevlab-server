const { z } = require("zod");
const crypto = require("node:crypto");
const { getDevicesAreas } = require("../db/devices-areas");

const devices = getDevicesAreas()
const DEVICES_REQUIRE_FTP_SERVER = devices.filter(d => d.require_ftp_conn);
const DEVICES_REQUIRE_CONN_TCP_CLIENT = devices.filter(d => d.require_tcp_server_conn)
const DEVICES_REQUIRE_SERIAL_CONN = devices.filter(d => d.require_serial_conn)

const deviceSchema = z
  .object({
    id_device: z.string().optional().default(crypto.randomBytes(3).toString("hex")),
    id: z.string(),
    name: z.string(),
    mac_address: z
      .string()
      .min(12)
      .transform((address) => address.toUpperCase())
      .optional(),
    ip_address: z.string().optional(),
    port: z.string().optional(),
    remote_dir: z.string().optional(),
    require_ftp_conn: z.boolean().default(false).optional(),
    require_tcp_server_conn: z.boolean().default(false).optional(),
    require_serial_conn: z.boolean().default(false).optional(),
    baud_rate: z.number().optional().default(9600),
    area: z
      .object({
        ID: z.number().int().positive(), // ID debe ser un número entero positivo
        Nombre_area: z.string().min(1, "Nombre_area es requerido"), // Nombre_area no puede estar vacío
      })
      .optional(),
  })
  .transform((obj) => {
    if (DEVICES_REQUIRE_FTP_SERVER.some((device) => obj.id === device.id)) {
      obj.require_ftp_conn = true;
    }

    if (DEVICES_REQUIRE_CONN_TCP_CLIENT.some((device) => obj.id === device.id)) {
      obj.require_tcp_server_conn = true;
    }

    if (DEVICES_REQUIRE_SERIAL_CONN.some(device => obj.id === device.id)) {
      obj.require_serial_conn = true;
    }

    return obj;
  })
  .refine((obj) => !(obj.require_ftp_conn && !obj.remote_dir), {
    message: "A remote direction must have added to listen in FTP Server",
    path: ["remote_dir"],
  }).
  refine((obj) => !(obj.require_tcp_server_conn && !obj.ip_address && !obj.port), {
    message: "An ip address and port must have added to listen in TPC/IP Server",
    path: ["ip_address", "port"]
  });

function validateDevice(device) {
  const result = deviceSchema.safeParse(device);

  console.log(result.error?.errors);


  return result
}

module.exports = {
  validateDevice,
};
