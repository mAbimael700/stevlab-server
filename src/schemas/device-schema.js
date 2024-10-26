const { z } = require("zod")

const deviceSchema = z.array(
    z.object({
        id: z.string(),
        name: z.string(),
        mac_address: z.string().min(12).transform(address => address.toUpperCase()),
        ip_address: z.string().optional(),
        port: z.string().optional(),
        ruta_ftp: z.string().optional(),
        area: z.object(
            {
                ID: z.number().int().positive(), // ID debe ser un número entero positivo
                Nombre_area: z.string().min(1, 'Nombre_area es requerido'), // Nombre_area no puede estar vacío
            }
        ).optional(),
        requireFtpConn: z.boolean().default(false).optional(),
    }).transform(obj => {
        if (DEVICES_REQUIRE_FTP_SERVER.includes(String(obj.area?.ID))) {
            obj.requireFtpConn = true
        }

        return obj
    }))