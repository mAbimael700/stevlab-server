const MacAddressResolver = require("@/infra/network/utils/MacAddressResolver");
const IpAddressNormalizer = require("@/infra/network/utils/IpAddressNormalizer");

class ConnectionValidatorService {
    constructor({equipmentQueryService}) {
        this.equipmentService = equipmentQueryService;
        this.macAddressResolver = new MacAddressResolver();
        this.ipNormalizer = new IpAddressNormalizer();
    }

    /**
     * Válida si un equipo está autorizado para conectarse al servidor LIS
     * utilizando tanto su IP como su MAC address en una sola consulta.
     * @param {string} ipAddress - Dirección IP del equipo que intenta conectarse
     * @returns {Promise<EquipmentDto>} Equipo validado
     * @throws {Error} Si el equipo no está autorizado
     */
    async validateConnection(ipAddress) {
        try {
            // Normalizar IP (convertir IPv6 mapeada a IPv4 si es necesario)
            const normalizedIp = this.ipNormalizer.normalize(ipAddress);

            // Obtener MAC address del equipo remoto
            const macAddress = await this.macAddressResolver.resolve(normalizedIp);

            // Validar equipo con IP y MAC en una sola consulta
            const authorizedEquipment = await this.equipmentService.findByIpAndMacAddress(
                normalizedIp,
                macAddress
            );

            if (!authorizedEquipment) {
                throw new Error(
                    `Equipo no autorizado. IP: ${normalizedIp}, MAC: ${macAddress}`
                );
            }

            return authorizedEquipment;

        } catch (error) {
            throw new Error(`Validación de conexión fallida: ${error.message}`);
        }
    }
}

module.exports = ConnectionValidatorService;