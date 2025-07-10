const { z } = require("zod");
const { NetworkInterface } = require("../services/NetworkInterface");

// Definir una expresión regular que permita validar un dominio.
const domainRegex = /^(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
const ipAdressRegex = /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$/
const netmaskRegex = /^(128|192|224|240|248|252|254|255)(\.0|\.128|\.192|\.224|\.240|\.248|\.252|\.254|\.255){3}$/

const serverSchema = z.object(
    {
        domain: z.string().regex(domainRegex, {
            message: "El dominio no tiene el formato correcto",
        }),
        interface: z.object({
            name: z.string().refine(n => {
                return NetworkInterface.getNetworkInterfaces().some(i => i.interface === n)
            }, { message: "No existe esa interfaz de red en el dispositivo.", path: ["interface", "name"] }),
            ip_address: z.string().regex(ipAdressRegex, {
                message: "La dirección IPv4 no tiene el formato correcto",
            }).optional(),
            netmask: z.string().regex(netmaskRegex, {
                message: "La máscara de red no tiene el formato correcto",
            }).optional()
        })
    }
)

function validateServerConf(config) {
    return serverSchema.safeParse(config);
}

module.exports = {
    serverSchema
}