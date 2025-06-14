const { exec } = require("node:child_process");
const os = require("os");
const EquipmentDto = require("../../../domain/Equipment/EquipmentDto");
class ConnectionValidator {
  constructor(equipmentService) {
    this.equipmentService = equipmentService;
  }

  /**
   * Valida si el equipo está registrado en el servidor LIS.
   * @param {string} ipAddress - El socket de conexión TCP/IP del equipo.
   * @returns {Promise<EquipmentDto | null>}
   */
  async validate(ipAddress) {
    try {
      // Verificar si es una dirección IPv6 mapeada a IPv4
      if (ipAddress.startsWith("::ffff:")) {
        ipAddress = ipAddress.split("::ffff:")[1];
      }

      const equipmentWithIpAddress = await this.equipmentService.findByIpAddress(ipAddress)

      if (!equipmentWithIpAddress) {
        throw new Error(
          `No se encontró la dirección IPv4 en la lista de direcciones permitidos en el whitelist. Cerrando conexión.`
        );
      }

      // Obtener la dirección MAC utilizando la dirección IP remota
      const macAddress = await ConnectionValidator.getMacAddress(ipAddress);

      if (!macAddress) {
        throw new Error(
          `No se encontró la dirección MAC para el equipo con la dirección IP ${ipAddress}. Cerrando conexión.`
        );
      }
      
      let foundEquipment =
        await this.equipmentService.findByMacAddress(macAddress);

      if (!foundEquipment) {
        throw new Error(
          "El equipo que se intenta conectar no se encuentra registrado en la configuración del servidor. Conexión cerrada."
        );
      }

      return foundEquipment;

    } catch (error) {

      throw error;
    }
  }

  /**
   * Obtiene la dirección MAC de un dispositivo remoto utilizando la dirección IP especificada.
   * Si no se encuentra la dirección MAC remota, intenta obtener la dirección MAC local.
   * @param {string} ipAddress - Dirección IP del dispositivo remoto.
   * @returns {Promise<string>} Una promesa que resuelve con la dirección MAC en formato "XXXXXXXXXXXX" (mayúsculas y sin separadores).
   */
  static getMacAddress(ipAddress) {
    return new Promise((resolve, reject) => {
      exec(`arp -a ${ipAddress}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error ejecutando arp: ${error.message}`);
          reject(error);
          return;
        }

        // Busca la dirección MAC en la salida del comando arp
        const macAddressMatch = stdout.match(
          /([0-9a-f]{2}[:-]){5}([0-9a-f]{2})/i
        );

        if (macAddressMatch) {
          const macAddress = macAddressMatch[0]
            .toUpperCase()
            .replace(/[:]/g, "-"); // Convertir a mayúsculas y quitar separadores
          resolve(macAddress);
        } else {
          const localMacAddress = this.getLocalMacAddress();

          if (!localMacAddress) {
            console.log("No se encontró la dirección MAC.");
            reject(new Error("No se encontró la dirección MAC."));
          } else {
            resolve(localMacAddress);
          }
        }
      });
    });
  }

  /**
   * Obtiene la dirección MAC de la interfaz de red local, dando prioridad a Ethernet y luego a Wi-Fi.
   * @returns {string|null} Dirección MAC en formato "XXXXXXXXXXXX" (mayúsculas y sin separadores), o null si no se encuentra.
   */
  static getLocalMacAddress() {
    // Obtener las interfaces de red
    const networkInterfaces = os.networkInterfaces();

    // Buscar la dirección MAC de Ethernet primero
    for (const interfaceName in networkInterfaces) {
      const interfaces = networkInterfaces[interfaceName];

      for (const iface of interfaces) {
        if (
          iface.family === "IPv4" &&
          !iface.internal &&
          interfaceName.toLowerCase().includes("ethernet")
        ) {
          return iface.mac.toUpperCase().replace(/:/g, "-");
        }
      }
    }

    // Si no encuentra Ethernet, busca Wi-Fi
    for (const interfaceName in networkInterfaces) {
      const interfaces = networkInterfaces[interfaceName];

      for (const iface of interfaces) {
        if (
          iface.family === "IPv4" &&
          !iface.internal &&
          interfaceName.toLowerCase().includes("wi-fi")
        ) {
          return iface.mac.toUpperCase().replace(/:/g, "");
        }
      }
    }

    console.log(
      "No se encontró la interfaz Ethernet o Wi-Fi con dirección MAC."
    );
    return null; // Retorna null si no encuentra ninguna
  }
}

module.exports = {
  ConnectionValidator,
};
