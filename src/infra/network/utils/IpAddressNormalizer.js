class IpAddressNormalizer {
    /**
     * Normaliza dirección IP (convierte IPv6 mapeada a IPv4)
     * @param {string} ipAddress
     * @returns {string}
     */
    normalize(ipAddress) {
        if (this.isIPv6MappedIPv4(ipAddress)) {
            return this.extractIPv4FromMapped(ipAddress);
        }
        return ipAddress;
    }

    /**
     * Verifica si es una dirección IPv6 mapeada a IPv4
     * @param {string} ipAddress
     * @returns {boolean}
     */
    isIPv6MappedIPv4(ipAddress) {
        return ipAddress.startsWith("::ffff:");
    }

    /**
     * Extrae la dirección IPv4 de una IPv6 mapeada
     * @param {string} mappedAddress
     * @returns {string}
     */
    extractIPv4FromMapped(mappedAddress) {
        return mappedAddress.split("::ffff:")[1];
    }
}

module.exports = IpAddressNormalizer;